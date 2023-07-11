const fs = require('fs');
const inquirer = require('inquirer');

const { Square, Circle, Triangle} = require('./lib/shapes');


// create a array of object questions for the user input
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
      validate:(answer)=>{
        if(answer.length > 3){
          return 'Too Long, Max 3 characters!'
        }else{
          return true
        }
      },
      default: 'APP'
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'what color would you like the text in the shape to be?',
        choices: ['white','blue', 'red', 'green'],
        default: 'white'
      }
  ];

  // call in inquirer to generate the questions in the terminal
  inquirer.prompt(questions).then(answers => {
    // const { shapeColor, text, textColor } = answers;
    const {shape, shapeColor, text, textColor} = answers;
    let SVGstring = '';
    if (shape === 'square'){

      const square = new Square();
      square.setColor(shapeColor);
      square.setText(text);
      square.setTextColor(textColor);
      SVGstring = square.openSVG() + square.render() + square.renderText() + square.closeSVG();
      console.log(SVGstring);

// console.log(square.render());
    } else if ( shape === "triangle"){
      const triangle = new Triangle();
      triangle.setColor(shapeColor);
      triangle.setText(text);
      triangle.setTextColor(textColor);
      SVGstring = triangle.openSVG() + triangle.render() + triangle.renderText() + triangle.closeSVG();

      console.log(SVGstring);
    } else {
      const circle = new Circle();
      circle.setColor(shapeColor);
      circle.setText(text);
      circle.setTextColor(textColor)

      SVGstring = circle.openSVG() + circle.render() + circle.renderText() + circle.closeSVG();
      console.log(SVGstring);
    }
 
  
    // Generate the SVG markup based on the user's input
    // const svgCreator = generateSVG(shape, shapeColor, text, textColor);
  
    // Save the SVG markup to a file
    fs.writeFile('./examples/logo.svg', SVGstring, (err) => {
      if (err) { throw err;     
      } else {
        console.log('Logo Saved!!!');
      }
    });
  });