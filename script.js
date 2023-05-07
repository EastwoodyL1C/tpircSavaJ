const wrapper = document.createElement('wrapper')

//header set
const header = document.createElement('header')
wrapper.prepend(header)

//main set
const main = document.createElement('main')
wrapper.prepend(main)
const start = document.createElement('button')
main.prepend(start)
start.innerHTML = 'Start'

//footer set
const footer = document.createElement('footer')
wrapper.prepend(footer)