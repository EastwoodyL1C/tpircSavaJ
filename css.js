body.style.cssText = 'margin: 0; background: black; background-image: url("./img/bg.jpg"); background-size: cover;'
wrapper.style.cssText = 'height: 100vh; padding: 0px 10px; margin: 0; display: flex; align-items:center; justify-content:center'

//main
main.style.cssText = 'width:91%; display:flex; align-items: center; justify-content: center; padding: 20px 0; flex-direction: column; background: rgba(192, 192, 192, 0.49);border-radius: 20px; box-shadow: 0px 3px 59px 16px rgba(77, 77, 77, 0.74);'
start.style.cssText = 'max-width: 8%; padding: 7px 60px; background-color: rgba(255, 255, 255, 0.86); border-radius: 10%; cursor: pointer; display: flex; align-items: center; justify-content: center;font-family: "Open Sans", sans-serif; font-size: 16px; letter-spacing: 2px;text-decoration: none;text-transform: uppercase;color: #000;border: 3px solid;box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;margin: 30px 0px'
imgPack.style.cssText = 'padding: 40px 0px 20px 0px; width: 95%; display: flex; justify-content: center; flex-direction: column'
imgRow1.style.cssText = 'height: 25vh; display: flex; flex-direction: row; justify-content: center; margin: 5px'
imgRow2.style.cssText = 'height: 25vh; display: flex; flex-direction: row; justify-content: center; margin: 5px'

//minigame-function
const imgStyleVisible = 'width: 18.5%; object-fit:cover; object-position: right; padding: 5px; border-radius: 10%; display: block; border: solid 5px transparent;'
const imgStyleNotVisible = 'width: 18.5%; object-fit:cover; object-position: right; padding: 5px; border-radius: 10%; filter: brightness(0); transition:0.4s all ease-in-out; border: solid 5px transparent;'
// const imgStyleSelected = 'width: 18.5%; object-fit:cover; object-position: right; padding: 5px; border-radius: 10%; filter: brightness(1); transition:0.4s all ease-in-out; border: solid 5px red; pointer-events: none'
const imgStylePassed = 'width: 18.5%; object-fit:cover; object-position: right; padding: 5px; border-radius: 10%; filter: brightness(1); transition:0.4s all ease-in-out; border: solid 5px green; pointer-events: none'
