const squares = document.getElementsByClassName("squares")
const matchesLeft = document.getElementById("matchesLeft")

let num = squares.length;

let card1 = null
let card2 = null
matchesLeft.value = 8

function getValue(){

}
for(let i=0; i<squares.length;i++){
    squares[i].addEventListener("click", (event) =>{
        event.target.innerHTML = event.target.dataset.secret
        if (card1 != null){
            card2 = event.target
            if (checkMatch()){
                card1.remove()
                card2.remove()
                card1 = null
                card2 = null
                matchesLeft.value -=1
                matchesLeft.innerHTML = "Matches Left: " + matchesLeft.value
            } else {
                setTimeout(() =>{
                    event.target.innerHTML = ""
                    card1.innerHTML = ""
                    card2.innerHTML = ""
                    card1 = null
                    card2 = null
                }, 1000)
            }
        } else {
            card1 = event.target
        }

    })
    
}
function checkMatch(){
    console.log (card1)
    return (card1.dataset.secret == card2.dataset.secret)
}