const inquirer = require('inquirer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const clear = require('clear');

function CreateApp() {
    var log = [];
    console.log = d =>  {
        log.push(d);
        process.stdout.write(d + '\n');
    };

    clear();
    console.log(log)
    const questions = [
        {
            type: 'input',
            name: 'projectName',
            message: 'Project Name ?',
            default: "dirName"
        },
        {
            type: 'input',
            name: 'projectAuthor',
            message: 'Your Name ?',
            default: null
        },
        {
            type: 'input',
            name: 'projectLicence',
            message: 'Project licence ?',
            default: 'ISC'
        },
    ];

    inquirer.prompt(questions).then(answers => {
        console.log('Purratz App si ready to create !');
        fs.mkdirSync('./src', { recursive: true });
        const txt = require('./templates/PackageJson')
        fs.writeFile('package.json',txt(questions.projectName, questions.projectAuthor, questions.projectLicence), (err)=>console.log(err));
        console.log(JSON.stringify(answers, null, '  '));
        exec('npm install', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(stdout);
        });

    });
}
module.exports = CreateApp;