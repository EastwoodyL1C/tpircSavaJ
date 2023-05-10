const body = document.querySelector('body')
const wrapper = document.createElement('wrapper')
body.prepend(wrapper)

////////////////////header set
const header = document.createElement('header')
wrapper.prepend(header)


////////////////////main set
const main = document.createElement('main')
wrapper.prepend(main)

//start button
const start = document.createElement('button')
start.innerHTML = 'Start'
start.onclick = function () {
    document.querySelector(".main__minigame-row1").style.display = 'block'
    document.querySelector(".main__minigame-row2").style.display = 'block'
}

//minigame img
const imgPack = document.createElement('div')
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

main.prepend(start)  //'Start button'


////////////////////footer set
const footer = document.createElement('footer')
wrapper.prepend(footer)