const fs = require('fs');
// const inquirer = require('inquirer');



let data = fs.readFileSync('Template.html', 'utf8')

const name = "Sergio"



console.log(data.template());
    






// fs.readFile('./Template.html', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });


// const htmltemplate = new Promise ((resolve, reject) => {
//     resolve( fs.readFile('Template.html', 'utf8', (err, data) => 
//         {err ? reject : console.log('File was read') 
//         return data}))


// htmltemplate.then(console.log('then is working'))

// fs.writeFile('index.html', htmlInto, (err) =>
// err ? console.error(err) : console.log('Commit logged!'))


// fs.appendFile('index.html', htmlOutro, (err) =>
// err ? console.error(err) : console.log('Commit logged!'))

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your name?',
//       name: 'username',
//     },
//     {
//       type: 'list',
//       message: 'What languages do you know?',
//       name: 'languages',
//       choices:['english','spanish', 'german' ],
      
//     },
//     {
//       type: 'checkbox',
//       message: 'What is your preferred method of communication?',
//       name: 'communication',
//       choices:['email','Phone', 'text' ],
//     },
//   ])
//   .then((response) => {
//     // console.log(JSON.stringify(response));
//     fs.writeFile('index.html', `${JSON.stringify(response)}`, (err) =>
//     // TODO: Describe how this ternary operator works
//     err ? console.error(err) : console.log('Commit logged!'))
//   }
//   )