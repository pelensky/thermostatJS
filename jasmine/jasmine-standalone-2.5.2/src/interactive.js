$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#powerSavingMode").text("Thermostat is on");

  $("#powerSaveOn").on("click", function(){
    thermostat.powerSaving("on");
    $("#powerSavingMode").text("Thermostat is on");
    console.log(thermostat.maximumTemperature);
  });

  $("#powerSaveOff").click(function (){
    thermostat.powerSaving("off");
    $("#powerSavingMode").text("Thermostat is off");
    console.log(thermostat.maximumTemperature);
  });

  $('#increase').click(function(){
    thermostat.increaseTemperature();
      $("#temperature").text(thermostat.getTemperature());
      $('#usage').text(thermostat.energyUsage());
      if (thermostat.energyUsage() === 'Low usage') $('#usage').css('color', 'green');
      if (thermostat.energyUsage() === 'Medium usage') $('#usage').css('color', 'black');
      if (thermostat.energyUsage() === 'High usage') $('#usage').css('color', 'red');

  });

  $('#decrease').click(function(){
    thermostat.decreaseTemperature();
    $("#temperature").text(thermostat.getTemperature());
    $('#usage').text(thermostat.energyUsage());
    if (thermostat.energyUsage() === 'Low usage') $('#usage').css('color', 'green');
    if (thermostat.energyUsage() === 'Medium usage') $('#usage').css('color', 'black');
    if (thermostat.energyUsage() === 'High usage') $('#usage').css('color', 'red');
  });

  $('#reset').click(function () {
    thermostat.reset();
    $("#temperature").text(thermostat.getTemperature());
    $('#usage').text(thermostat.energyUsage());
    if (thermostat.energyUsage() === 'Low usage') $('#usage').css('color', 'green');
    if (thermostat.energyUsage() === 'Medium usage') $('#usage').css('color', 'black');
    if (thermostat.energyUsage() === 'High usage') $('#usage').css('color', 'red');  
  });


});
