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

//minigame img
const imgPack = document.createElement('div')
main.prepend(imgPack)
imgPack.prepend(img3)
imgPack.prepend(img2)
imgPack.prepend(img1)
main.prepend(start)

////////////////////footer set
const footer = document.createElement('footer')
wrapper.prepend(footer)