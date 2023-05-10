const arr = ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.jpg']
const arrBack = arr.map(src=>{
    const img = document.createElement('img')
    img.className = "main__minigame-row2"
    img.src = src
    img.style.cssText = 'width: 200px; height:270px;object-fit:cover; object-position: right; padding: 5px; border-radius: 10%; display: none'
    return img
})
const arrFront = arr.map(src=>{
    const img = document.createElement('img')
    img.className = "main__minigame-row1"
    img.src = src
    img.style.cssText = 'width: 200px; height:270px;object-fit:cover; object-position: right; padding: 5px; border-radius: 10%; display: none'
    return img
})