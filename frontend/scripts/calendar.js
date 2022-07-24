console.log(year);
function dayComponent(year, month, day){
    return `<div class="card">
                <time datetime="YYYY">${year}</time>
                <time datetime="MM">${month}</time>
                <time datetime="DD">${day}</time>
            </div>`
}

function monthComponent (month){
  let monthHtml ='';
  
    for(let day = 1; day<= month.days; day++){
    monthHtml += dayComponent(2022,month.name,day)
  }
  return monthHtml
}


function init(){
    const root = document.querySelector('#root')
    
    const month = monthComponent(year[1])


    root.insertAdjacentHTML("beforeend",month)

}
init()