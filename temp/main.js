var size = 10
var gridSize = 600
var nodeSize = 0//gridSize/size
var mode = 0

var attribs = new Array(size*size)
var bases = new Array()
var respawns = new Array()

function setWalkData() {
	var obj = document.getElementsByName("walkdata")
	var text = ""
	for (var i = 0; i < size*size; i++)
		text += attribs[i].walk
	obj[0].setAttribute("value", text)
}

function setBuildData() {
	var obj = document.getElementsByName("builddata")
	var text = ""
	for (var i = 0; i < size*size; i++)
		text += attribs[i].buildable
	obj[0].setAttribute("value", text)
}
	
function getClickXY(event) {
	var clickY = (event.layerX == undefined ? event.offsetX : event.layerX) + 1 //Please don't worry. We'll fix it later. Maybe...
	var clickX = (event.layerY == undefined ? event.offsetY : event.layerY) + 1
	var mapX = clickX/nodeSize, mapY = clickY/nodeSize
	var index = Math.floor(mapX)*size + Math.floor(mapY)
	switch(mode) {
		case 0:
			attribs[index].walk = attribs[index].walk == -1 ? 1 : --attribs[index].walk
			setWalkData()
			break
		case 1:
			attribs[index].buildable = (attribs[index].buildable + 1)&1
			setBuildData()
			break
		case 2:
			var pos = -1
			if ((pos = bases.indexOf(index)) == -1) {//no such element
				bases.push(index)
				var div = document.createElement('div')
				div.setAttribute("id", "base" + index)
				div.innerHTML = 'base' + index + ': '
				var list = document.createElement('select')
				list.setAttribute("name", "b" + index)
				list.setAttribute("id", "b" + index)
				list.options[list.options.length] = new Option("none", -1)
				
				var selectedResps = new Array()
				for (var i in bases) {
					var obj = document.getElementById("b" + bases[i])
					if (obj != null) {
						var selectedIndex = obj.selectedIndex
						if (selectedIndex != -1 && obj.options[selectedIndex].value != -1)
							selectedResps.push(parseInt(obj.options[selectedIndex].value))
					}
				}
				for (var i in respawns) {
					if (selectedResps.indexOf(respawns[i]) == -1)
						list.options[list.options.length] = new Option("x: " + Math.floor(respawns[i]/size) + " y: " + respawns[i]%size, respawns[i])
				}
				div.appendChild(list)
				document.getElementById('basesDiv').appendChild(div)
			} else {
				bases.splice(pos, 1)
				var elem = document.getElementById('base' + index);
				elem.parentNode.removeChild(elem);
			}
			break
		case 3:
			var pos = -1
			if ((pos = respawns.indexOf(index)) == -1) { //no such element
				respawns.push(index)
				for (var i in bases) {
					var obj = document.getElementById("b" + bases[i])
					obj.options[obj.options.length] = new Option("x: " + Math.floor(mapX) + " y: " + Math.floor(mapY), index)
				}
			} else {
				respawns.splice(pos, 1)	
				for (var i in bases) {
					var obj = document.getElementById("b" + bases[i])
					for (var j in obj.options)
						if(obj.options[j].value == index) {
							obj.options.remove(j)
							break
						}
				}
			}
			break
	}
	drawNode(index)
}

window.onresize = setHeight

function setHeight(event) {
	var obj = document.getElementById("mainTable")
	obj.setAttribute("height", window.innerWidth*0.75)
	obj = document.getElementById("map")
	gridSize = window.innerWidth*0.75/1.41*0.99
	nodeSize = (gridSize-2)/size
	obj.setAttribute("width", gridSize)
	obj.setAttribute("height", gridSize)
	obj.width  = gridSize
    obj.height = gridSize
	drawMap()
}

function drawMap() {
	for (var i = 0; i <= size*size; i++)
		drawNode(i)
}

function init() {
	var map = document.getElementById('map')
	map.addEventListener('click', getClickXY, false)
	for (var i = 0; i <= size; i++) {
		for (var j = 0; j < size; j++) {
			attribs[i*size + j] = {
				walk: 1, //1 - walk, 0 - see, -1 - nothing
				buildable: 0
			}
		}
	}
	
	var mapCanvas = document.getElementById("map"),
	ctx = mapCanvas.getContext('2d')
	setHeight(0)
	setWalkData()
	setBuildData()
}

function drawNode(index) {
	var y = Math.floor(index/size), x = index%size //awful
	var mapCanvas = document.getElementById("map"),
	ctx = mapCanvas.getContext('2d')
	if (attribs[index].walk == -1)
		ctx.fillStyle = "red"
	if (attribs[index].walk == 1)
		ctx.fillStyle = "#ffffff"	
	if (attribs[index].walk == 0)
		ctx.fillStyle = "blue"		
	ctx.fillRect(x*nodeSize+1, y*nodeSize+1, nodeSize, nodeSize)
	if (attribs[index].buildable == 1) {
		ctx.fillStyle = "#00ff00"	
		ctx.fillRect(x*nodeSize + nodeSize/4+1, y*nodeSize + nodeSize/4+1, nodeSize/2, nodeSize/2)
	}
	if (bases.indexOf(index) != -1) {
		ctx.fillStyle = "brown"
		ctx.beginPath()
		ctx.arc(x*nodeSize + nodeSize/2+1, y*nodeSize + nodeSize/2+1, nodeSize/5, 0, Math.PI*2, true)
		ctx.fill()
	}
	if (respawns.indexOf(index) != -1) {
		ctx.strokeStyle = "cyan"
		ctx.beginPath()
		ctx.arc(x*nodeSize + nodeSize/2+1, y*nodeSize + nodeSize/2+1, nodeSize*0.375, 0, Math.PI*2, true)
		ctx.stroke()
		ctx.beginPath()
		ctx.arc(x*nodeSize + nodeSize/2+1, y*nodeSize + nodeSize/2+1, nodeSize/4, 0, Math.PI*2, true)
		ctx.stroke()
	}
	ctx.strokeStyle = "#000000"
	ctx.strokeRect(x*nodeSize+1, y*nodeSize+1, nodeSize, nodeSize)
}

function changeMapSize(obj) {
	var temp = parseInt(obj.value)
	if (temp != NaN && temp > 0 && temp < 100)
		size = temp
	else
		alert("Enter correct number!")
	init()
}
