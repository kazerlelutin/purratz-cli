#!/usr/bin/env node
const
    clear = require('clear'),
    chalk = require('chalk'),
    figlet = require('figlet');

clear();
console.log(chalk.green(figlet.textSync('PrZ Service', { horizontalLayout: 'full' })));

const inquirer  = require('./CreateService');
const run = async _=> {
    const credentials = await inquirer();
    console.log(credentials);
};
run();