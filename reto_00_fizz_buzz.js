/*
 * Reto #0: EL FAMOSO "FIZZ BUZZ”
 * FÁCIL | Publicación: 26/12/22 | Resolución: 10/08/23
 * 
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzbuzz(){
    let i = 1;
    while(i<=100){
        (i%3 === 0) && (i%5 === 0) ?
            console.log('fizzbuzz')
        :(i%3 === 0) ?
            console.log('fizz')
        :(i%5 === 0) ?
            console.log('buzz')
        :console.log(i)
        i++;
    }
}

fizzbuzz();

/* Respuesta en el siguiente enlace: https://youtu.be/2iW4NCzOAxs */