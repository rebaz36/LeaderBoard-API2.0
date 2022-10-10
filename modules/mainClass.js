export default class API {
  constructor() {
    this.gameName = 'My New Game';
    this.currentGame = 'l411KFbUDJ93PnAljSTL';
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  // GET A NEW GAME KEY
  async newGame() {
    const option = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name: this.gameName }),
    };
    const response = await fetch(this.url, option)
      .then((response) => response.json())
      .then((data) => {
        this.currentGame = data.result.substring(13, 34);
      })
      .catch(() => new Error('Error in newPost'));
    return response;
  }

  //  POST THE DATA TO THE API
  async newPost(name, getscore) {
    const option = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ user: name, score: getscore }),
    };
    await fetch(`${this.url + this.currentGame}/scores/`, option)
      .catch(() => new Error('Error in newPost'));
  }

  // GET THE DATA FROM THE API
  async getScores() {
    const getAPI = await fetch(`${this.url + this.currentGame}/scores/`);
    const data = await getAPI.json();
    return data;
  }
}