# Guidelines

- Frictionless: Is this the easiest way to scaffold a project?  Is this the best way for both large and small projects?  Can the developer easily add new features?
- DRY: Does the approach cause duplicated effort?
- Senior Associate skill level
- Am I reliable?


# Requirements

- Build a default buildable project with a single CLI command
- Customize scaffolded project by using config file
- Add additional features/update project by use of a generator
    - Scaffold out Angular
    - custom modules (js/css/html)
    - Add/remove services
- Add sugarcoat
- Include deployment project
- Include testing framework


# Additional features?

- Save/share configuration files (tags)


## Configuration

- Add NPM modules
- Add dependencies
- Choose CSS or pre-compiler
- Create ES6-based project
    - Choose transpiler
- Add templating engine
- Build tool
- Change server type
- Add testing framework
- Git/SVN
- Responsive
    - breakpoints
- Module format (AMD/UMD/CommonJS)?


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
    - .eslintrc
- integrate external projects
    - sugarcoat
    - Release Strategy
    - Testing
- post-scaffold
    - npm install


## Stage 2

- Scaffold project using external config file
- Specify build tool
- JavaScript
    - AMD/UMD/CommonJS
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
    - scss
        - compass
        - bourbon
        - bootstrap
    - stylus
- templating engine
    - Handlebars
    - **HTMLbars**
    - Jade
    - Mustache
    - Lodash
- package manager
    - **volo**
    - bower
    - jspm
- task manager/bundler
    - browserify
    - webpack
    - **grunt**
    - broccoli
    - brunch
    - mimosa
    - gulp
    - rollup


## Default site

- .eslintrc
- .gitattributes
- .gitignore
- .htaccess
- components
    - example
        - index.html
- docs
- grunt
    - config-clean.js
    - config-copy.js
    - config-eslint.js
    - config-githooks.js
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
            - global-config.js
            - require-config.js
            - services-config.js
        - mediators
            - boilerplate.js
            - common.js
            - home.js
        - modules
            - global-vps.js
            - namespace.js
            - noconflict.js
            - polyfill.js
            - pubsub.js
        - vendor
            - jquery.js
            - matchMedia.addListener.js
            - matchMedia.js
            - picturefill.js
            - require.js
            - viewport.js
    - styles
        - boilerplate
            - default.less
            - index.less
            - mixins.less
            - variables.less
        - components
            - example
                - default.less
                - index.less
                - mixins.less
                - variables.less
        - config
            - index.less
            - mixins.less
            - variables.less
        - global
            - base
                - default.less
                - index.less
                - normalize.css
                - typography.less
        - pages
            - home
                - index.less
                - default.less
                - mixins.less
                - variables.less
- package.json
- pages
    - boilerplate
        - footer.html
        - header.html
        - index.html
    - home
        - footer.html
        - header.html
        - index.html
    - includes
        - apache-vars.html
        - document-header.html
        - global-scripts-footer.html
        - global-scripts-headerer.html
        - global-styles.html
- README.md
- resources
    - env
        - .htaccess
        - apache-info.html
        - index.html
        - lib
            - main.css
        - php-info.php
    - plan
        - index.html
- services
    - .htaccess
    - composer.json
    - composer.lock
    - index.php
    - README.md
    - vendor