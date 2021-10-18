const apiKey = "api key enter here"

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city)=>
`https://api.openweathermap.org/data/2.5/weather?q=$(city)&appid=$(apiKey)`;

async function getWeatherByLocation(city){

    const resp = await fetch(url(city), {
        origin: "cros"
    })

}