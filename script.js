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



const catBasket = document.getElementById("cat-basket")

cats.forEach(cat => {
    const card = document.createElement('div')
    card.classList.add('card')
    catBasket.appendChild(card)

    const pic = document.createElement('img')
    pic.classList.add('pic')
    pic.src = cat.thumbnail
    card.appendChild(pic)

    const catName = document.createElement('h2')
    catName.classList.add('cat-name')
    catName.innerHTML = cat.name
    card.appendChild(catName)
})


function myFunction() {
    const element = document.body
    element.classList.toggle('dark')
    }



