const cats = [
    {
        name: 'Pumpkin',
        thumbnail: 'imgs/Pumpkin.jpeg'
    },
     {
        name: 'Snuggles',
        thumbnail: 'imgs/Snuggles.png'
        // credit: 'https://unsplash.com/photos/OzAeZPNsLXk'
    },
     {
        name: 'Cruella',
        thumbnail: 'imgs/Cruella.png',
        // credit: 'https://unsplash.com/photos/w2DsS-ZAP4U'
    }
]






function renderCats(data) {
    const {name, thumbnail,} = data
    document.getElementById("cats").innerHTML =
        `
            <h4 class="cat-basket"> ${name} </h4>
            <img class="pic" src="${thumbnail}" />
        `
}

renderCats(cats)

