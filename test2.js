console.log("TEST")

var carta1 = Math.floor(Math.random() *10) + 1
var carta2 = Math.floor(Math.random() *10) + 1
var carta3 = Math.floor(Math.random() *10) + 1 

console.log("carta3: "+ carta3)
var mano = carta1 + carta2 + carta3
console.log("mano: "+ mano)

if(mano == 21){
    console.log("BLACKJACK")
}else{
    var mensaje = mano>21? "PERDISTE" : "Quieres otra carta?"
    console.log(mensaje)
}
