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
            var i = 1;
            (function loop() {
                term.echo(`complex code line ${i++}`);
                if (i < 31) {
                    timer = setTimeout(loop, 100);
                } else {
                    if (errorFlag) {
                        term.echo(' [[b;red;]ERROR]');
                    } else {
                        term.echo(' [[b;green;]OK]');
                    }
                    errorFlag = !errorFlag;
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
});