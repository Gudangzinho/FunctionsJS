//Crie uma um programa de saúde, nesse programa desenvolva uma função que calcula o imc de pacientes, 
//a função deverá receber os  seguintes parâmetros, peso e altura.
function imc(peso, altura){
    return peso / (altura ** 2);
}
console.log(imc(65,1.66))
