const rowGrid1CSS = document.getElementById('rowGrid1');
const rowGrid2CSS = document.getElementById('rowGrid2')
const rowGrid3CSS = document.getElementById('rowGrid3')
const mainGridCSS = document.getElementById('mainGrid')

const randomNumText = Math.ceil(Math.random()*100) + '_'
let i = 0;
const text = document.querySelector("#randomNum")

window.onload = function(){	
    setInterval(function(){
        rowGrid1CSS.style.gridTemplateRows = `${Math.ceil(Math.random()*10)}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.ceil(Math.random()*10)}fr `
        rowGrid2CSS.style.gridTemplateRows = `${Math.ceil(Math.random()*10)}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.ceil(Math.random()*10)}fr `
        rowGrid3CSS.style.gridTemplateRows = `${Math.ceil(Math.random()*10)}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.random()*10}fr ${Math.ceil(Math.random()*10)}fr `
    }, 2000)

    setInterval(function(){
        if (i < randomNumText.length){
            let txt = randomNumText.charAt(i)
            text.innerHTML += txt;
            console.log(randomNumText)
            i++
        }
    }, 200)
}
