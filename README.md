# NGDTest App

## Table of Contents

* [About](#about)
* [Getting Started](#gettingstarted)
* [Dependencies](#dependencies)

## About
This is a simple app with just a login interface. Both email and password are required fields and the email address is validated before the login is successful. On successful login the locked image will change to an unlocked one. 


## Getting Started

- Clone repository to system
- Open folder and run ```cd ngdtest``` to navigate to project
- Run ```npm install``` to install dependencies
- For development run ```npm start`` to start development server at port 3000
- For production run ```npm run build``` to create production optimized project build
- Configure hosted server to serve "/build/index.html"
- To serve production build on local host run ```npm i -g serve && serve -s build``` to globally install a static server and serve the build at port 5000 (Don't forget to prefix this with ```sudo``` if you're using an iOS system)


## Dependencies

### Production dependencies
- react
- react-scripts
- react-dom
- Bootstrap (loaded via CDN)
- Jquery for the Bootstrap JS file (loaded via CDN)

### Development dependencies
- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- husky
- lint-staged
- prettier
- pretty-quick
