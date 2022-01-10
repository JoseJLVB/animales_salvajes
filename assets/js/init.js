import Leon from './Leon.js'
import Lobo from './Lobo.js'
import Oso from './Oso.js'
import Serpiente from './Serpiente.js'
import Aguila from './Aguila.js'

(async function () {
    let data = await fetch('data/animales.json')
    const data2 = await data.json()
    const animales = data2.animales

    $('#animal').on('change', function() {
    
        const nombre_animal = $('#animal').val()

        const animal = animales.find( an => an.name == nombre_animal )

        $('#preview').css('background-image', `url("assets/imgs/${animal.imagen}")`)

    })

    console.log(animales);
})(); 


let animalList = [];

$('#btnRegistrar').on('click', function() {

    const name_animal = $("#animal").val();
    const age_animal = $("#edad").val();
    const com = $("#comentarios").val().trim();

    const errors = [];

    if (name_animal == null) {
        errors.push("Debe Seleccionar un Animal");
    }

    if (age_animal == null) {
        errors.push("Debe Seleccionar un Rango de Edad");
    }

    if (com == "") {
        errors.push("Debe Escribir un Comentario");
    }

    if (errors.length > 0) {
        const errores = errors.join(' - ');
        alert(errores);

    } else {

        let source;
        let sound;
        let animal;

        const selAnimal = $("#animal").val();

        if (selAnimal == "Leon") {
            source = "assets/imgs/Leon.png";
            sound = "assets/sounds/Rugido.mp3";
            animal = new Leon(selAnimal, age_animal, com);

        } else if (selAnimal == "Lobo") {

            source = "assets/imgs/Lobo.jpg";
            sound = "assets/sounds/Aullido.mp3";
            animal = new Lobo(selAnimal, age_animal, com);

        } else if (selAnimal == "Oso") {

            source = "assets/imgs/Oso.jpg";
            sound = "assets/sounds/Gruñido.mp3";
            animal = new Oso(selAnimal, age_animal, com);

        } else if (selAnimal == "Serpiente") {

            source = "assets/imgs/Serpiente.jpg";
            sound = "assets/sounds/Siseo.mp3";
            animal = new Serpiente(selAnimal, age_animal, com);

        } else if (selAnimal == "Aguila") {

            source = "assets/imgs/Aguila.png";
            sound = "assets/sounds/Chillido.mp3";
            animal = new Aguila(selAnimal, age_animal, com);

        }

        animalList.push(animal);
        draw(animalList);

    }

    $('#comentarios').val('');
    $("#animal").prop("selectedIndex", 0);
    $("#edad").prop("selectedIndex", 0);
    $('#preview').css('background-image', ``);
});

function draw(animales) {

    $("#Animales").html("");

    for (let i = 0; i < animales.length; i++) {let animal = animales[i];

        $("#Animales").append(
            `<div class="card bg-secondary" style="margin-right: 20px; width: 200px; margin-left: 20px;">
                <img src="${animal.img}" class="card-img-top foto-modal" style="height: 280px">
                <div class="card-body">
                    <button class="btn-dark" onclick="sonar(${i})" id="btnSound">
                        <img src = "assets/imgs/audio.svg" "width: 10px; height: 40px">
                    </button>                    
                </div>
            </div>`
        );
        $('.foto-modal').on('click', function () {
            $('#exampleModal').modal('show');
            $('.modal-body').html(`
                <div class="card m-1 bg-secondary" style="">
                    <img src="${animal.img}" class="card-img-top" alt="Animal">
                    <div class="card-body py-1 text-center">
                        <h5>Edad:</h5> 
                        <p>${animal.edad}</p>
                        <h5>Comentarios</h5>
                        <p>${animal.comentarios}</p>                    
                    </div>
                </div>`
            );
        });
    };
}




window.sonar = (pos) => {
    let animal = animalList[pos];
    console.log(animal);

    

    if (animal.nombre == "Leon") {
        animal.rugir();
    } else if (animal.nombre == "Lobo") {
        animal.aullar();
    } else if (animal.nombre == "Oso") {
        animal.gruñir();
    } else if (animal.nombre == "Serpiente") {
        animal.sisear()
    } else if (animal.nombre == "Aguila") {
        animal.chillar();
    }

}