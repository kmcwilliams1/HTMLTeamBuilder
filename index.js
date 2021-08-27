
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML')


inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please name the project/team',
      name: 'title',
      validate: (value)=>{if(value){return true} else {return 'We need a title name'}}
    },
    {
        type: 'input',
        message: 'Enter the team member name',
        name: 'name',
      },
      {
        type: 'checkbox',
        message: 'What is their position?',
        choices: ["Manager", "Engineer", "Employee", "Intern"],
        name: 'position',
      },
      {
        type: 'input',
        message: 'What\'s their ID?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What\'s their email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What\'s the manager\'s office number?',
        name: 'office-number',
        when: (answers) => answers.position === 'Manager'
      },
      {
        type: 'input',
        message: 'What\'s the engineer\'s github account name?',
        name: 'github',
        when: (answers) => answers.position === 'Engineer'
      },
      {
        type: 'input',
        message: 'What\'s the intern\'s school?',
        name: 'school',
        when: (answers) => answers.position === 'Intern'
      },
      
    ]).then ((response) =>{
        console.log(response)
          fs.writeFile('readme.md', generateHTML(response), (err) =>  
          err ? console.log(err) : console.log('Success!')
        );
        });
        