
var altura = document.querySelector('#altura')
var peso = document.querySelector('#peso')
var resultimc = document.querySelector('#result-imc');

//console.log(altura);
//console.log(peso);

function calcularimc(){
    //alert('Função acionada');

    //console.log(altura.value);
   // console.log(peso.value);

    if(altura.value != '' && peso.value != ''){

        var imc = peso.value / (altura.value*altura.value);
        //alert(imc.toFixed(2));

        resultimc.style.display = 'block';
        resultimc.innerHTML = '<h2> Seu IMC : '+imc.toFixed(2)+'</h2>';

        if(imc < 18.5){
            resultimc.style.background = '#ff0000';
        }

        else if(imc <= 24.9){
            resultimc.style.background = '#005f09';
        }

        else if( imc <= 29.9){
            resultimc.style.background = '#ffaa05';
        }

        else{
            resultimc.style.background = '#a30a00';
        }

    }


    else{
        alert('Preecha todos os campos!')
    }

}