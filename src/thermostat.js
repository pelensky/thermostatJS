function Thermostat() {
  this.temperature = 20;
  this.isPowerSave = true;
  this.energyUsage = 'medium-usage';
};

Thermostat.prototype.increaseTemp = function(number){
  this.temperature += number;
  if(this.isPowerSave) {
    if (this.temperture < 26) {
      return this.temperature
    } else {
      this.temperature = 25
      return this.temperature
    }
  } else {
    if (this.temperture < 33) {
      return this.temperature
    } else {
      this.temperature = 32
      return this.temperature
    }
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


Thermostat.prototype.reset = function(){
  this.temperature = 20;
  return this.temperature;
};

Thermostat.prototype.energy = function(){
  if(this.temperature < 18) {
    this.energyUsage = "low-usage";
    return this.energyUsage;
  } else if (this.temperature >25) {
      this.energyUsage = "high-usage";
      return this.energyUsage;
  } else {
    return this.energyUsage;
  }
};