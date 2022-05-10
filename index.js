function backgroundImage (url,left, bottom, width, height) {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            newImage(url, left+w, bottom+h)
        }
    }
 }
 
function newImage(url,left, bottom) {
    let item = document.createElement('img')
    item.src = url
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom+ 'px'
    document.body.append(item)
    return item
}

function newItem(url,left, bottom) {
    let item = newImage(url, left, bottom)

    item.addEventListener('dblclick', () => {
        item.remove()
})
}


let heightGrass = window.innerHeight/1.5
let heightSky = window.innerHeight - heightGrass

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

