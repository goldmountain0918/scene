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
    var term = $('#terminal').terminal(function(command) {
        if (command !== '') {
            var command = command;
/*            var i = 0, size = 100;
            prompt = term.get_prompt();
            string = progress(0, size);
            term.set_prompt(progress);
            animation = true;
            (function loop() {
                string = progress(i++, size);
                term.set_prompt(string);
                if (i < 100) {
                    timer = setTimeout(loop, 100);
                } else {
                    term.echo(progress(i, size) + ' [[b;green;]OK]')
                        .set_prompt(prompt);
                    animation = false
                }
            })();*/
            var i = 1;
            (function loop() {
                term.echo(`complex code line ${i++}`);
                if (i < 31) {
                    timer = setTimeout(loop, 100);
                } else {
                    term.echo(' [[b;green;]OK]')
                    animation = false
                }
            })();
        } else {
            this.echo('');
        }
    },{
            greetings: '',
            name: '',
            height: 583
        });
    $('#gear').on('click', function () {
        term.exec(command);
    })
});