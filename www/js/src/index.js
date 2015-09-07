import { app } from './app';
import { colorPoint } from './colorpoint';

console.log('colorPoint', colorPoint.toString());

document.addEventListener('deviceready', app.init.bind(app), false);
