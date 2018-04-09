"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class Location {
    constructor(name, lng, lat) {
        this.name = name;
        this.lng = lng;
        this.lat = lat;
    }
}
class Weather {
    constructor(location, summary, temperature) {
        this.location = location;
        this.summary = summary;
        this.temperature = temperature;
    }
}
class WeatherFetcher {
    constructor() {
        this.googleURL = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
        this.darkweatherURL = `https://api.darksky.net/forecast/${this.darkweatherKey}/`;
    }
    fetch(address, callback) {
        this.fetchLocation(address, (location) => { this.fetchWeather(location, callback); });
    }
    fetchLocation(address, callback) {
        let url = this.googleURL + encodeURIComponent(address);
        console.log(`Fetching location for ${address} ...`);
        request(url, { json: true }, (error, response, body) => {
            let result = body.results[0];
            let nameJSON = result.formatted_address;
            let locationJSON = result.geometry.location;
            let location = new Location(nameJSON, locationJSON.lng, locationJSON.lat);
            callback(location);
        });
    }
    fetchWeather(location, callback) {
        let url = this.darkweatherURL + `${location.lat},${location.lng}`;
        console.log(`Fetching weather for ${location.name}  ...`);
        request(url, { json: true }, (error, response, body) => {
            let weatherJSON = body.currently;
            let weather = new Weather(location, weatherJSON.summary, weatherJSON.temperature);
            callback(weather);
        });
    }
}
exports.WeatherFetcher = WeatherFetcher;
//# sourceMappingURL=weather.js.map