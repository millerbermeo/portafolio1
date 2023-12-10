let calificacion1 = document.getElementById("calificacion1")
let calificacion2 = document.getElementById("calificacion2")
let calificacion3 = document.getElementById("calificacion3")
let calificacion4 = document.getElementById("calificacion4")
let calificacion5 = document.getElementById("calificacion5")

let btnGraficar = document.getElementById("btnGraficar")

btnGraficar.addEventListener("click", () => {
    let sumuCalificacion = (Number(calificacion1.value) + Number(calificacion2.value) + Number(calificacion3.value) + Number(calificacion4.value) + Number(calificacion5.value))


    let porcentaje1 = parseInt((Number(calificacion1.value) * 100 / sumuCalificacion))
    console.log(porcentaje1)

    let porcentaje2 = parseInt((Number(calificacion2.value) * 100 / sumuCalificacion))
    console.log(porcentaje2)

    let porcentaje3 = parseInt((Number(calificacion3.value) * 100 / sumuCalificacion))
    console.log(porcentaje3)

    let porcentaje4 = parseInt((Number(calificacion4.value) * 100 / sumuCalificacion))
    console.log(porcentaje4)

    let porcentaje5 = parseInt((Number(calificacion5.value) * 100 / sumuCalificacion))
    console.log(porcentaje5)

    const generateRatingElement = (index, porcentaje, color) => `
    <div class="cuadro">
      <div>${index} <i class="fa-solid fa-star"></i> ${porcentaje} %</div>
    </div>
    
    <div style="width: 200px; height: 50px; display: flex; justify-content: flex-start; margin-bottom: 20px">
      <div style="width: ${porcentaje}%; background-color: ${color}; height: 50px;"></div>
    </div>
  `;
  
  document.getElementById("resultado").innerHTML = `
    ${generateRatingElement(1, porcentaje1, 'brown')}
    ${generateRatingElement(2, porcentaje2, 'green')}
    ${generateRatingElement(3, porcentaje3, 'blue')}
    ${generateRatingElement(4, porcentaje4, 'purple')}
    ${generateRatingElement(5, porcentaje5, 'orange')}
  `;
  
})
