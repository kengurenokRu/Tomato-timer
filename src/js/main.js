import { RenderTomato } from "./renderTomato";
import { Tomato } from "./tomato";
import { ControllerTomato } from "./conrollerTomato";

const tomato = new Tomato();
const controllerTomato = new ControllerTomato(tomato);
const renderTomato = new RenderTomato(document.getElementById('main'), controllerTomato);
renderTomato.render();







