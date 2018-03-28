var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
//FUNCION QUE CREO PARA QUITAR LA FOTO
    function cameraTakePicture() {
     navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
     });
//FUNCION QUE CREO PARA CREAR EL RECUADRO DE LA PREVISUALIZACION DE LA IMAGEN(LO QUE SE GRABA CON LA CAMARA)
     function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
     }
//FUNCION POR SI DA ERROR LA CAMARA
     function onFail(message) {
        alert('Failed because: ' + message);
     }
  },
  //FUNCION QUE CREO PARA QUE ME PASE EL ESTADO DE LA BATERIA
  function onBatteryStatus(info) {
   alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged);
},
//FUNCIONES PARA ACTIVAR LA VIBRACION
function vibration() {
   var time = 3000;
   navigator.vibrate(time);
},

function vibrationPattern() {
   var pattern = [1000, 1000, 1000, 1000];
   navigator.vibrate(pattern);
},
//AQUI ES DONDE CARGO TODAS LAS FUNCIONES CREADAS
    onDeviceReady: function() {
      document.getElementById("vibration").addEventListener("click", vibration);
      document.getElementById("vibrationPattern").addEventListener("click", vibrationPattern);
      window.addEventListener("batterystatus", onBatteryStatus, false);
      document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
