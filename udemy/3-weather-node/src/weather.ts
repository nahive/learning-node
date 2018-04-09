import * as request from 'request'

class Location {
    public name: string
    public lng: number
    public lat: number

    constructor(name: string, lng: number, lat: number) {
        this.name = name
        this.lng = lng
        this.lat = lat
    }
}

class Weather {
    public location: Location
    public summary: string
    public temperature: number

    constructor(location: Location, summary: string, temperature: number) {
        this.location = location
        this.summary = summary
        this.temperature = temperature
    }
}

export class WeatherFetcher {

    private googleURL = 'http://maps.googleapis.com/maps/api/geocode/json?address='

    private darkweatherURL = `https://api.darksky.net/forecast/${this.darkweatherKey}/`
    
    public fetch(address: string, callback: (weather: Weather) => any) {
        this.fetchLocation(address, (location) => { this.fetchWeather(location, callback) })
    }

    private fetchLocation(address: string, callback: (location: Location) => any) {
        let url = this.googleURL + encodeURIComponent(address)

        console.log(`Fetching location for ${address} ...`)

        request(url, { json: true }, (error, response, body) => {
            let result = body.results[0]
            let nameJSON = result.formatted_address
            let locationJSON = result.geometry.location
            let location = new Location(nameJSON, locationJSON.lng, locationJSON.lat)
            callback(location)
        })
    }

    private fetchWeather(location: Location, callback: (weather: Weather) => any) {
        let url = this.darkweatherURL + `${location.lat},${location.lng}`

        console.log(`Fetching weather for ${location.name}  ...`)

        request(url, { json: true }, (error, response, body) => {
            let weatherJSON = body.currently
            let weather = new Weather(location, weatherJSON.summary, weatherJSON.temperature)
            callback(weather)
        })
    }
}