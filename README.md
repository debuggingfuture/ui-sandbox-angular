# ui-sandbox-angular
angular 1.5 + webpack + semanticui



## Install
`npm install && npm install -g mocha -g protractor -g webpack -g webpack-dev-server -g karma-cli`

## Testing
http://localhost:9876/

If you want run only some tests matching a given pattern you can do this in the following way

karma start &
karma run -- --grep=<pattern>

## Integration test at Browserstack
TODO
https://github.com/browserstack/karma-browserstack-example

### Browser test
There are 3 modes of testing
1) local 2) browserstack local 3) browserstack cloud

#### Browserstack Local
- Use the binary at test/browser/BrowserStackLocal or Install the [binary](https://www.browserstack.com/local-testing)
1. run `./BrowserStackLocal_Mac <KEY>`
2. track at https://www.browserstack.com/automate

### Local
1. Start the server
webdriver-manager update --standalone

### Browserstack cloud
1. Run directly as long as keys are in .env file


## Run Test Case
BROWSER_TEST_MODE=<<mode>> protractor protractor.conf.js
mode = local / bs_local / bs

## Sample Ref:
https://github.com/browserstack/protractor-browserstack
