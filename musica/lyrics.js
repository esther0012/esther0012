function findLyrics(artist, song){
    return fetch('https://api.lyrics.ovh/v1/u2/one');
}
const form = document.querySelector("#lyrics_form");
form.addEventListener('submit', el => {
    el.preventDefault();
    doSubmit();
})

async function doSubmit() {
    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    lyrics_el.innerHTML ='<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>';

    try{
    const lyricsResponse = await findLyrics(artist.value, song.value);
    const data = await lyricsResponse.json();
    if(data.lyrics)
        lyrics_el.innerHTML = data.lyrics;
        else
        lyrics_el.innerHTML = data.error;
    }catch(err){
        console.log(err);
    }
}