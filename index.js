let url = "https://v2.jokeapi.dev/joke/Any";

function getJoke(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let joke = data;
      document.querySelector(".pickup_line").innerHTML = joke.setup;
      document.querySelector(".delivery_line").innerHTML = joke.delivery;
    })
    .catch((err) => console.error(err));
}
getJoke(url);

// let's infiltrate the DOM
const btn = document.querySelector("button");

const category = document.getElementById("category");

category.addEventListener("change", () => {
  url = `https://v2.jokeapi.dev/joke/${category.value}`;
  console.log(url);
  getJoke(url);
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getJoke(url);
});
