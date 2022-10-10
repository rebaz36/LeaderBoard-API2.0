import { refresh } from './elementsDOM.js';
import api from './classCall.js';
import builder from './newItemTemplate.js';

export default () => {
  refresh.addEventListener('click', (e) => {
    e.preventDefault();
    const myScores = api.getScores();
    myScores.then((data) => { builder(data.result); });
  });
};