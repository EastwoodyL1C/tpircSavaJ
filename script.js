const body = document.querySelector('body')
const wrapper = document.createElement('wrapper')

////////////////////header set
const header = document.createElement('header')

////////////////////main set
const main = document.createElement('main')

////////////////////footer set
const footer = document.createElement('footer')

//start button
const start = document.createElement('button')
start.innerHTML = 'Start'

//flip function
start.onclick = function () {
    arrBack.forEach(el => el.style = imgStyleVisible)
    arrFront.forEach(el => el.style = imgStyleVisible)
    setTimeout(function() {
        arrBack.forEach(el => el.style = imgStyleNotVisible)
        arrFront.forEach(el => el.style = imgStyleNotVisible)
    },5000)

    //reset minigame
    start.onclick = function () {
        window.location.reload()
    }
}

body.prepend(wrapper)
wrapper.prepend(footer)
wrapper.prepend(main)

//minigame img
const imgPack = document.createElement('div')
imgPack.className = 'main__img-pack'
const imgRow2 = document.createElement('div')
imgRow2.className = 'img-pack__row1'
const imgRow1 = document.createElement('div')
imgRow1.className = 'img-pack__row2'

main.prepend(imgPack)
imgPack.prepend(imgRow1)
imgPack.prepend(imgRow2)

//shuffle
const row1 = [...arrBack]
row1.sort(()=>Math.random() - 0.5)
for (i=0; i<row1.length;i++){
    imgRow1.prepend(row1[i])
}
const row2 = [...arrFront]
row2.sort(()=>Math.random() - 0.5)
for (i=0; i<row2.length;i++){
    imgRow2.prepend(row2[i])
}

//choose and check
//[
// const check1 = addEventListener('click', (event1) => {
//     const checkFront = document.querySelector('.main__minigame-row1')
//     const checkFrontAtt = checkFront.getAttribute('image')
// })
const check2 = addEventListener('click', (event2) => {
    const checkBack = document.querySelector('.main__minigame-row2')
    const checkBackAtt = checkBack.getAttribute('image')
    return console.log(checkBackAtt)
})
//]

main.prepend(start)
wrapper.prepend(header)