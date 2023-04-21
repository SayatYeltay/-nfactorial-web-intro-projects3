
const articles = [
{
    abstract: "7 CSS Practical tips",
    caption: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.", 
    topics: "JavaScript",
    date: "7 july",
    author: "Sayat"
},
{
    abstract: "7 CSS Practical tips",
    caption: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.", 
    topics: "JavaScript",
    date: "7 july",
    author: "Sayat"
},
{
    abstract: "7 CSS Practical tips",
    caption: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.", 
    topics: "JavaScript",
    date: "7 july",
    author: "Sayat"
},
];

const articlesDiv = document.getElementById("articles");
articles.map((item, _item) => {
    const html = `
    <div class="article">
    <div>
    <p><${item.author}/p>
    <p>${item.date}</p>
    <h4>${item.abstract}</h4>
    <p>${item.caption}</p>
    <div/>
    <img/>
  </div>`;
  articlesDiv.innerHTML += html;
});

// fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl')
// .then((arts) => console.log(arts.json()))
// .then(data=>console.log(data.splice(0,3)));

async function getStories(){
   const response = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=t0FLNVSPk2pJtHc8yY4m2xSDZwAGcYK6')
//    console.log(response);
   const respApi = await response.json();
   console.log(respApi.results.splice(0,3));
   // .then((arts) => console.log(arts.json()))
    // .then(data=>console.log(data.splice(0,3)));
}

getStories()
// const a = document.getElementById("click");
// let sample = {};
// a.addEventListener("click", () => {
//     console.log("asd");
// })