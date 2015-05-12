var generators = require('yeoman-generator');
var fs = require('fs');

// module.exports = generators.Base.extend();

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    // this.option('coffee'); // This method adds support for a `--coffee` flag
  },

  start: function(){
  	
  	this.copy('index.html', 'index.html');
  }
});