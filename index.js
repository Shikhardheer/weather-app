const API_KEY="92979dafa4510e6ea2db2c23530c9400";
async function showweather(){
    // let latitude=15.3333;
    // let longitude=74.0833;
    let city="gorakhpur";
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data= await response.json();
    console.log("weather data->" , data);
    let newPara=document.createElementby('p');
    newPara.innerText=`${data.main.temp}`;
    document.querySelector("body").appendChild(newPara);


}
showweather();