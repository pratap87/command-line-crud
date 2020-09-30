#!/usr/bin/env node

const { args, alias } = require('commander');
const program = require('commander');
const { prompt } = require('inquirer')
const { findCustomer, addCustomer, listCustomers, updateCustomer, removeCustomer } = require('./index');


const questions = [{
        type: 'input',
        name: 'firstname',
        message: 'Customer First name'
    },
    {
        type: 'input',
        name: 'Lastname',
        message: 'Customer Lastname name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer email address'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer phone number'
    }

]
program
    .version('1.0.0')
    .description('Client registration system')



// program.command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({ firstname, lastname, phone, email })
//     })
//Add
program.command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers))
    })
    //Find
program.
command('find <name>')
    .alias('f')
    .description('find a customer')
    .action(name => findCustomer(name))

//update
program.command('update <_id>')
    .alias('u')
    .description('update a customer')
    .action((_id) => {
        prompt(questions).then(answers => updateCustomer(_id, answers));
    })

//remove command
program.command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id => removeCustomer(_id))
    //List Command
program.command('list')
    .alias('l')
    .description('List all customer')
    .action(() => {
        listCustomers()
    })



program.parse(process.argv)