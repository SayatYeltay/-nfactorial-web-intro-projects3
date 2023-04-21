async function getStories(){
    const response = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=t0FLNVSPk2pJtHc8yY4m2xSDZwAGcYK6')
    if(!response.ok && response.status==='404'){
        console.log("Not found")
    }
    const articles = document.getElementById('articles');
    const respApi = await response.json();
    console.log(respApi)
    console.log(respApi.results.splice(0,3));
    
    for(let i = 0; i<respApi.results.splice(0,3).length; i++){
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date(`${respApi.results[i].published_date}`);
        date = date.getDate() + " " + date.getMonth() + " " + date.getFullYear();
        articles.innerHTML += `
                    <div class="article" id="${i}">
                    <div class="news-item">
                    <div class="left-border">
                        <div class="top-border">
                            <div class="top">
                                <img src="./Img.png" alt="">
                                <div class="fontinter">${respApi.results[i].byline}</div>
                                <div class="fontinter2">in</div>
                                <div class="fontinter">${respApi.results[i].des_facet[0]}</div> 
                                <div class="fontinter">·</div>
                                <div class="fontinter2">${date}</div>
                            </div>
                            <div class="text">
                                <div class="news-article">${respApi.results[i].title}</div>
                                <div class="news-body">${respApi.results[i].abstract}</div>
                            </div>
                        </div>
                        <div class="buttom">
                             <div class="brief-info">
                                <button class="button fontinter">${respApi.section.charAt(0).toUpperCase() + respApi.section.slice(1)}</button>
                                <p class="fontinter2">${Math.floor(Math.random() * (15 - 9 + 1) + 5)} min read</p> 
                                <p class="fontinter">·</p>
                                <p class="fontinter2">Selected for you</p>
                            </div>
                            <div class="share">
                                <img src="./Medium - Original.png" alt="Box.png">
                                <img src="./Github - Original.png" alt="Box.png">
                                <img src="./Telegram - Original.png" alt="Box.png">
                            </div>
                        </div>
                    </div>
                    <img class="picture" src="${respApi.results[i].multimedia[0].url}" alt="">`;

    }
    function runStories(){
            console.log(respApi.results.splice(0,3))
            for (let i = 0; i < respApi.results.splice(0,3).length; i++)
            document.getElementById(`${i}`).onclick = function() {
            window.location.href = `subPage.html?author=${respApi.results[i].byline}&date=${respApi.results[i].updated_date}&title=${respApi.results[i].title}&text=${respApi.results[i].abstract}&img=${respApi.results[i].multimedia[0].url}`;
    };
}
}

    getStories();
    

    