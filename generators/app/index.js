'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the dandy ' + chalk.red('SlcCustomClient') + ' generator!'
      ));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.appName = _.slugify(process.cwd().split('/').pop());
      this.destinationRoot(this.destinationRoot()+'/client');
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_index.html'),
        this.destinationPath('index.html'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_home.html'),
        this.destinationPath('views/commons/home.html'),
        { name: this.appName }
        );
      this.fs.copy(
        this.templatePath('_404.html'),
        this.destinationPath('views/commons/404.html')
        );
      this.fs.copy(
        this.templatePath('_.bowerrc'),
        this.destinationPath('.bowerrc')
        );
      this.fs.copy(
        this.templatePath('_app.css'),
        this.destinationPath('assets/css/app.css')
        );
      this.fs.copyTpl(
        this.templatePath('_app.js'),
        this.destinationPath('app.js'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_routes.js'),
        this.destinationPath('routes.js'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_controllers.js'),
        this.destinationPath('controllers.js'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_HomeCtrl.js'),
        this.destinationPath('controllers/HomeCtrl.js'),
        { name: this.appName }
        );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
        );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
        );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
