const inquirer = require('inquirer'),
    fs = require('fs'),
    path = require('path'),
    ctrlTemplate = require('./templates/ctrl.template'),
    serviceTemplate = require('./templates/service.template');

function CreateService() {
    const questions = [
        {
            type: 'input',
            name: 'serviceName',
            message: 'Service Name ?',
            filter: val =>  {
                return val.replace(' ','').toLowerCase();
            }
        },
        {
            type: 'list',
            name: 'ctrl',
            message: 'Create controller ?',
            choices: [ "yes", "no" ]
        }
    ];

    inquirer.prompt(questions).then(answers => {
        console.log('Mercenary cats begin to work !');
        const ctrl = answers.ctrl === "yes",
            nameCtrlFile = `./src/${answers.serviceName}/${answers.serviceName}.controller.js`,
            nameServiceFile = `./src/${answers.serviceName}/${answers.serviceName}.service.js`;
        console.log()
        fs.mkdirSync(`./src/${answers.serviceName}`, { recursive: true });
        fs.writeFile(nameServiceFile, serviceTemplate(answers.serviceName),
            err =>console.log(err? err : 'service create'));

        if(ctrl){
            if(!fs.existsSync(nameCtrlFile)){
                fs.writeFile(nameCtrlFile, ctrlTemplate(answers.serviceName,true),
                    err =>console.log(err? err : 'controller create'));
            }
        }
    });
}
module.exports = CreateService;