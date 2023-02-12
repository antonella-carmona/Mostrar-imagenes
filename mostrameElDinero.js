const imagen = document.querySelectorAll("#imagen")
const boton = document.querySelectorAll("#boton")



for(let i = 0; i < boton.length; i++){
    boton[i].addEventListener("click", function(){
        imagen[i].classList.toggle("oculto")
        })

        imagen[i].addEventListener("click", ()=>{
            imagen[i].classList.add("oculto")
            // this.classList.add("oculto")
        })
    }
