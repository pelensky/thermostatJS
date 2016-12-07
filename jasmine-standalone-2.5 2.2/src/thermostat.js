function Thermostat() {
    this.temperature = 20;
};

Thermostat.prototype.increaseTemp = function(){
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  this.temperature -= 1;
};
