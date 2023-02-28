const loadMemeData = () => {
    fetch('https://meme-api.com/gimme/20')
        .then(res => res.json())
        .then(data => showMems(data.memes))
}
const showMems = (data)=>{

}
loadMemeData()