var counter = 0

var cntr_d = 0
var cntr_x = 0
var cntr_o = 0

var counterDraw = document.getElementById('draw')
var counterX = document.getElementById('winX')
var counterO = document.getElementById('winO')


var cells = document.querySelectorAll('#field td')
var header = document.getElementById('main-header')

function isEnder() {
    if (counter < 4) {
        return false
    }
    if (cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != '') {
        return true
    }
    if (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != '') {
        return true
    }
    if (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != '') {
        return true
    }
    if (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != '') {
        return true
    }
    if (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != '') {
        return true
    }
    if (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != '') {
        return true
    }
    if (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != '') {
        return true
    }
    if (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != '') {
        return true
    }
    if (counter > 7) {
        header.innerHTML = 'Draw!'
        cntr_d += 1
        counterDraw.innerHTML = cntr_d
        return false
    }
}

function cellClick() {
    var img = document.createElement('img')
    img.style.width = '80%'
    img.style.Align = 'middle'
    if (counter % 2 == 0) {
        img.src = 'x_icon.png'
    }
    else {
        img.src = 'o_icon.png'
    }
    this.appendChild(img)
    if (isEnder()) {
        for (var cell of cells) {
            cell.removeEventListener('click', cellClick)
        }
        if (counter % 2 == 0) {
            header.innerHTML = 'X is winner!'
            cntr_x += 1
            counterX.innerHTML = cntr_x
        }
        else {
            header.innerHTML = 'O is winner!'
            cntr_o += 1
            counterO.innerHTML = cntr_o
        }
    }
    counter += 1
    this.removeEventListener('click', cellClick)
}

function startGame() {
    counter = 0
    header.innerHTML = 'Tic Tac Toe'
    for (var cell of cells) {
        cell.innerHTML = ''
        cell.addEventListener('click', cellClick)
    }
}