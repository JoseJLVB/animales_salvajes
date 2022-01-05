(async function () {
  let data = await fetch('data/animales.json')
  const data2 = await data.json()
  const animales = data2.animales

  $('#animal').on('change', function() {
    // obtengo el valor del "option" seleccionado
    const nombre_animal = $('#animal').val()

    const animal = animales.find( an => an.name == nombre_animal )

    $('#preview').css('background-image', `url("assets/imgs/${animal.imagen}")`)

  })

  console.log(animales);
})()  // IIFE (Funciones Inmediatamente Ejecutadas)
