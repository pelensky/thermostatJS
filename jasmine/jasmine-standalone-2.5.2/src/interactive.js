$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#temperature").text(thermostat.getTemperature());

  $("powerSavingMode").text(thermostat.powerSaving("on"));

  $("#powerSaveOn").on("click", function(){
    thermostat.powerSaving("on");
    console.log(thermostat.maximumTemperature);
  });
});
