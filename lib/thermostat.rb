class Thermostat

  attr_reader :temperature, :power_saving_mode

  def initialize(temperature,power_saving_mode)
    @temperature = temperature
    @power_saving_mode = power_saving_mode
  end

def self.create
  @thermostat = Thermostat.new(temperature, power_saving_mode)
end

def self.instance
  @thermostat
end

end
