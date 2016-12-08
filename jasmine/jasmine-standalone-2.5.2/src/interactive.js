$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#temperature").text(thermostat.getTemperature());

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
});
