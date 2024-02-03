const preco = document.querySelector("#preco-passagem"); 
const viagens = document.querySelector("#frequencia-viagens"); 
const saldo = document.querySelector("#saldo"); 
const btn = document.querySelector("#calcular-result"); 
const gastosSemanais = document.querySelector("#gastos-semana"); 
const quantViagens = document.querySelector("#quant-viagens"); 
const maisResultados = document.querySelector("#mais-resultados"); 
const error = document.querySelector(".erro"); 


/* Funções */
const multiplicar = (a,b) => {
    return a * b;   
    
}

const dividir = (a,b) => {
    return parseInt(a / b); 
}


const calcularCreditos = () => {
    const precoValue = preco.value; 
    const viagensValue = viagens.value; 
    const saldoValue = saldo.value; 

    if(!precoValue || !viagensValue || !saldoValue){
        error.innerText = "Por favor, insira valores para continuar"; 
        error.style.color = "red"; 
        error.style.textAlign = "center" 

        setTimeout(() => {
            location.reload(); 
        }, 1000);

    }

    else if(isNaN(precoValue) || isNaN(viagensValue) || isNaN(saldoValue)){
        error.innerText = "Por favor, insira valores númericos"; 
        error.style.color = "red"; 
        error.style.textAlign = "center";

        setTimeout(() => {
            location.reload(); 
        }, 1000);
    }

    else if(precoValue <= 0 || viagensValue <=0 || saldoValue <=0){
        error.innerText = "Por favor, insira valores maiores que 0 "; 
        error.style.color = "red"; 
        error.style.textAlign = "center";

        setTimeout(() => {
            location.reload(); 
        }, 1000);
    }

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
    else if(tempoValue <= 0){
        tempoValue = `menos de`; 
        tempo = `uma semana`; 
    }
    
    maisResultados.innerText = `Isso são: ${tempoValue} ${tempo}`; 
    maisResultados.style.color = "green";
    maisResultados.style.fontWeight = "bold"; 

    }
    
}

/* Eventos */
btn.addEventListener("click", (e)=> {
    e.preventDefault(); 
    calcularCreditos(); 
    
})

viagens.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        calcularCreditos(); 
    }
})


