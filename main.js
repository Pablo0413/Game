const characterBtn = document.getElementById('character-btn-kick')
const enemyBtn = document.getElementById('enemy-btn-kick')

const Zeus = {
    name: 'Zeus',
    defHp: 100,
    damageHp: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
}
const Phoenix = {
    name: 'Phoenix',
    defHp: 100,
    damageHp: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')

}
characterBtn.addEventListener('click', () => {
    changeHp(random(10), Phoenix)
})
enemyBtn.addEventListener('click', () => {
    changeHp(random(10), Zeus)
})
const init = () => {
    randerHp(Zeus)
    randerHp(Phoenix)
    random(15)
}
const renderHp = person => {
    renderHpLite(person)
    renderProgressbarHP(person)
}
const renderHpLite = person => {
    person.elHP.innerText = person.damageHp + '/'+ person.defHp
}
const renderProgressbarHP = person => {
    person.elProgressbar.style.width = person.damageHp+'%'
}
const changeHp = (count, person) => {
    if (person.damageHp < count) {
        person.damageHp = 0
        alert(person.name + ' lost')
        div1.style.display ="block" ;
        enemyBtn.setAttribute("disabled", true);
        characterBtn.setAttribute("disabled", true);

    }else {
        person.damageHp -= count
    }
    renderHp(person)
}
const random = num => {
    return Math.ceil(Math.random() * num)
}


const reloadtButton = document.querySelector("#reload");
function reload() {
    reload = location.reload();
}