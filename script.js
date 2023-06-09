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

const description = document.createElement('p')
description.innerHTML = 'The game starts with all the cards face down and players take turns to turn over two cards. If the two cards have the same picture, then they keep the cards, otherwise they turn the cards face down again.'

//default image state
const state = {
    value: null,
    newValue: null
}

//restart-reload
const restart = function () {
    window.location.reload()
}

//game-over check
const done = []
const gameOver = () => {
    alert('\n🎉 Congratulations 🎉\n\n\nThank you for playing\n')
    arrBack.forEach(el => el.style = imgStyleNotVisible)
    arrFront.forEach(el => el.style = imgStyleNotVisible)
    restart ()
}

//image check
const check = (element) => {
    if(state.value) {
        const choosenImg = element.getAttribute('image')
        //selected check - Passed
        if (state.value === choosenImg) {
            element.style.cssText = imgStylePassed
            done.push(choosenImg)
            //all pictures are opened
            if (done.length === arr.length) {
                gameOver()
            }
        //selected check - Failed
        }else {
            element.style.cssText = imgStyleNotVisible
            state.newValue.style.cssText = imgStyleNotVisible
        }
        state.value= null
        state.newValue = null
    //pick second picture
    }else {
        const checkCurrent = element.getAttribute('image')
        state.newValue = element
        state.value = checkCurrent
        element.style.cssText = imgStylePassed
    }
}


//flip function
start.onclick = function () {
    arrBack.forEach(el => el.style = imgStyleVisible)
    imgRow1.style.cssText = imgRowVisible
    imgRow2.style.cssText = imgRowVisible
    arrFront.forEach(el => el.style = imgStyleVisible)
    description.style.cssText = 'display: none'
    setTimeout(function() {
        arrBack.forEach(el => el.style = imgStyleNotVisible)
        arrFront.forEach(el => el.style = imgStyleNotVisible)
        //choosing
        //[check-front] =>
        const checkFront = document.querySelectorAll('.main__minigame-row1')
        checkFront.forEach( elFront => elFront.addEventListener('click', check.bind(this, elFront)))
        //[check-back] =>
        const checkBack = document.querySelectorAll('.main__minigame-row2')
        checkBack.forEach( elBack => elBack.addEventListener('click', check.bind(this, elBack)))
    },2000)
    //reset minigame
    start.onclick = restart
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

main.prepend(description)
main.prepend(start)
wrapper.prepend(header)