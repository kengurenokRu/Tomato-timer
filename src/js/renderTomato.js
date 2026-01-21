class RenderTomato {

    constructor(root, controller) {
    this.root = root;
    this.controller = controller;
    this.text = document.createElement('p');
    this.text.textContent = 0;
    this.incrementButton = document.createElement('button');
    this.incrementButton.textContent = '+';
    this.decrementButton = document.createElement('button');
    this.decrementButton.textContent = '-';
    this.bindListeners();
  }


    render() {
    this.root.append(this.text);
    this.root.append(this.incrementButton);
    this.root.append(this.decrementButton);
  }
}


const tomato = new Tomato();
const controllerTomato = new ControllerTomato(tomato);
const renderTomato = new RenderTomato(document.getElementById('app'), controller);
renderTomato.render();