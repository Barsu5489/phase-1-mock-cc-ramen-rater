
const ramenMenu = document.getElementById('ramen-menu')
const reamenDetail = document.getElementById('ramen-detail') 
const rating = document.getElementById('rating-display')
const comment = document.getElementById('comment-display')

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
        rating.textContent = img[i].rating
        comment.textContent = img[i].comment
        console.log(img[i].name)
    })

}  
}

function formdata(){
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const ratinng = document.getElementById('rating-display')
        const commentt = document.getElementById('comment-display')
        let name = e.target.name.value
        let restaurant = e.target.restaurant.value
        let img = e.target.image.value
        let rating = e.target.rating.value
        let comment = e.target.newComment.value
        const imag = document.createElement('img')
        imag.src = img
        imag.classList.add('detail-image')
        ramenMenu.appendChild(imag)
       
        imag.addEventListener('click',()=>{

            reamenDetail.innerHTML = `<img class="detail-image" src="${img}" alt="Insert Name Here" />
            <h2 class="name">${name}</h2>
            <h3 class="restaurant">${restaurant}</h3>`
            // rating.textContent = ''
            // comment.textContent = ''
            ratinng.textContent = rating
            commentt.textContent = comment
        })
        console.log(imag)
        console.log(name, restaurant,img,rating,comment)
        
    })
}
formdata()
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