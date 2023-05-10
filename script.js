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

//restart button
const restart = document.createElement('button')
restart.innerHTML = 'Restart'

//flip function
start.onclick = function () {
    document.querySelector(".main__minigame-row1").style = 'width: 200px; height:270px;object-fit:cover; object-position: right; padding: 5px; border-radius: 10%; display: block'
    document.querySelector(".main__minigame-row2").style.display = 'block'
    setTimeout(function() {
        document.querySelector(".main__minigame-row1").style = 'width: 200px; height:270px;object-fit:cover; object-position: right; padding: 5px; border-radius: 10%; filter: brightness(0)'
        document.querySelector(".main__minigame-row2").style = 'width: 200px; height:270px;object-fit:cover; object-position: right; padding: 5px; border-radius: 10%; filter: brightness(0)'
    },7500)
}

body.prepend(wrapper)
wrapper.prepend(footer)
wrapper.prepend(main)
main.prepend(restart)

//minigame img
const imgPack = document.createElement('div')
imgPack.className = 'main__img-pack'
main.prepend(imgPack)
const row1 = [...arrBack]
row1.sort(()=>Math.random() - 0.5)
for (i=0; i<row1.length;i++){
    imgPack.prepend(row1[i])
}
const row2 = [...arrFront]
row2.sort(()=>Math.random() - 0.5)
for (i=0; i<row2.length;i++){
    imgPack.prepend(row2[i])
}

main.prepend(start)
wrapper.prepend(header)