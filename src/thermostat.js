function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.temperature = function(){
  return this.temperature;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
  return this.temperature;
}

Thermostat.prototype.down = function() {
  this.temperature -= 1;
  return this.temperature;
}
