#!/usr/bin/env node
const
    clear = require('clear'),
    chalk = require('chalk'),
    figlet = require('figlet');

clear();
console.log(chalk.blue(figlet.textSync('PrZ CTRL', { horizontalLayout: 'full' })));

const inquirer  = require('./CreateCtrl');
const run = async _=> {
    const credentials = await inquirer();
    console.log(credentials);
};
run();