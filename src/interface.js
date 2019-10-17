$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();
  updateEnergyUsage();

  $.get('http://localhost:4567/update', function(data) {
    thermostat.temperature = Number(data)
    console.log(data)
    $('#temperature').text(thermostat.temperature);
    updateEnergyUsage();
  });


  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
    sendState();
    updateEnergyUsage();
  })

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature();
    sendState();
    updateEnergyUsage();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
    sendState();
    updateEnergyUsage();
  })

  $('#powersavingmode-on').on('click', function(){
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on')
    thermostat.returns();
    updateTemperature();
    sendState();
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
      $('#current-temperature').text(Math.round(data.main.temp));
      })
    }

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature+" °C");
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updateEnergyUsage(){
    $('#energy-usage-status').text(thermostat.energyUsage());
  };

  function sendState() {
    var send = {temperature: thermostat.temperature};
    $.post('http://localhost:4567/retrieve', send);
  };
});