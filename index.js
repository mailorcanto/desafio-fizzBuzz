//FizzBuzz
//Escreva um programa que imprima os números de 1 a 100. Mas para múltiplos de três imprima 'Fizz' em vez do número e para múltiplos de cinco
//imprima 'Buzz'. Para números que são múltiplos de três e cinco, imprima 'FizzBuzz'.

var numero = 100

for (i = 1; i <= numero; i++){
    if (i % 3 === 0){
        if(i % 5 === 0){
            console.log('FizzBuzz'); //Múltiplo de três e cinco
        }
        else(console.log('Fizz')) //Múltiplo de três
    }
    else if(i % 5 == 0){
        console.log('Buzz') //Múltiplo de cinco
    }
    else{
        console.log(i);
    }

}