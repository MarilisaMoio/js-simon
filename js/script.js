//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const container = document.querySelector(".container");

container.innerHTML = generateRandomNumbers(5, 20).join(" ");

//FUNCTION

//funzione che genera num numeri random, da 1 a max
// num -> int per definire il numero di numeri generati
// max -> int per definire il numero più alto che può esser generato
// return -> array di int
function generateRandomNumbers(num, max){
    let randomNumbers = []
    while(randomNumbers.length < num){
        let newNum = Math.floor(Math.random() * (max) +1);
        if (!randomNumbers.includes(newNum)){
            randomNumbers.push(newNum);
        }
    }
    return randomNumbers;
}
