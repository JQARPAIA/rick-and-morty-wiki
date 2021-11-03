const gallery = document.getElementById('gallery');
let page = 1;

const charactersInfo = async (page = 1) => {
    //num = num > 34 ? 0 : num; 
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    let res = await fetch(url)
    .then(res => res.json())
    .then(data => {
        data.results.map(character => {
            gallery.innerHTML += /*html*/`
            <div class="card">
                <div class="character__img">
                    <img src="${character.image}" alt="${character.name}" title=${character.name}>
                </div>
                <div class="character__name">
                    Nombre: <b>${character.name}</b>
                </div>
                <div class="character__status">
                    Status: <b>${character.status}</b>
                </div>
                <div class="character__origin">
                    Lugar de origen: <b>${character.origin.name}</b>
                </div>
                <div class="character__location">
                    Ubicación actual: <b>${character.location.name}</b>
                </div>
            </div>`; 
            console.log("Success!! yei!!")
            console.log(data.info.next)
        })
        return data.results
    })
    .catch(e => {
        console.log(e)
    })  
}

charactersInfo();

const nextPage = () => {
    page++
    console.log(page)
    page = page > 34 ? 34 : page; 
    gallery.innerHTML = ""
    charactersInfo(page)
}

const previousPage = () => {
    page--
    console.log(page)
    gallery.innerHTML = ""
    charactersInfo(page);
}