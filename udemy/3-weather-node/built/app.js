"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const weather = require("./weather");
let argv = yargs
    .options({
    address: {
        demand: true,
        alias: 'a',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help().alias('help', 'h').argv;
let address = argv.address;
let fetcher = new weather.WeatherFetcher();
fetcher.fetch(address).then((weather) => {
    weather.log();
}).catch((error) => {
    let err = error;
    console.log(err.message);
});
//# sourceMappingURL=app.js.map