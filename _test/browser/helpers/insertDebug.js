

/**
 * This should ONLY be used in development!
 * Inspired by https://gist.github.com/elliotchance/63f2ebebe8d457307339
 * usage is
 *
 *     browser.insertDebug()
 *
 *  There should be a magenta continue button on the left hand corner of the
 *  page. The page should be paused for 10 minutes unless you click continue
 *
 */
exports.command = function insertDebug() {
    return this.executeAsync(function(done) {
        $('body').append('<button id="debug-continue">Continue</button>');
        const $debugContinue = $('#debug-continue');

        $debugContinue.css({
            'width': '100px',
            'height': '50px',
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'background-color': 'magenta',
            'z-index': 1000000,
            'color': 'white'
        });
        $debugContinue.click(function() {
            $debugContinue.remove();
        });
        done();
    })
    .waitForElementPresent('button#debug-continue')
    .waitForElementNotPresent('button#debug-continue', 600 * 1000);
};
