console.log(year);
function dayComponent(year, month, day){
    return `<div class="card">
                <time datetime="YYYY">${year}</time>
                <time datetime="MM">${month}</time>
                <time datetime="DD">${day}</time>
            </div>`
}

function init(){
    const root = document.querySelector('#root')
    const firstDay =dayComponent()

    root.insertAdjacentHTML("beforeend",firstDay)

}
init()