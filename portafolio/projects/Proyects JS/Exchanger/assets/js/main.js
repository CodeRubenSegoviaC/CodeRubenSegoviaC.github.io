let clp = document.querySelector("#valorCLP");
let select = document.querySelector("#coins");
let calcular = document.querySelector("#calcular");
let valorActual =document.querySelector(".valorActual");

clp.value = 0;

async function obtenerValorSimple() {
    try{
        let consulta = await fetch("https://mindicador.cl/api/");
        let respuesta = await consulta.json();

    let listaValores = [
        { nombre: "Dolar", valor: respuesta.dolar.valor },
        { nombre: "Euro", valor: respuesta.euro.valor },
        { nombre: "UF", valor: respuesta.uf.valor },
        { nombre: "UTM", valor: respuesta.utm.valor }
    ];
    listaValores.forEach(item => {
        let option = document.createElement("option");
        option.value = `${item.valor}`;
        option.textContent = `${item.nombre}: ${item.valor}`;
        select.appendChild(option);
    })
    } catch(error) {
        alert(error.message);
    }
}
obtenerValorSimple();

calcular.addEventListener("click", ()=>{
    let monto = Number(clp.value); 
    let tasaCambio = Number(select.value); 

    if(monto < 0){
        monto=0;
        clp.value = monto;
        alert('NO puede ingresar un numero Menor a 0')
    }

    let calculo = monto / tasaCambio;
    valorActual.innerHTML = calculo.toFixed(3); 
    valorActual.classList.remove('noShow');
}
);

/* ##################################################### */
/* ################ DATOS GRAFICAS ################## */
/* ##################################################### */
const listaCoinsCharts = ["Dolar","Euro","UF","UTM"];
let date = [];
let valor = [];

select.addEventListener("change", async () => {
    let selectedOption = select.options[select.selectedIndex]; 
    for (let i = 0; i < listaCoinsCharts.length; i++){
        if (selectedOption.textContent.includes(listaCoinsCharts[i])) {
            console.log(`Selecciono:  ${listaCoinsCharts[i]}`);
            try{
                let coin = listaCoinsCharts[i].toLowerCase()
                let buscandoData = await fetch(`https://www.mindicador.cl/api/${coin}`)
                let buscandoDataJson = await buscandoData.json();
        
                date =  buscandoDataJson.serie.map(elemntList => elemntList.fecha)
                valor =  buscandoDataJson.serie.map(elemntList => elemntList.valor)

                graficar(date, valor, listaCoinsCharts[i]);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
           }
        }
});

let chartInstance = null;
function graficar(fecha, precio, moneda) {
    const ctx = document.getElementById('myChartCoin');
    let fecha7 = fecha.slice(0, 10);
    let precio7 = precio.slice(0, 10);
    if (chartInstance) {
        chartInstance.destroy();
    }
    chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
        labels: fecha7,
        datasets: [{
            label: moneda,
            data: precio7,
            borderWidth: 1,
            borderColor: '#FF5733',
            backgroundColor: 'rgba(255, 87, 51, 0.2)', 
            pointBackgroundColor: '#FF5733', 
            pointBorderColor: '#C70039',
        }]
    },
    options: {
        scales: {
        y: {
            min: Math.min(...valor) * 0.95,
            max: Math.max(...valor) * 1.05,
        }
        }
    }
    });
}

