exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://demos.creative-tim.com/now-ui-dashboard-angular',
    specs: ['spec.js'],
    framework: 'jasmine2',

    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        var jasmineReporters = require('./node_modules/jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true));
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'specs' }));
    
        browser.manage().window().maximize();
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        print: () => { },
        defaultTimeoutInterval: 50000
    }
};
