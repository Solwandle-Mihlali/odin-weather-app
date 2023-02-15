let temp = document.getElementById('temp')
let nameOfCity = document.getElementById('name')
let searchBtn = document.getElementById('button')



searchBtn.addEventListener("click",()=>{

  let cityName = document.getElementById('search').value
  nameOfCity.innerHTML = `${cityName}`
 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ffcad951689e806fe536375d8ab78b41`
  )
   
  //parsing or converting data into json data 
     .then(fetchedData => fetchedData.json())
  
    //creating object to store all weather stats 
    .then(data => {
      const weather = {
        description: data.weather[0].description,
        temp: Math.round(data.main.temp - 273.15),
        humidity: data.main.humidity,
        wind: data.wind.speed
      };
  
      
  
      temp.innerHTML = weather.temp
      
      
    });
 
  
  
})

//making call

  

