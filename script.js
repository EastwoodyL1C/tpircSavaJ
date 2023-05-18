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

const state = {
    value: null,
    elementVal: null
}
const done = []

const gameOver = () => {
    console.log('gameOver')
}

const check = (element) => {
    if(state.value) {
        const choose2 = element.getAttribute('image')
        if (state.value === choose2) {
            element.style.cssText = imgStylePassed
            done.push(choose2)
            if (done.length === arr.length) {
                gameOver()
            }
        }else {
            element.style.cssText = imgStyleNotVisible
            state.elementVal.style.cssText = imgStyleNotVisible
        }
        state.value= null
        state.elementVal = null
    }else {
        const checkCurrent = element.getAttribute('image')
        state.elementVal = element
        state.value = checkCurrent
        element.style.cssText = imgStylePassed
    }

}

//flip function
start.onclick = function () {
    arrBack.forEach(el => el.style = imgStyleVisible)
    arrFront.forEach(el => el.style = imgStyleVisible)
    setTimeout(function() {
        arrBack.forEach(el => el.style = imgStyleNotVisible)
        arrFront.forEach(el => el.style = imgStyleNotVisible)
        //choose and check
        //[check-front] =>
        const checkFront = document.querySelectorAll('.main__minigame-row1')
        checkFront.forEach( elFront => elFront.addEventListener('click', check.bind(this, elFront)))
        //[check-back] =>
        const checkBack = document.querySelectorAll('.main__minigame-row2')
        checkBack.forEach( elBack => elBack.addEventListener('click', check.bind(this, elBack)))
    },2000)
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

main.prepend(start)
wrapper.prepend(header)