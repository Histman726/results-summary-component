const summaryElement = document.querySelector('.summary')

const cargarResumen = async () => {
  const result = await fetch('./data.json')
  const data = await result.json()
  
  data.forEach(element=>{
    summaryElement.innerHTML+=`
      <div class="${element.color}">
        <img src="${element.icon}" alt="">
        <span class="category">${element.category}</span>
        <span class="cantidad"><strong>${element.score}</strong> / 100</span>
      </div>
    `
  })
  summaryElement.innerHTML+=`<button class="btn">Continue</button>`
  console.log(data)
}

cargarResumen()