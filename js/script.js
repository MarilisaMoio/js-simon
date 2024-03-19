//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const container = document.querySelector(".container");
const btn = document.querySelector("button")

btn.addEventListener("click", function(){
    const simonArray = generateRandomNumbers(5, 20);
    container.innerHTML = simonArray.join(" ");
    //separto in due timeout diversi per generare un delay in modo tale che il prompt non venisse triggerato prima della sparizione dei numeri originali
    setTimeout(() => container.innerHTML = "", 30000)
    //secondo timeout, per raccogliere i numeri dell'utente
    setTimeout(function(){
        let userArray = [];
        for(let i = 1; i <= 5; i++){
            let userNumber = prompt(`Scrivi il ${i}° numero che ricordi`);
            userArray.push(userNumber)  
        }
        //comparazione del contenuto degli array, con sort per evitare che l'ordine dei numeri abbia peso
        if (userArray.sort().toString() === simonArray.sort().toString()){
            alert(`Hai vinto! I numeri erano ${simonArray.join(" ")} e tu li hai indovinati tutti!`);
        } else {
            alert(`Hai perso. I numeri erano ${simonArray.join(" ")} e tu hai invece scritto ${userArray.join(" ")}.`)
        }
    }, 30500)
})


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
