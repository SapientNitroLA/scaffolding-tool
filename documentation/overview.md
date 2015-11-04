# Guidelines

- Frictionless: Is this the easiest way to scaffold a project?  Is this the best way for both large and small projects?
- DRY: Does the approach cause duplicated effort?
- Useful: Is scaffolding useful to the developer?
- Evergreen: Does the approach require unrelated effort to just to stay up to date?

# Requirements

- Build a default project with one command
- Customize a project by using config file
- Add additional features/update project by use of a generator?
- Save/share configuration files. Tags?


## Default site

- .editorconfig
- .gitattributes
- .gitignore
- .htaccess
- .jshintrc
- components
    - example
        - index.html
- docs
- grunt
    - config-clean.js
    - config-compress.js
    - config-copy.js
    - config-githooks.js
    - config-jshint.js
    - config-less.js
    - config-requirejs.js
    - config-uglify.js
    - config-watch.js
- Gruntfile.js
- index.html
- library
    - images
    - js
        - config
            - global-config
            - namespace.js
            - require-config.js            
        - mediators
            - boilerplate.js
            - common.js
            - home.js
        - modules
            - global-vps.js
            - no-conflict.js
            - polyfill.js
            - pubsub.js
        - vendor
            - jquery.js
            - lodash.js
            - Modernizr.js
            - picturefill.js
            - require.js
            - viewport.js
    - less
        - config
            - index.less
            - mixins.less
            - variables.less
        - home
            - index.less
            - default.less
            - mixins.less
            - variables.less
- package.json
- pageComponents
    - baseLayoutPage
        - apache-vars.html        - document-header.html        - global-scripts-footer.html        - global-scripts-head.html        - global-styles.html    - boilerplate
        - footer-assets.html        - head-assets.html        - index.html    - home
        - footer-assets.html        - head-assets.html        - index.html- README.md
- resources
    - env
        - .htaccess
        - apache-info.html
        - lib
            - main.css
        - php-info.php
    - flagged
        - functions.php
        - index.php
    - plan
    - responsive
        - index.html
- services
    - .htaccess
    - composer.json
    - composer.lock
    - index.php
    - README.md
    - vendor


## Configuration

- Add NPM modules
- Add dependencies
- Choose CSS or pre-compiler
- Create ES6-based project
    - Choose transpiler
- Add templating engine
- Change server
- Add/remove services
- Choose linting library
- Add testing framework
- Git/SVN
- Responsive
    - breakpoints



# Goals

## Stage 1

- Create default JSON/YAML site config file
    - describe site architecture
    - configuration
- Build default folder structure
- Write project files using default examples or HTMLbars templates
    - javascript
    - html
    - less
    - markdown
    - json/package.json
    - php
    - .htaccess
    - .gitignore
    - .ico
    - .jshintrc
- integrate external projects
    - Documentation
    - Release Strategy
    - Testing
- post-build
    - npm install
    

## Stage 2

- Scaffold project using external config file
- JavaScript
    - framework
    - coffeescript
    - typescript
    - **es5**
    - es6/es2015 (blech)
        - babel
        - traceur
- server type / services
    - **apache**
    - node
        - express
        - meteor
        - grunt-contrib-connect
        - npm module (http server)
- CSS
    - **less**
    - sass
    - scss
    - stylus
    - compass
    - bourbon
    - bootstrap
- templating engine
    - Handlebars
    - **HTMLbars**
    - Jade
    - Mustache
    - Underscore/Lodash
- package/task manager/dependencies
    - **volo**
    - bower
    - jspm
    - browserify
    - webpack
    - **grunt**
    - broccoli
    - brunch
    - mimosa
    - gulp
- linting
    - jslint
    - **jshint**
    - eslint
    
