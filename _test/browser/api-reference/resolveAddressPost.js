const deepEqual = require('../helpers/deepEqual');

module.exports = {
    '@tags': ['SKIP'],

    'before': function(browser) {
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'API Reference: AvaTax: REST v2 - API Console for ResolveAddressPost': function(browser) {
        const expectedResponse = {address: {textCase: 'Upper', line1: '2000 Main Street', city: 'Irvine', region: 'CA', country: 'US', postalCode: '92614'}};

        browser
            .initialize(browser.globals.baseURL + '/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddressPost/');

        browser.page.endpointSummary()
            .navigateTo('#ResolveAddressPost-console')
            .navigateTo('#ResolveAddressPost-console-body .fill-sample-data')
            .click('#ResolveAddressPost-console-body .submit')

            .getConsoleText('ResolveAddressPost', 'responseConsole', function(res) {
                browser.assert.ok(deepEqual(res.address, expectedResponse.address),
                    "response for 'try it now' matches expected response");
            });
    }
};
