const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
    {
      type: 'list',
      name: 'shape',
      message: 'What shape is your logo going to be?',
      choices: ['square','triangle', 'circle' ]
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'what color would you like the shape to be?',
      default: 'green'
    },
    {
      type: 'input',
      name: 'text',
      message: 'What text would be found in your logo?',
      default: 'TradeMark'
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'what color would you like the text in the shape to be?',
        choices: ['white','blue', 'red', 'green'],
        default: 'white'
      }
  ];

  inquirer.prompt(questions).then(answers => {
    const { shape, shapeColor, text, textColor } = answers;
  
    // Generate the SVG markup based on the user's input
    const svgCreator = generateSVG(shape, shapeColor, text, textColor);
  
    // Save the SVG markup to a file
    fs.writeFile('logo.svg', svgCreator, (err) => {
      if (err) { throw err;     
      } else {
        console.log('Logo Saved!!!');
      }
    });
  });