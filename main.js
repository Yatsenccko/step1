function selectTab(tabObj) {
    const activeTabs = document.querySelector('.tabs-title.active')
    activeTabs.classList.remove('active')

    tabObj.classList.add("active")

    document.querySelector('.show').classList.remove('show')
    const showName = tabObj.dataset.tab
    const showContent = document.getElementById(showName).classList.add('show')
}







const bigFace = document.querySelector('.big-face')
const allImgs = document.querySelectorAll('.circle-people')
const allText = document.querySelectorAll(".integer-text")
const namesText = document.querySelectorAll(".names")
let currentItem = 1;


function setCurrentImg(current) {
    namesText.forEach(element => {
        element.classList.remove('names-active')
    })
    namesText[current].classList.add('names-active')
    allImgs.forEach(element => {
        element.classList.remove('jump')
    });
    allImgs[current].classList.add('jump')
    let i = current + 1
    bigFace.src = 'img/Swipe' + i + '.png'

}
function setCurrentText(current) {
    allText.forEach(element => {
        element.classList.remove('integer-text-active')
    })
    allText[current].classList.add('integer-text-active')
}

function setBtnsClick() {
    const leftBtn = document.querySelector('.scroll-button-left')
    const rightBtn = document.querySelector('.scroll-button-right')

    leftBtn.addEventListener('click', () => {
        currentItem--
        if (currentItem < 0) {
            currentItem = 0
        }
        setCurrentImg(currentItem)
        setCurrentText(currentItem)

    })
    rightBtn.addEventListener('click', () => {
        currentItem++
        if (currentItem >= allImgs.length) {
            currentItem = allImgs.length - 1
        }
        setCurrentImg(currentItem)
        setCurrentText(currentItem)
    })

}
function setImgsClick() {
    for (let i = 0; i < allImgs.length; i++) {
        allImgs[i].addEventListener('click', () => {
            currentItem = i
            setCurrentImg(currentItem)
            setCurrentText(currentItem)
        })
    }
}
setImgsClick()
setBtnsClick()










function serverResponse(quantity, start) {
    const resp = [];
    for (let i = start; i < quantity + start; i++) {

        let category;
        switch (i % 4) {
            case 0:
                category = "graphic"
                break;
            case 1:
                category = "web"
                break;
            case 2:
                category = "landing"
                break;
            case 3:
                category = "wordpress"
                break;
        }
        const path = "img/amazing-img/Layer " + i + ".png"
        const img = { path, category }
        resp.push(img)
    }
    return resp;
}



const btnLoad = document.querySelector('.btn-load-more')
const parentLoad = document.querySelector('.container-our-amazing-work')
let totalDivImg = 11;
const shift = 24;
const quantityLoad = 12;
const stopQuantityLoad = 35;
btnLoad.addEventListener('click', () => {
    const sResp = serverResponse(quantityLoad, totalDivImg + shift)
    totalDivImg += sResp.length
    if (totalDivImg >= stopQuantityLoad) {
        btnLoad.classList.add('stop-loading')
    }
    sResp.forEach(element => {
        createDivImg(element)
    })
})
function createDivImg(obj) {
    const div = document.createElement('div')
    const img = document.createElement('img')
    div.appendChild(img)
    img.src = obj.path
    div.classList.add(obj.category)
    console.log(div);
    parentLoad.appendChild(div)
}


function showCategory(category) {
    document.querySelectorAll(category).forEach(element => {
        console.log(element);
        element.classList.remove('hidden-div')
    })
}
function hiddenAllDiv() {
    document.querySelectorAll(".container-our-amazing-work > div").forEach(element => {
        element.classList.add('hidden-div')
    })
    document.querySelector('.container-our-amazing-work > div.create-photo').classList.remove('hidden-div')
}





document.querySelector('.li-gd').addEventListener('click', () => {
    hiddenAllDiv()
    showCategory('.graphic')
    btnLoad.classList.add('stop-loading')
})
document.querySelector('.li-wd').addEventListener('click', () => {
    hiddenAllDiv()
    showCategory('.web')
    btnLoad.classList.add('stop-loading')
})
document.querySelector('.li-lp').addEventListener('click', () => {
    hiddenAllDiv()
    showCategory('.landing')
    btnLoad.classList.add('stop-loading')
})
document.querySelector('.li-wp').addEventListener('click', () => {
    hiddenAllDiv()
    showCategory('.wordpress')
    btnLoad.classList.add('stop-loading')
})
document.querySelector('.li-all').addEventListener('click', () => {
    showCategory('.graphic')
    showCategory('.web')
    showCategory('.landing')
    showCategory('.wordpress')
    btnLoad.classList.remove('stop-loading')
    if (totalDivImg >= stopQuantityLoad) {
        btnLoad.classList.add('stop-loading')
    }
})

function setTab() {
    const liAm = document.querySelectorAll('.li-am')
    liAm.forEach(element => {
        element.addEventListener('click', () => {
            liAm.forEach(element => {
                element.classList.remove('active-tab')
            })
            element.classList.add('active-tab')
        })
    })
}
setTab()





document.addEventListener('keyup', () => {
    if (event.code == "ArrowLeft") {
        currentItem--
        if (currentItem < 0) {
            currentItem = 0
        }
        setCurrentImg(currentItem)
        setCurrentText(currentItem)
    }
    if (event.code == "ArrowRight") {
        currentItem++
        if (currentItem >= allImgs.length) {
            currentItem = allImgs.length - 1
        }
        setCurrentImg(currentItem)
        setCurrentText(currentItem)
    }
})
