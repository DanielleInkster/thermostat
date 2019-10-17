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
    thermostat.returns();
    updateTemperature();
    updateEnergyUsage();
  })

  $('#powersavingmode-off').on('click', function(){
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off')
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=3e0b121f266b86a2c7c271d5e8d6ab99&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    })
  
    $('#current-city').change(function() {
      var city = $('#current-city').val();
      displayWeather(city)
    })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=3e0b121f266b86a2c7c271d5e8d6ab99';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      })
    }

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