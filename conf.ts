exports.config = {
    framework: 'jasmine',
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./src/home.spec.ts'],
    onPrepare() { 
      require('ts-node').register({ 
        project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
      });
    },
    jasmineNodeOpts: {
      showColors: true
    }
  }