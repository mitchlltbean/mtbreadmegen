const fs = require('fs');
const inquirer = require('inquirer')






inquirer.prompt([
    {
      type: 'input',
      message: 'What is your hero name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What continent are you one?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Tell me about your Hero skills?',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'where is your hero profile stored(linkedin)?',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'Where is your best trophys stored(github)?',
        name: 'github',
      },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
    fs.writeFile.("index.html")
  ));