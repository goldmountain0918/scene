var code_lines = '#include <iostream>\n' +
    'using namespace std;\n' +
    '\n' +
    'void enterData(int firstMatrix[][10], int secondMatrix[][10], int rowFirst, int columnFirst, int rowSecond, int columnSecond);\n' +
    'void multiplyMatrices(int firstMatrix[][10], int secondMatrix[][10], int multResult[][10], int rowFirst, int columnFirst, int rowSecond, int columnSecond);\n' +
    'void display(int mult[][10], int rowFirst, int columnSecond);\n' +
    '\n' +
    'int main()\n' +
    '{\n' +
    '\tint firstMatrix[10][10], secondMatrix[10][10], mult[10][10], rowFirst, columnFirst, rowSecond, columnSecond, i, j, k;\n' +
    '\n' +
    '\tcout << "Enter rows and column for first matrix: ";\n' +
    '\tcin >> rowFirst >> columnFirst;\n' +
    '\n' +
    '\tcout << "Enter rows and column for second matrix: ";\n' +
    '\tcin >> rowSecond >> columnSecond;\n' +
    '\n' +
    '\t// If colum of first matrix in not equal to row of second matrix, asking user to enter the size of matrix again.\n' +
    '\twhile (columnFirst != rowSecond)\n' +
    '\t{\n' +
    '\t\tcout << "Error! column of first matrix not equal to row of second." << endl;\n' +
    '\t\tcout << "Enter rows and column for first matrix: ";\n' +
    '\t\tcin >> rowFirst >> columnFirst;\n' +
    '\t\tcout << "Enter rows and column for second matrix: ";\n' +
    '\t\tcin >> rowSecond >> columnSecond;\n' +
    '\t}\n' +
    '\n' +
    '\t// Function to take matrices data\n' +
    '        enterData(firstMatrix, secondMatrix, rowFirst, columnFirst, rowSecond, columnSecond);\n' +
    '\n' +
    '        // Function to multiply two matrices.\n' +
    '        multiplyMatrices(firstMatrix, secondMatrix, mult, rowFirst, columnFirst, rowSecond, columnSecond);\n' +
    '\n' +
    '        // Function to display resultant matrix after multiplication.\n' +
    '        display(mult, rowFirst, columnSecond);\n' +
    '\n' +
    '\treturn 0;\n' +
    '}\n' +
    '\n' +
    'void enterData(int firstMatrix[][10], int secondMatrix[][10], int rowFirst, int columnFirst, int rowSecond, int columnSecond)\n' +
    '{\n' +
    '\tint i, j;\n' +
    '\tcout << endl << "Enter elements of matrix 1:" << endl;\n' +
    '\tfor(i = 0; i < rowFirst; ++i)\n' +
    '\t{\n' +
    '\t\tfor(j = 0; j < columnFirst; ++j)\n' +
    '\t\t{\n' +
    '\t\t\tcout << "Enter elements a"<< i + 1 << j + 1 << ": ";\n' +
    '\t\t\tcin >> firstMatrix[i][j];\n' +
    '\t\t}\n' +
    '\t}\n' +
    '\n' +
    '\tcout << endl << "Enter elements of matrix 2:" << endl;\n' +
    '\tfor(i = 0; i < rowSecond; ++i)\n' +
    '\t{\n' +
    '\t\tfor(j = 0; j < columnSecond; ++j)\n' +
    '\t\t{\n' +
    '\t\t\tcout << "Enter elements b" << i + 1 << j + 1 << ": ";\n' +
    '\t\t\tcin >> secondMatrix[i][j];\n' +
    '\t\t}\n' +
    '\t}\n' +
    '}\n' +
    '\n' +
    'void multiplyMatrices(int firstMatrix[][10], int secondMatrix[][10], int mult[][10], int rowFirst, int columnFirst, int rowSecond, int columnSecond)\n' +
    '{\n' +
    '\tint i, j, k;\n' +
    '\n' +
    '\t// Initializing elements of matrix mult to 0.\n' +
    '\tfor(i = 0; i < rowFirst; ++i)\n' +
    '\t{\n' +
    '\t\tfor(j = 0; j < columnSecond; ++j)\n' +
    '\t\t{\n' +
    '\t\t\tmult[i][j] = 0;\n' +
    '\t\t}\n' +
    '\t}\n' +
    '\n' +
    '\t// Multiplying matrix firstMatrix and secondMatrix and storing in array mult.\n' +
    '\tfor(i = 0; i < rowFirst; ++i)\n' +
    '\t{\n' +
    '\t\tfor(j = 0; j < columnSecond; ++j)\n' +
    '\t\t{\n' +
    '\t\t\tfor(k=0; k<columnFirst; ++k)\n' +
    '\t\t\t{\n' +
    '\t\t\t\tmult[i][j] += firstMatrix[i][k] * secondMatrix[k][j];\n' +
    '\t\t\t}\n' +
    '\t\t}\n' +
    '\t}\n' +
    '}\n' +
    '\n' +
    'void display(int mult[][10], int rowFirst, int columnSecond)\n' +
    '{\n' +
    '\tint i, j;\n' +
    '\n' +
    '\tcout << "Output Matrix:" << endl;\n' +
    '\tfor(i = 0; i < rowFirst; ++i)\n' +
    '\t{\n' +
    '\t\tfor(j = 0; j < columnSecond; ++j)\n' +
    '\t\t{\n' +
    '\t\t\tcout << mult[i][j] << " ";\n' +
    '\t\t\tif(j == columnSecond - 1)\n' +
    '\t\t\t\tcout << endl << endl;\n' +
    '\t\t}\n' +
    '\t}\n' +
    '}';


$(function() {
    function progress(percent, width) {
        var size = Math.round(width*percent/100);
        var left = '', taken = '', i;
        for (i=size; i--;) {
            taken += '=';
        }
        if (taken.length > 0) {
            taken = taken.replace(/=$/, '>');
        }
        for (i=width-size; i--;) {
            left += ' ';
        }
        return '[' + taken + left + '] ' + percent + '%';
    }
    var animation = false;
    var timer;
    var prompt;
    var string;
    var errorFlag = true;
    var term = $('#terminal').terminal(function(command) {
        if (command !== '') {
            var arr_code_lines = code_lines.split('\n');
            $('#progress').attr('class', errorFlag ? 'error' : 'success');
            var i = 0;
            (function loop() {
                term.echo(arr_code_lines[i++]);
                if (i < arr_code_lines.length) {
                    timer = setTimeout(loop, 40);
                } else {
                    if (errorFlag) {
                        term.echo(' [[b;red;]ERROR]');
                    } else {
                        term.echo(' [[b;green;]OK]');
                    }
                    errorFlag = !errorFlag;
                    animation = false;
                }
            })();
        } else {
            this.echo('');
        }
    },{
            greetings: '',
            name: '',
            height: 840
    });
    $('#gear').on('click', function() {
        $('#terminal').css('opacity', '1');
        $('#terminal').css('max-height', '840px');
    });

/*    const bar = document.getElementById('split__thumb');
    const top = document.getElementById('terminal');
    let mouse_is_down = false;

    bar.addEventListener('touchstart', (e) => {
        mouse_is_down = true;
    })

    document.addEventListener('touchmove', (e) => {
        if (!mouse_is_down) return;
        top.style.height = `${e.touches[0].clientY}px`;
    });

    document.addEventListener('touchend', () => {
        mouse_is_down = false;
    });*/
    window.onresize = function() {
        if (window.innerHeight < 1024) {
            $('#terminal').css('opacity', '1');
            $('#terminal').css('max-height', '840px');
        } else {
            $('#terminal').css('opacity', '1');
            $('#terminal').css('max-height', '0');
        }
    };
});
