const loadMemeData = () => {
    fetch('https://meme-api.com/gimme/20')
        .then(res => res.json())
        .then(data => showMems(data.memes))
}
const showMems = (data)=>{
    const container = document.getElementById('images')
    data.forEach(image => {
       const creat = document.createElement('div')
       creat.classList.add('memes')
       creat.innerHTML =`
       
       
       `
    });
}
loadMemeData()