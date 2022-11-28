/* Boton de choose-pet */
var boton = document.getElementById('boton');
var lista = document.getElementById('lista');
var checks = document.querySelectorAll('.animals');


boton.addEventListener('click',function(){
    lista.innerHTML = ''
        checks.forEach((e)=>{
            if(e.checked == true){
                var elemento = document.createElement('li');
                elemento.className = 'list-group-item';
                elemento.innerHTML = e.value;
                lista.appendChild(elemento);
            }
        })
});