function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.increaseTemp = function(number){
  // if(this.temperature <= 32) {
  this.temperature += number;
  // } else {
  //   throw new Error('Maximum temperature is 32 degrees')
  // }
};

Thermostat.prototype.decreaseTemp = function(number){
  this.temperature -= number;
  if (this.temperature < 10) {
    this.temperature = 10;
    return this.temperature;
    // throw new Error('Minimum temperature is 10 degrees')
  } else {
    return this.temperature;
  }
};
