// Weather app using OpenWeather API

let apiKey = "&units=metric&appid=73f750c25d847cd31222725efab61589";
let apiCall = "https://api.openweathermap.org/data/2.5/weather?q=";

function search(){
    city = document.getElementById("city-name").value;
    let searchURL = apiCall + city + apiKey;
    
    console.log(city);
    console.log(searchURL);

    fetch(searchURL)
        .then(response => response.json())
        .then((data) => {
            nameData = data.name;
            tempData = data.main.temp;
            console.log("Name: ", nameData, "Temp: ", tempData);
            result();
        });
};

function result(){
    let city = document.getElementById("city");
    city.textContent = nameData;

    let temp = document.getElementById("temp");
    temp.textContent = tempData;
};