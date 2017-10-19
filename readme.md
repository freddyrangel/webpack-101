# Webpack 101

## Requirements:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
  * NVM is the easiest way to manage Node. [Its setup instructions
    here](https://github.com/creationix/nvm#installation). Then run `nvm install
node && nvm alias default node`, which installs the latest version of Node.js
and sets up your terminal so you can run it by typing `node`. With nvm you can
install multiple versions of Node.js and easily switch between them.
  * New to [npm](https://docs.npmjs.com/)?
* [Yarn](https://yarnpkg.com/en/)
  * If you're on a Mac, you can install Yarn 2 different ways: `npm i -g yarn`
    or `brew install yarn`

## Instructions

* Make sure you have satisfied all requirements listed above.
* Clone this repository.
* From the root of this project, run `yarn install` to install all the required dependencies.
* To confirm you have installed everything correctly, run `npm start` and navigate to `localhost:8080` in your browser. You should see a Todo App

## Module Cheatsheet

* [00-initialize-webpack](https://github.com/freddyrangel/webpack-101/compare/master...00-initialize-webpack)
* [01-webpack-dev-server](https://github.com/freddyrangel/webpack-101/compare/00-initialize-webpack...01-webpack-dev-server)
* [02-sourcemaps](https://github.com/freddyrangel/webpack-101/compare/01-webpack-dev-server...02-sourcemaps)
* [03-env-configs](https://github.com/freddyrangel/webpack-101/compare/02-sourcemaps...03-env-configs)
* [04-bundling-scripts](https://github.com/freddyrangel/webpack-101/compare/03-env-configs...04-bundling-scripts)
* [05-es6-modules](https://github.com/freddyrangel/webpack-101/compare/04-bundling-scripts...05-es6-modules)
* [06-modularizing-css](https://github.com/freddyrangel/webpack-101/compare/05-es6-modules...06-modularizing-css)
* [07-testing](https://github.com/freddyrangel/webpack-101/compare/06-modularizing-css...07-testing)
* [08-tree-shaking](https://github.com/freddyrangel/webpack-101/compare/07-testing...08-tree-shaking)
* [09-vendor-bundle-and-caching](https://github.com/freddyrangel/webpack-101/compare/08-tree-shaking...09-vendor-bundle-and-caching)
