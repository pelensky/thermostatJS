function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.increaseTemp = function(number){
    this.temperature += number;
  if(this.temperature <= 32) {
    return this.temperature
  } else {
  this.temperature = 32
  return this.temperature
  }
};

Thermostat.prototype.decreaseTemp = function(number){
  this.temperature -= number;
  if (this.temperature < 10) {
    this.temperature = 10;
    return this.temperature;
  } else {
    return this.temperature;
  }
};
