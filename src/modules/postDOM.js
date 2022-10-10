import { name, score, submit } from './elementsDOM.js';
import api from './classCall.js';

const postData = () => {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const playerName = name.value;
    const playerScore = score.value;
    api.newPost(playerName, playerScore);
  });
};

export default postData;