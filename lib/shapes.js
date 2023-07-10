class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    setText(text){
        this.text = text;
    
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
   
}

class Circle extends Shape {
    openSVG() {
      return `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">`;
    }
    closeSVG() {
      return `</svg>`;
    }
    render() {
      return `<circle cx="200" cy="150" r="120" fill="${this.color}" />`;
    }
    renderText() {
      return `<text x="200" y="175" font-size="90" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Square extends Shape {
    openSVG() {
      return `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">`;
    }
    closeSVG() {
      return `</svg>`;
    }
    render() {
      return `<rect x="150" y="150" width="200" height="200" fill="${this.color}" />`;
    }
    renderText() {
      return `<text x="250" y="275" font-size="90" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Triangle extends Shape {
    openSVG() {
      return `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">`;
    }
    closeSVG() {
      return `</svg>`;
    }
    render() {
      return `<polygon points="200,50 100,250 300,250" fill="${this.color}" />`;
    }
    renderText() {
      return `<text x="200" y="175" font-size="90" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  


module.exports = {
    Circle,
    Square,
    Triangle

};
