$(document).ready(function() {
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



  $('#changeCityButton').click(function() {
      var city = $("#changeCity").val();
      $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=618b0fb946dbbf8f875877fbac622c50&units=metric", function(data){
        $('#weather-temperature').text(data.main.temp);
        $('#city').text(data.name);
        $('#description').text(data.weather[0].description);
      });
  });

  $('#loadInformation').click(function() {
    $.get("http://localhost:4567/temperature", function(response) {
      console.log(response);
        // $('#temperature').text(response.temperature);
    });
  });


  });
