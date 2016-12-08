$(document).ready(function() {
  var jsonData;
  $.ajax ({
    url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=2643743&APPID={6d4bbb8a1db58900a6e66af4b3cdacca}',
    jsonp: "callback",
    dataType: "jsnop",
    data: {
      q: 'city',
      format: "json"
    },
    success: function(response) {
      jsonData = response;
      console.log(response);
    }
  });

  var thermostat = new Thermostat();

  $("#powerSaveOn").on("click", function(){
    thermostat.powerSaving("on");
    $("#powerSavingMode").text("Power Saving Mode is on");
  });

  $("#powerSaveOff").click(function (){
    thermostat.powerSaving("off");
    $("#powerSavingMode").text("Power Saving Mode is off");
  });

  $('#increase').click(function(){
    thermostat.increaseTemperature();
  });

  $('#decrease').click(function(){
    thermostat.decreaseTemperature();
  });

  $('#reset').click(function () {
    thermostat.reset();

  });

  $(':button').click(function () {
    $("#temperature").text(thermostat.getTemperature());
    $('#usage').text(thermostat.energyUsage());
    if (thermostat.energyUsage() === 'Low usage') $('#usage').css('color', 'green');
    if (thermostat.energyUsage() === 'Medium usage') $('#usage').css('color', 'black');
    if (thermostat.energyUsage() === 'High usage') $('#usage').css('color', 'red');
  });
  });
