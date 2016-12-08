var Thermostat = function () {
    this.temperature = 20;
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature
};

Thermostat.prototype.increaseTemperature = function () {
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.temperature <= 10) throw "Mininum temperature is 10 degrees. Cannot go below."
  this.temperature -= 1;
};
