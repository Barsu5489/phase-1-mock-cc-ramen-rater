
const ramenMenu = document.getElementById('ramen-menu')

function renderImg(img){
for(let i = 0; i<img.length; i++){
    const imgContent = document.createElement('img')
    imgContent.src = img[i].image 
    console.log('hh')
    imgContent.classList.add('detail-image')
    ramenMenu.appendChild(imgContent)
}
   
}
function fetchContent(){
    fetch('http://localhost:3000/ramens')
    .then(res=>res.json())
    .then(data=>{
        console.log(data[0].image)
        renderImg(data)
    })
}

document.addEventListener('DOMContentLoaded',()=>{
fetchContent()
})