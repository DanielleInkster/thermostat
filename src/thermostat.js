function Thermostat() {
  this._temperature = 20;
  this.powerSavingMode = true;
  this.maximumTemperature = 25;
  this.minimumTemperature = 10;
}


Thermostat.prototype.temperature = function(){
  return this._temperature;
}

Thermostat.prototype.returns = function(){
  if (this._temperature >25 ) {
     return this._temperature =25;
    } else {
      return this._temperature
    }
}


Thermostat.prototype.up = function() {
  if (this.powerSavingMode === false) {
    this.maximumTemperature = 32;
    } else {
    this.maximumTemperature = 25;
    }
  if (this._temperature < this.maximumTemperature){
    this._temperature += 1;
    return this._temperature;
  }
}

Thermostat.prototype.down = function() {
  if (this._temperature >this.minimumTemperature){
  this._temperature -= 1;
  return this._temperature;
  }
}

Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSavingMode = true;
}

Thermostat.prototype.reset = function() {
  this._temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return 'low';
  } else if (this._temperature >= 25) {
    return 'high';
  } else {
    return 'medium';
  }

}

