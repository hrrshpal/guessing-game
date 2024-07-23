const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber
let numOfAttempts

function checkGuess(number){
    if(number>secretNumber){
        console.log("Too high")
        return false
    } else if(number<secretNumber){
        console.log("Too low")
        return false
    } else if(number === secretNumber){
        console.log("Correct")
        return true
    }
}

function askGuess(){
    rl.question("Enter a guess: ", (guessedNumber)=>{
        guessedNumber = Number(guessedNumber)
        numOfAttempts--
        let res = checkGuess(guessedNumber)
        if(res){
            console.log("You Win!!!")
            rl.close()
        } else {
            if(numOfAttempts===0){
                console.log("You Lose, LOSER")
                rl.close()
            } else {
                askGuess()
            }
        }
    })
}

function randomInRange(min,max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

function askRange(){
    rl.question("Enter a minimum number: ", (min)=>{
        let minRange = Number(min)
        rl.question("Enter a maximum number: ", (max)=>{
            let maxRange = Number(max)
            console.log(`I'm thinking of a number between ${minRange} and ${maxRange}...`)
            secretNumber = randomInRange(minRange,maxRange)
            askGuess()
        })
    })
}

function askLimit(){
    rl.question("How many attempts you want to guess? : ", (num)=>{
        numOfAttempts = Number(num)
        console.log(`You have ${numOfAttempts} attempts to guess the number`)
        askRange()
    })
}

askLimit()
