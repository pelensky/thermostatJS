describe("Thermostat", function(){
  var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
});

it("should initialize at 20 degrees", function(){
  expect(thermostat.temperature).toEqual(20);
});

it("should increase temperature by 5", function(){
  thermostat.increaseTemp();
  expect(thermostat.temperature).toEqual(25);
});

it("should decrease temperature by 5", function(){
  thermostat.decreaseTemp();
  expect(thermostat.temperature).toEqual(15);
});

it("should have a minimum temperature of 10 degrees", function(){
  thermostat.decreaseTemp();
  thermostat.decreaseTemp();
  expect(function(){ thermostat.decreaseTemp();}).toThrowError('Minimum temperature is 10 degrees');
});
});
