console.log("WELCOME TO BLACKJACK")

var carta1 = getRandomCard()
var carta2 = getRandomCard()

console.log("carta1: "+ carta1 + "carta2: "+ carta2)
var mano = carta1 + carta2
console.log("mano: "+ mano)

var message = getMessage(mano)
while(message == "Sigue jugando"){
    mano += getRandomCard();
    var message = getMessage(mano)
}
console.log(message)


function getMessage(mano){
    if(mano == 21){
       return "BLACKJACK"
    }else{
        var mensaje = mano>21? "PERDISTE" : "Sigue jugando"
        return mensaje
    }
}

function getRandomCard(){
    return Math.floor(Math.random() *11) + 1
}