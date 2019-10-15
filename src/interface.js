$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
    updateEnergyUsage();
  })

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature();
    updateEnergyUsage();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
    updateEnergyUsage();
  })

  $('#powersavingmode-on').on('click', function(){
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on')
  })

  $('#powersavingmode-off').on('click', function(){
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off')
  })

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    if(thermostat.energyUsage() === 'low') {
      $('#temperature').css('color', 'green')
    } else if(thermostat.energyUsage() === 'medium') {
      $('#temperature').css('color', 'black')
    } else {
      $('#temperature').css('color', 'red')
    }
  };

  function updateEnergyUsage(){
    $('#energy-usage-status').text(thermostat.energyUsage());
  };
});