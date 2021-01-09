const fs = require('fs');
const util = require('util');
const writeAsync = util.promisify(fs.writeFile);
const inquirer = require('inquirer')
// const linChoices = [MIT,  ]




const userInput = () =>
inquirer.prompt([
    {
      type: 'input',
      message: 'What is the Title of Project?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Description of Project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation Steps',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Usage Information',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Contributions',
        name: 'contra',
      },
      {
      type: 'input',
        message: 'Test Instructions',
        name: 'instruct',
      },
      {
        type: 'list',
          message: 'License Selection',
          name: 'licenseSelect',
          choices: [`MIT`, `BSD`, `GPL`]
        },
        {
        type: 'input',
        message: 'Github Username',
        name: 'git',
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
            },
    ])

 const createReadme = (response) =>
 `
# ${response.username}


## Table of Contents
[Description](#Description)

[Install](#Install)

[Usage](#Usage)

[Contributions](#Contributions)

[Test Instructions](#Test-Instructions)

[License](#License)

[Questions](#Questions)

# Description
${response.description}

# Install
${response.install}

# Usage
${response.usage}

# Contributions
${response.contra}

# Test Instructions
${response.instruct}

# License
${response.licenseSelect}
 
# Questions- Contacts below if you have any issues
${response.git}

${response.email}






`;
    


      
userInput()
  .then((response) => writeAsync('README.md', createReadme(response),))
  .then(() => console.log('Success!'))
  
  .catch((err) => console.error(err));
  
//   promptUser()
//   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));