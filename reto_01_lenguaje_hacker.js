/*
 * Reto #1: EL "LENGUAJE HACKER"
 * FÁCIL | Publicación: 02/01/23 | Resolución: 09/01/23
 * 
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

function encryption(word){
    const alphabet = [
        { letter: 'a', leet: '4' },
        { letter: 'b', leet: 'I3' },
        { letter: 'c', leet: '[' },
        { letter: 'd', leet: ')' },
        { letter: 'e', leet: '3' },
        { letter: 'f', leet: '|=' },
        { letter: 'g', leet: '&' },
        { letter: 'h', leet: '#' },
        { letter: 'i', leet: '1' },
        { letter: 'j', leet: ',_|' },
        { letter: 'k', leet: '>|' },
        { letter: 'l', leet: '£' },
        { letter: 'm', leet: '/V\\' },
        { letter: 'n', leet: '^/' },
        { letter: 'o', leet: '0' },
        { letter: 'p', leet: '|*' },
        { letter: 'q', leet: '(_,)' },
        { letter: 'r', leet: 'I2' },
        { letter: 's', leet: '5' },
        { letter: 't', leet: '7' },
        { letter: 'u', leet: '(_)' },
        { letter: 'v', leet: '|/' },
        { letter: 'w', leet: 'Ш' },
        { letter: 'x', leet: '><' },
        { letter: 'y', leet: 'j' },
        { letter: 'z', leet: '7_' },
        { letter: ' ', leet: ' ' }
    ];

    let textEncryption = '';

    /* for(let i = 0; i < word.length; i++){ */
    for(char of word){
        let findLetter = char;
        let textLetter = alphabet.find((text) => text.letter === findLetter);
        textEncryption += textLetter.leet;
    }
    console.log(textEncryption)
}

encryption('hola mundo');