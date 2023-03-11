//pergunta 1
function pergunta() {
    let indice = 13
    let soma =0
    let k = 0
    while (k<indice) {
    k=k+1
    soma=soma+k
}
alert(soma);
}

//pergunta 3
function existeFibonacci(){
    let numInserido = document.getElementById("pergunta2")
    let numero = Number(numInserido.value);
        let fibonacci = [0, 1];
        let i =2
        while (fibonacci[fibonacci.length-1]<numero) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            i++;
        }
        if(numero===fibonacci[fibonacci.length-1]){
            alert(`${numero} existe na sequência de fibonacci`)
        }else   {alert(`${numero} não existe na sequência de fibonacci`)}
        }
        
//pergunta 5
function inverteFrase() {
    let fraseInserida = document.getElementById("pergunta5")
    let a = String(fraseInserida.value);
    let esarf ='';
    while (a.length > 0) {
        esarf = esarf + a.slice(a.length - 1)
        a = a.slice(0,a.length - 1)
    }   alert(esarf) ;
}
