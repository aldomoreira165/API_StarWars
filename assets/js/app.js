var linkPersonajes = document.getElementById('link-personajes');
var linkPlanetas = document.getElementById('link-planetas');

linkPersonajes.addEventListener('click', function(){
    $.ajax({
        url: 'https://swapi.dev/api/people',
        method: 'GET',
        success: function(data){
            var listaElementos = document.getElementById('lista-elementos');
            var salida = '';
            $.each(data.results, function(index, value){
                console.log(value);
                color = generarColor();
                salida += `<div class="card card-element" style="width: 18rem;">
                <img src="./assets/img/${value.name}.png" class="card-img-top card-img" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${value.name}</h5>
                  <p class="card-text">Altura: ${value.height}</p>
                  <p class="card-text">Género: ${value.gender}</p>
                  <a href="#" class="btn btn-${color}">Ver más</a>
                </div>
              </div>
              `;
            });
            listaElementos.innerHTML = salida;
        },
        error: function(e){
            alert('Ocurrio un error');
            console.log(e);
        }
    });
});


linkPlanetas.addEventListener('click', function(){
    $.ajax({
        url: 'https://swapi.dev/api/planets',
        method: 'GET',
        success: function(data){
            generarColor();
            var listaElementos = document.getElementById('lista-elementos');
            var salida = '';
            $.each(data.results, function(index, value){
                console.log(value);
                color = generarColor();
                salida += `<div class="card card-element" style="width: 18rem;">
                <img src="./assets/img/${value.name}.png" class="card-img-top card-img" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${value.name}</h5>
                  <p class="card-text">Clima: ${value.climate}</p>
                  <p class="card-text">Población: ${value.population}</p>
                  <a href="#" class="btn btn-${color}">Ver más</a>
                </div>
              </div>
              `;
            });
            listaElementos.innerHTML = salida;
        },
        error: function(e){
            alert('Ocurrio un error');
            console.log(e);
        }
    });
});

function generarColor(){
    var numeroAleatorioEnRango = Math.floor(Math.random() * 5) + 1;
    var color = '';

    switch (numeroAleatorioEnRango) {
        case 1:
            color = "primary"
            break;
        case 2:
            color = "success"
            break;
        case 3:
            color = "danger"
            break;
        case 4:
            color = "warning"
            break;
        case 5:
            color = "info"
            break;
    }
    return color;
}