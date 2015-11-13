## Quickstart on React
 
 Using Node, Webpack for build, babel.
 
 Nightwatch for e2e testing and tape for unit testing.
 
 To start:
 ```
 npm init
 npm start
 ```
 
 Run on `http://localhost:8080`
 
 Run unit tests:
 
 ```
 npm test
 ```
 
 Run e2e tests:
 
 Do once: `./node_modules/.bin/selenium-standalone install`
 
 ```
 npm start
 ./node_modules/.bin/selenium-standalone start debug
 npm run test:e2e
 ```