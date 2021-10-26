const gallery = document.getElementById('gallery');

async function getCharacters() {
    const characters = await fetch('https://rickandmortyapi.com/api/character')
    const charactersData = await characters.json()
    //console.log(CharacterData)
    return charactersData
}

const charactersInfo = async () => {
    let res = await fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => {
        data.results.map(character => {
            gallery.innerHTML += `
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
        })
        console.log("Success!! yei!!")
        console.log(data.results)
        return data.results
    })
    .catch(e => {
        console.log(e)
    })  
}
charactersInfo();