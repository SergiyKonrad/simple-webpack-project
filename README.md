# Simple Webpack Project

This project demonstrates a basic Webpack setup for bundling JavaScript, CSS, Sass/SCSS & LESS, images, fonts, and TypeScript. It includes features like Hot Module Replacement (HMR), CSS preprocessing, TypeScript transpilation, and ES6+ JavaScript transpilation.

## Features

- **Webpack**: A powerful module bundler and build tool for modern JavaScript applications.
- **Hot Module Replacement (HMR)**: Automatically updates modules in the browser without requiring a full page reload.
- **Sass/SCSS & LESS**: Preprocessing for CSS with support for variables, nesting, and other advanced features.
- **TypeScript**: Adds static typing and modern JavaScript features.
- **ESLint**: Linting for JavaScript and TypeScript to enforce code quality and consistency.
- **Babel**: Transpiles ES6+ JavaScript to ensure compatibility with older browsers.
- **Asset Management**: Manages images, fonts, and other assets using Webpack loaders.
- **Source Maps**: Provides debugging support with source maps to trace errors and warnings to the original code.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14.x or later)
- **npm** (Node package manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SergiyKonrad/simple-webpack-project.git
   cd simple-webpack-project

2. **Install dependencies**:

npm install

npm install eslint --save-dev

npm install --save-dev typescript ts-loader

npm install --save-dev less less-loader sass sass-loader

npm install --save-dev webpack-bundle-analyzer eslint-webpack-plugin

### These commands install:

ESLint:  
Linter for JavaScript and TypeScript;

TypeScript:   
Static type-checking and transpilation;

ts-loader:  
A TypeScript loader for Webpack;

LESS and SASS:   
CSS preprocessors;

less-loader and sass-loader:  
Loaders to process LESS and SASS files with Webpack;

webpack-bundle-analyzer: 
Visualizes the size of Webpack output files;

eslint-webpack-plugin:  
Integrates ESLint into the Webpack build process.

## Running the Project
To start the development server with live reloading and HMR:
 ```bash
npm start
```
This will open the application in your default browser at http://localhost:9000/.
## Building for Production
To create a production build:
 ```bash
npm run build
```
The output will be in the dist/ directory, ready to be deployed.
## Linting
To run ESLint and check for code style issues:
 ```bash
npm run lint
```
## Configuration
### Webpack
Webpack is configured to handle:

-JavaScript/TypeScript:
Bundling and transpiling (with Babel and TypeScript).

-CSS/Sass/LESS:
Processing with Sass and LESS, and extracting into separate CSS files.

-Assets:
Handling images, fonts, and other assets.

-Plugins: 
CleanWebpackPlugin for cleaning the dist folder before each build, HtmlWebpackPlugin for generating the index.html, and more.

### ESLint
ESLint is configured to lint both JavaScript and TypeScript files, ensuring code quality and consistency throughout the project.

### Babel
Babel is configured to transpile modern JavaScript (ES6+) into a format compatible with older browsers.

### TypeScript
TypeScript configuration is handled via tsconfig.json, providing static typing and modern JavaScript features in your development.

## Known Issues
-Hot Module Replacement: Ensure that liveReload: true is set in webpack.config.mjs to enable proper live reloading and HMR.

-MIME Type Errors: Check the configuration of asset handling in Webpack if you encounter MIME type errors.

-Build Artifacts: The CleanWebpackPlugin may remove files in the dist/ folder after running the development server. Ensure proper configuration or remove the plugin if needed.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements or bugs.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
