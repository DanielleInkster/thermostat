describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it ('starts at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('.up', function() {
    it ('increases the temperature by 1 degree', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it ('does not increase temperature above 25 in power saving mode', function() {
      var times;
      for ( times = 0; times < 5; times ++){
        thermostat.up();
      }
      thermostat.up();
      expect(thermostat.temperature).toEqual(25);
    });
  });

  //   it ('does not increase temperature above 32 in regular mode', function() {
  //     thermostat.powerSavingMode === false;
  //     var times;
  //     for ( times = 0; times < 12; times ++){
  //       thermostat.up();
  //     }
  //     thermostat.up();
  //     expect(thermostat.temperature).toEqual(32);
  //   });
  // });

  describe('.down', function() {
    it ('decreases the temperature by 1 degree', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it ('does not let temperature go below 10 degrees', function() {
      var times;
      for ( times = 0; times < 10; times ++){
        thermostat.down();
      }
      thermostat.down();
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('.powerSavingModeOff', function() {
    it ('turns off powerSavingMode', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.powerSavingMode).toEqual(false);
    });
  });
});
