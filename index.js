#!/usr/bin/env node
const
    clear = require('clear'),
    chalk = require('chalk'),
    figlet = require('figlet');

clear();
console.log(chalk.yellow(figlet.textSync('PurratZ', { horizontalLayout: 'full' })));

const inquirer  = require('./lib/CreateApp');
const run = async _=> {
    const credentials = await inquirer();
    console.log(credentials);
};
run();