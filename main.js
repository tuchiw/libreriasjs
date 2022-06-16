const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", ()=>{
    alertas()
})

btn2.addEventListener("click", ()=>{
    cartelEmergente()
})


function alertas(){
    Swal.fire({
        title: 'HAZ HECHO CLICK EN UN BOTON',
        text: 'Esto es una alerta',
        incon: 'sucess',
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancelar',
        showCancelButton: true
    })
}

function cartelEmergente(){
    Toastify({
        text: "HICISTE CLICK",
        duation: 4000 ,
        gravity: 'center',
        position:'center',
        style:{ background: '#FE4949' }
    }).showToast();
}