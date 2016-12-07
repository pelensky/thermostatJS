function Thermostat() {
    this.temperature = 20;
};

Thermostat.prototype.increaseTemp = function(){
  this.temperature += 5;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > 10) {
    this.temperature -= 5;
  } else {
    throw new Error('Minimum temperature is 10 degrees')
  }



};
