function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  if (this.powerSavingMode === true){
    this.maximumTemperature = 25;
  } else {
    this.maximumTemperature = 32;
  }
}

Thermostat.prototype.temperature = function(){
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.temperature < this.maximumTemperature){
  this.temperature += 1;
  return this.temperature;
  }
}

Thermostat.prototype.down = function() {
  if (this.temperature >10){
  this.temperature -= 1;
  return this.temperature;
  }
}

Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return 'low';
  } else if (this.temperature >= 25) {
    return 'high';
  } else {
    return 'medium';
  }
}
