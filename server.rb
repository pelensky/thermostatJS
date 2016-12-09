require 'sinatra'
require 'json'
# require_relative './lib/thermostat'


set :public_folder, proc {File.join(root)}

get "/temperature" do
  content_type :json

  headers 'Access-Control-Allow-Origin' => '*'
  @thermostat = Thermostat.instance
  {temperature: @thermostat.temperature , power_saving_mode: @thermostat.power_saving_mode}.to_json
end

post "/temperature" do
  Thermostat.create(10, "off")
end
