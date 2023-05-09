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
// imgPack.prepend(img6)

const row1 = [...arrNew]
row1.sort(()=>Math.random() - 0.5)
for (i=0; i<row1.length;i++){
    imgPack.prepend(row1[i])
}

main.prepend(start)


////////////////////footer set
const footer = document.createElement('footer')
wrapper.prepend(footer)