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
          message: 'Lincese Selection',
          name: 'linceseSelect',
          choices: [`MIT`, `ok`, `ok`]
        },
    ])

 const createReadme = (response) =>
 `
  
    #  ${response.username}
    ## ${response.description}
    #   ${response.install}
    ##   ${response.usage}
 `;
    


      
userInput()
  .then((response) => writeAsync('README.md', createReadme(response),))
  .then(() => console.log('Success!'))
  
  .catch((err) => console.error(err));
  
//   promptUser()
//   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));