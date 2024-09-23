let dataSecret = document.getElementsByClassName("squares")

const value = dataSecret.getValue;



function getValue(){
    dataSecret.addEventListener("click", (event) =>{
        let dataValue = dataSecret.value;
        if (dataValue == dataSecret){
            return(
                dataSecret.innerHTML = value
            )
        }
    })
}

