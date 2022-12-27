
const ramenMenu = document.getElementById('ramen-menu')
const reamenDetail = document.getElementById('ramen-detail') 

function renderImg(img){
for(let i = 0; i<img.length; i++){
    const imgContent = document.createElement('img')
    imgContent.src = img[i].image 
    console.log('hh')
    imgContent.classList.add('detail-image')
    ramenMenu.appendChild(imgContent)
    imgContent.addEventListener('click',()=>{
        reamenDetail.innerHTML = `   <img class="detail-image" src="${img[i].image}" alt="Insert Name Here" />
        <h2 class="name">${img[i].name}</h2>
        <h3 class="restaurant">${img[i].restaurant}</h3>`

        console.log(img[i].name)
    })

}
   
}
function fetchContent(){
    fetch('http://localhost:3000/ramens')
    .then(res=>res.json())
    .then(data=>{
        renderImg(data)
    })
}

document.addEventListener('DOMContentLoaded',()=>{
fetchContent()
})