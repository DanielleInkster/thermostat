function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.temperature = function(){
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.temperature < 32){
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
