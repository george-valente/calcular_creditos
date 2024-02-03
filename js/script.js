const preco = document.querySelector("#preco-passagem"); 
const viagens = document.querySelector("#frequencia-viagens"); 
const saldo = document.querySelector("#saldo"); 
const btn = document.querySelector("#calcular-result"); 
const gastosSemanais = document.querySelector("#gastos-semana"); 
const quantViagens = document.querySelector("#quant-viagens"); 
const maisResultados = document.querySelector("#mais-resultados"); 


const multiplicar = (a,b) => {
    return a * b;   
    
}

const dividir = (a,b) => {
    return parseInt(a / b); 
}

btn.addEventListener("click", (e)=> {
    e.preventDefault(); 

    const precoValue = preco.value; 
    const viagensValue = viagens.value; 
    const saldoValue = saldo.value; 

    if(!precoValue || !viagensValue || !saldoValue) return; 
    if(isNaN(precoValue) || isNaN(viagensValue) || isNaN(saldoValue)) return; 

    else{
        const result = multiplicar(precoValue, viagensValue); 

    gastosSemanais.innerText = `Seus gastos por semana: R$ ${result}`;
    gastosSemanais.style.color = "green"; 

    /* Suas passagens irão durar () dias,semanas */
    const viagensQuant = dividir(saldoValue, precoValue); 

    quantViagens.innerText = `Você pode fazer aproximadamente: ${viagensQuant} viagens`; 
    quantViagens.style.color = "green";  
    
     

    let tempoValue = dividir(viagensQuant, viagensValue); 
    const mes = 4; 
    let tempo = `semanas`; /* variável pra guardar se é semanas, mes ou meses */

    
    /* 1 mês */
    if(tempoValue === 4){
        tempoValue = 1; 
        tempo = `mês`; 
    }
    else if(tempoValue > 4 && (tempoValue%mes === 0)){
        tempoValue = dividir(tempoValue, mes); 

        if(tempoValue >= 2){
            tempo = `meses`; 
        }

        

    }
    
    maisResultados.innerText = `Isso são: ${tempoValue} ${tempo}`; 
    maisResultados.style.color = "green";
    maisResultados.style.fontWeight = "bold"; 

    }

    
})




