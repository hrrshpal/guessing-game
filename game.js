const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 5

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
        let res = checkGuess(guessedNumber)
        if(res){
            console.log("You Win!!!")
            rl.close()
        } else {
            askGuess()
        }
    })
}

askGuess()
