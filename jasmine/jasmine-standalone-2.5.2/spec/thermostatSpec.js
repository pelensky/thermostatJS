describe("Thermostat", function () {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });
  it('initializes at 20 degrees', function () {
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('increases temperature by one degree with an up function', function () {
    thermostat.increaseTemperature();
    expect(thermostat.getTemperature()).toEqual(21);
  });

});
