describe("Thermostat", function(){
  var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
});

it("should initialize at 20 degrees", function(){
  expect(thermostat.temperature).toEqual(20);
});

it("should increase temperature by the amount specified", function(){
  thermostat.increaseTemp(5);
  expect(thermostat.temperature).toEqual(25);
});

it("should decrease temperature by the amount specified", function(){
  thermostat.decreaseTemp(5);
  expect(thermostat.temperature).toEqual(15);
});

it("should have a minimum temperature of 10 degrees", function(){
  thermostat.decreaseTemp(11)
  console.log(thermostat.temperature)
  expect(thermostat.temperature).toEqual(10);
});

it("should have a maximum temperature of 32 degrees if power save is off", function(){
  thermostat.increaseTemp(243);
  expect(thermostat.temperature).toEqual(32);
});
});
