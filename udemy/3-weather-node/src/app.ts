import * as yargs from 'yargs'
import * as weather from './weather'



let argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    }).help().alias('help', 'h').argv

let address = argv.address
let fetcher = new weather.WeatherFetcher()

fetcher.fetch(address, (weather) => {
    console.log(`Current weather in ${weather.location.name}`)
    console.log(`Summary: ${weather.summary}`)
    console.log(`Temperature: ${weather.temperature}`)
})

