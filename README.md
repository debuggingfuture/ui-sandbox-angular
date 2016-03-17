# ui-sandbox-angular
angular 1.5 + webpack + semanticui



## Tools
npm install -g mocha -g protractor -g webpack -g webpack-dev-server -g karma-cli

## Testing
http://localhost:9876/

If you want run only some tests matching a given pattern you can do this in the following way

karma start &
karma run -- --grep=<pattern>

### Browser

- Start the server
webdriver-manager update --standalone
- Run Test Case
 protractor protractor.conf.js
