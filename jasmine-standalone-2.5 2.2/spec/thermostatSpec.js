describe("Thermostat", function(){
  var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
});

it("should initialize at 20 degrees", function(){
  expect(thermostat.temperature).toEqual(20);
});

it("should increase temperature by 1", function(){
  thermostat.increaseTemp();
  expect(thermostat.temperature).toEqual(21);
});

it("should decrease temperature by 1", function(){
  thermostat.decreaseTemp();
  expect(thermostat.temperature).toEqual(19);
});


});
