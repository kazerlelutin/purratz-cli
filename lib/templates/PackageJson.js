function PackageJson(name, author, licence) {
    return `{
  "name": "${name}",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start:dev": "nodemon -r esm server.js",
    "start": "node -r esm server.js"
  },
  "author": "${author}",
  "license": "${licence}",
  "dependencies": {
    "purratz": "latest"
  },
  "devDependencies": {
    "dotenv": "^8.2.0",
    "esm": "^3.2.25",
    "nodemon": "^2.0.4"
  }
}`
}

module.exports = PackageJson;