export const config = {
    specs: [
        // './test/specs/**/*.js',
        './test/specs/to-have-url.e2e.js',
        // './test/specs/to-have-url-containing.e2e.js',
        // './test/specs/to-have-title.e2e.js',
        // './test/specs/to-have-title-containing.e2e.js',
        // './test/specs/to-be-displayed.e2e.js',
        // './test/specs/to-exist.e2e.js',
        // './test/specs/to-be-present.e2e.js',
        // './test/specs/to-be-existing.e2e.js',
        // './test/specs/to-be-focused.e2e.js',
        // './test/specs/to-have-attribute.e2e.js',
        // './test/specs/to-have-attr.e2e.js',
        // './test/specs/to-have-attribute-containing.e2e.js',
        // './test/specs/to-have-attr-containing.e2e.js',
        // './test/specs/to-have-element-class.e2e.js',
        // './test/specs/to-have-element-class-containing.e2e.js',
        // './test/specs/to-have-element-property.e2e.js',
        // './test/specs/to-have-value.e2e.js',
        // './test/specs/to-have-value-containing.e2e.js',
        // './test/specs/to-be-clickable.e2e.js',
        // './test/specs/to-be-disabled.e2e.js',
        // './test/specs/to-be-enabled.e2e.js',
        // './test/specs/to-be-selected.e2e.js',
        // './test/specs/to-be-checked.e2e.js',
        // './test/specs/to-have-href.e2e.js',
        // './test/specs/to-have-link.e2e.js',
        // './test/specs/to-have-href-containing.e2e.js',
        // './test/specs/to-have-link-containing.e2e.js',
        // './test/specs/to-have-id.e2e.js',
        // './test/specs/to-have-text.e2e.js',
        // './test/specs/to-have-text-containing.e2e.js',
        // './test/specs/to-be-displayedInViewport.e2e.js',
        // './test/specs/to-have-children.e2e.js',
        // './test/specs/to-be-elements-array-of-size.e2e.js',
        // './test/specs/to-be-requested.e2e.js',
        // './test/specs/regular-expression.e2e.js',
    ],
    maxInstances: 10,
    commonCapabilities: {
        name: 'WebdriverIO Parallel Test Execution',
        build: `WebdriverIO Build - ${new Date().toJSON()}`,
        project: "WebdriverIO Tests",
        "LT:Options": {
            "w3c": true,
            "plugin": "node_js-webdriverio"
        }
    },
    capabilities: [
        {
            platfrom: "Windows 10",
            browserName: "Chrome",
            version: "latest"
        },
        {
            platform: "Windows 10",
            browserName: "Firefox",
            version: "latest"
        },
        {
            platform: "MacOS Ventura",
            browserName: "Safari",
            version: "latest"
        }
    ],
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    logFile: './logDir/api.log',
    services: [
        ['lambdatest', {
            tunnel: false
        }]
    ],
    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 100000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}