---
# WebdriverIO Assertions Demo Setup Guide
---

## Features of this framework
* Expect in WebdriverIO (Assertions)
* [Cloud Integration: LambdaTest](http://www.lambdatest.com?fp_ref=md-moeen-ajaz40)

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Visual Code - optional
* Install GitLens Extension from the Marketplace: `GitLens — Git supercharged by GitKraken https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens`
* Install Material Icon Theme Extension from the Marketplace: `Material Icon Theme by Philipp Kief https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme`
* Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

## How to Run Test Locally
* Go to the Project root directory and run command: `npm run wdio`

## How to Run Single Spec Locally
* Go to the Project root directory and run command: `npm run wdio wdio.conf.js --spec ./test/specs/to-have-url.e2e.js`

### How to view default Playwright HTML report
* Go to the Project root directory: `./playwright-report/index.html`

### Playwright Default HTML Test Report
![Playwright Default HTML Test Report](./assets/html-test-report.PNG?raw=true "Playwright Default HTML Test Report")

## How to Run Test on LambdaTest Cloud
* Go to Project root directory and run command: `npm run lambdatest`

### Terminal Test Result
![Terminal Test Result](./assets/terminal-lt.PNG?raw=true "Terminal Test Result")

### LambdaTest Cloud Results
![LambdaTest Cloud Results](./assets/lambdatest-results.PNG?raw=true "LambdaTest Cloud Results")

![LambdaTest Cloud Results Expanded View](./assets/lambdatest-results-expanded-view.PNG?raw=true "LambdaTest Cloud Results Expanded View")
