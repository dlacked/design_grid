const sixRowGridCSS = document.getElementById('sixRowGrid');
var arr = [1, 2, 3, 4, 5]
var index = Math.floor(Math.random())
var random = arr[index]

console.log(random)

window.onload = function(){
		setInterval(function(){
            sixRowGridCSS.style.gridTemplateRows = `${Math.floor(Math.random()*10)}fr ${Math.floor(Math.random()*10)}fr ${Math.floor(Math.random()*10)}fr ${Math.floor(Math.random()*10)}fr ${Math.floor(Math.random()*10)}fr ${Math.floor(Math.random()*10)}fr`
        }, 3000)
}