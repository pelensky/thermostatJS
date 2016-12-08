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
  });
