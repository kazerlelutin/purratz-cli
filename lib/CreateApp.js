const inquirer = require('inquirer'),
    { exec } = require('child_process'),
    fs = require('fs'),
    path = require('path'),
    packageTxt = require('./templates/PackageJson'),
    indexTxt = require('./templates/indexTxt'),
    serverTxt = require('./templates/serverTxt'),
    ctrlTxt = require('./templates/helloCtrlTxt'),
    serviceTxt = require('./templates/helloServiceTxt');

function CreateApp() {
    const dirName = path.dirname(process.mainModule.filename).split(path.sep).pop();
    const questions = [
        {
            type: 'input',
            name: 'projectName',
            message: 'Project Name ?',
            default: dirName,
            filter: val => {
                return val.replace(' ','-').toLowerCase();
            }
        },
        {
            type: 'input',
            name: 'projectAuthor',
            message: 'Your Name ?'
        },
        {
            type: 'input',
            name: 'projectLicence',
            message: 'Project licence ?',
            default: 'ISC'
        },
    ];

    inquirer.prompt(questions).then(answers => {
        console.log('Mercenary cats begin to work !');
        fs.mkdirSync('./src', { recursive: true });
        fs.writeFile('package.json',
            packageTxt(answers.projectName, answers.projectAuthor, answers.projectLicence),
            err =>console.log(err? err : 'package.json create'));
        fs.writeFile('index.js',indexTxt, err =>console.log(err? err : 'index create'));
        fs.writeFile('server.js',serverTxt, err =>console.log(err? err : 'server create'));
        fs.mkdirSync('./src/hello', { recursive: true });
        fs.mkdirSync('./public', { recursive: true });
        fs.mkdirSync('./public/text', { recursive: true });
        fs.mkdirSync('./public/image', { recursive: true });
        fs.mkdirSync('./public/video', { recursive: true });
        fs.mkdirSync('./public/style', { recursive: true });
        fs.mkdirSync('./public/sound', { recursive: true });
        fs.writeFile('./src/hello/hello.controller.js',ctrlTxt, err =>console.log(err? err : 'first controller create'));
        fs.writeFile('./src/hello/hello.service.js',serviceTxt, err =>console.log(err? err : 'first service create'));
        exec('npm install', (err, stdout) => {
            err ? console.error(err) : console.log(stdout)
            console.log('All dependencies installed !', 'You can launch with (localhost:3005): ', 'npm run start:dev');
        });
    });
}
module.exports = CreateApp;