var Thermostat = function () {
    this.temperature = 20;
    this.maximumTemperature = 25;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature
};

Thermostat.prototype.increaseTemperature = function () {
  if (this.temperature > this.maximumTemperature) throw `Maximum temperature is ${this.maximumTemperature} degrees. Cannot go above.`
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.temperature <= this.MINIMUM_TEMPERATURE) throw "Mininum temperature is 10 degrees. Cannot go below."
  this.temperature -= 1;
};

Thermostat.prototype.powerSaving = function (state) {
  if (state === "on") {
    return this.maximumTemperature;
  } else {
    this.maximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_OFF;
    return this.maximumTemperature;
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};
