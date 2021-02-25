const inquirer = require('inquirer'),
    { exec } = require('child_process'),
    fs = require('fs'),
    path = require('path'),
    ctrlTemplate = require('./templates/ctrl.template'),
    serviceTemplate = require('./templates/service.template');

function CreateCtrl() {
    const dirName = path.dirname(process.mainModule.filename).split(path.sep).pop();
    const questions = [
        {
            type: 'input',
            name: 'ctrlName',
            message: 'Controller Name ?',
            filter: val =>  {
                return val.replace(' ','').toLowerCase();
            }
        },
        {
            type: 'list',
            name: 'service',
            message: 'Create service ?',
            choices: [ "yes", "no" ]
        }
    ];

    inquirer.prompt(questions).then(answers => {
        console.log('Mercenary cats begin to work !');
        const service = answers.service === "yes",
            nameCtrlFile = `./src/${answers.ctrlName}/${answers.ctrlName}.controller.js`,
            nameServiceFile = `./src/${answers.ctrlName}/${answers.ctrlName}.service.js`;
        fs.mkdirSync(`./src/${answers.ctrlName}`, { recursive: true });
        fs.writeFile(nameCtrlFile, ctrlTemplate(answers.ctrlName,service),
            err =>console.log(err? err : 'controller create'));
        if(service){
            if(!fs.existsSync(nameServiceFile)){
                fs.writeFile(nameServiceFile, serviceTemplate(answers.ctrlName),
                    err =>console.log(err? err : 'service create'));
            }
        }
    });
}
module.exports = CreateCtrl;