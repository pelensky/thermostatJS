var Thermostat = function () {
    this.temperature = 20;
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature
};

Thermostat.prototype.increaseTemperature = function () {
  this.temperature += 1;
};
