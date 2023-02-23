const miBoton = document.getElementById('miBoton');

miBoton.addEventListener('click', function() {
  alert('Click en el botón');
});

$('#miBoton').on('click', function() {
  console.log('Hola, estoy utilizando jQuery');
});
