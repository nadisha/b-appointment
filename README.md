# b-appointment
## Definitions
* [npm](http://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/) - stand for Node Package Manager
* [bower](http://bower.io/) - Javascript package manager which define version and retrieve dependencies ( This is similar to maven package manager, pom.xml). Bower js is used for managing front end components like html,css,js etc. 
* [Grunt](http://gruntjs.com/getting-started) - task based command line build tool for Javascript projects (similar to ANT)
* package.json - This file is used by npm to store metadata for projects published as npm modules. (similar to build.xml)
* Gruntfile.js - Configure or define tasks and load Grunt plugins
* bower.json - Bower keeps track of these packages in a manifest file

## Technologies
* Nodejs
* MongoDB
* Angular
* ExpressJs

## Setup
* Node.js - refer [Installing node.js on OSX 10.10 Yosemite](http://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/)
* [Npm](https://www.npmjs.com/) - npm is available once you install nodejs
Interactively create a package.json
```
> npm init
```
[Install Bower packages via npm](https://www.npmjs.com/package/grunt-bower-installer)
```
> npm install grunt-bower-installer --save-dev
Add following line to Gruntfile.js
grunt.loadNpmTasks('grunt-bower-installer');
```
* [Bower](http://bower.io/)
```
> npm install -g bower (-g stand to indicate that the installation is done globally)
> bower install <package>
```
Interactively create a [bower.json](http://bower.io/docs/creating-packages/#bowerjson)
```
> bower init
```
install package and add it to bower.json dependencies
```
> bower install <package> --save
```
install package and add it to bower.json devDependencies
```
> bower install <package> --save-dev
```
* [Grunt](http://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856)
[Grunt-init](http://gruntjs.com/project-scaffolding) is a scaffolding tool used to automate project creation. It will build an entire directory structure based on current environment and answers to some questions.
```
> npm install grunt-init --save-dev

```
Install Gruntfile scaffolding
```
> npm install grunt-init --save-dev
> git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile
> grunt-init gruntfile
```
Installing the CLI
```
> npm install grunt-cli --save-dev (-g stand to indicate that the installation is done globally)
```
Install the latest version of Grunt into project folder, adding it to the package.json devDependencies:
```
> npm install grunt --save-dev	
```
Adding gruntplugins or other modules (i.e. installing the JSHint task module)
```
> npm install grunt-contrib-jshint --save-dev
```

## Angular
[Install as bower module](https://github.com/angular/bower-angular)
```
> bower install angular --save
```

## [MEAN](http://mean.io/)
Stands for Mongo, Express, Angular and Node

## [Mongoose](http://mongoosejs.com) MongoDB ODM

## HTTP request logger  - [morgan](https://www.npmjs.com/package/morgan)

## Reference 
* [Sample Demo](https://github.com/scotch-io/node-todo/tree/tut1-starter)