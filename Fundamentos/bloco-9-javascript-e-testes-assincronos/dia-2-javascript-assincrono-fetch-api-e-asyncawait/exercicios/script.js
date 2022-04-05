// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

function createElements(str,id) {
   const h2 = document.getElementById('jokeContainer')
   const pragraph = document.createElement('p')
   pragraph.innerText = str

   h2.appendChild(pragraph)
   h2.appendChild(img)
}

async function fetchJoke() {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      };
    const response = await fetch(API_URL, myObject)
    const data = await response.json()
    const {joke} = data
    createElements(joke)
};

window.onload = () => fetchJoke();