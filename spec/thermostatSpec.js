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

  describe('.reset', function() {
    it('resets the temperature to 20', function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('.energyUsage', function() {
    it('returns low-usage if temperature is < 18 degrees', function(){
      var times;
      for ( times = 0; times < 4; times ++){
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low');
    });

    it('returns low-usage if 18 <= temperature < 25 degrees', function() {
      expect(thermostat.energyUsage()).toEqual('medium');
    });

    it('returns low-usage if temperature is >= 25 degrees', function() {
      var times;
      for ( times = 0; times < 6; times ++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high');
    });

  });

});
