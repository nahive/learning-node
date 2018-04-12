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
    constructor(location, summary, temperature, feelsLike) {
        this.location = location;
        this.summary = summary;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
    }
    log() {
        console.log(' ');
        console.log(' ');
        console.log(`      ⛅  Weather in ${this.location.name}`);
        console.log(`      🗒  Summary: ${this.summary}`);
        console.log(`      ${this.icon(this.temperature)}  Temperature: ${this.temperature}°C (${this.ctof(this.temperature).toFixed(2)}°F)`);
        console.log(`      ${this.icon(this.feelsLike)}  Feels like: ${this.feelsLike}°C (${this.ctof(this.temperature).toFixed(2)}°F)`);
        console.log(' ');
        console.log(' ');
    }
    icon(temperature) {
        if (temperature < 5)
            return "❄️";
        else if (temperature < 10)
            return "☁️";
        else if (temperature < 20)
            return "⛅️";
        else if (temperature < 30)
            return "☀️";
        else
            return "🔥";
    }
    ctof(celsius) {
        return celsius * 1.8 + 32;
    }
}
class WeatherFetcher {
    constructor() {
        this.googleURL = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
        this.darkweatherURL = `https://api.darksky.net/forecast/${this.darkweatherKey}/`;
    }
    fetch(address) {
        return this.fetchLocation(address).then((location) => { return this.fetchWeather(location); });
    }
    fetchLocation(address) {
        let url = this.googleURL + encodeURIComponent(address);
        process.stdout.write(`Fetching location for ${address} ... `);
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (error, response, body) => {
                if (error) {
                    reject(new Error('Unable to connect to Google servers'));
                    return;
                }
                if (body.status === 'ZERO_RESULTS') {
                    reject(new Error('Unable to find that address'));
                    return;
                }
                if (body.status === 'OVER_QUERY_LIMIT') {
                    reject(new Error('Too many requests - please try again later'));
                    return;
                }
                if (body.status === 'OK') {
                    let result = body.results[0];
                    let nameJSON = result.formatted_address;
                    let locationJSON = result.geometry.location;
                    let location = new Location(nameJSON, locationJSON.lng, locationJSON.lat);
                    console.log('Success!');
                    resolve(location);
                }
                else {
                    reject(new Error('Unknown error occured'));
                }
            });
        });
    }
    fetchWeather(location) {
        let url = this.darkweatherURL + `${location.lat},${location.lng}`;
        process.stdout.write(`Fetching weather for ${location.name}  ...`);
        return new Promise((resolve, reject) => {
            request(url, { json: true, qs: { 'units': 'si' } }, (error, response, body) => {
                if (error) {
                    reject(new Error('Unable to connect to DarkSky servers'));
                    return;
                }
                let weatherJSON = body.currently;
                let weather = new Weather(location, weatherJSON.summary, weatherJSON.temperature, weatherJSON.apparentTemperature);
                console.log('Success!');
                resolve(weather);
            });
        });
    }
}
exports.WeatherFetcher = WeatherFetcher;
//# sourceMappingURL=weather.js.map