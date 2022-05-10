// Make the DIV element draggable:
dragElement(document.getElementById('news'))

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
  if (document.getElementById('news')) {
    // if present, the header is where you move the DIV from:
    document.getElementById('news').onmousedown = dragMouseDown
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown
  }

  function dragMouseDown(e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
  }
}

dragWaterElement(document.getWaterElementById('water'))

function dragWaterElement(elmnt) {
  var waterpos1 = 0,
    waterpos2 = 0,
    waterpos3 = 0,
    waterpos4 = 0
  if (document.getWaterElementById('water')) {
    // if present, the header is where you move the DIV from:
    document.getWaterElementById('water').onmousedown = dragWaterMouseDown
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragWaterMouseDown
  }

  function dragWaterMouseDown(e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    waterpos3 = e.clientX
    waterpos4 = e.clientY
    document.onmouseup = closeWaterDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementWaterDrag
  }

  function elementWaterDrag(e) {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    waterpos1 = waterpos3 - e.clientX
    waterpos2 = waterpos4 - e.clientY
    waterpos3 = e.clientX
    waterpos4 = e.clientY
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - waterpos2 + 'px'
    elmnt.style.left = elmnt.offsetLeft - waterpos1 + 'px'
  }

  function closeWaterDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
    $('#water').css('top', '0').css('left', '60px')
  }
}

$('#news').click(function () {
  $('#news').attr('src', 'images/crumple.png')
})
