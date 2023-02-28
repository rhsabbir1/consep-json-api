const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showPostData(data))
}
const showPostData = (data) =>{
    const sohwPostContainer = document.getElementById('show-post')
    data.forEach(post => {
        const creatDiv = document.createElement('div')
        creatDiv.classList.add('post')
        creatDiv.innerHTML =`
        <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        sohwPostContainer.appendChild(creatDiv)
    });

}
 
loadData()