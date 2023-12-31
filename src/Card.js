import { useState } from 'react';
import './Card.scss';

function Card() {

  const [valueEntered, setValueEntered] = useState("");
  const [weather, setWeather] = useState("");
  const [responseText, setResponseText] = useState("")
  const [linkImage, setLinkImage] = useState("")

  const apiKey = "2e657ba56539e787289424207593c5f9"
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${valueEntered}`

  const getWeather = async () => {
    try {
      const responseWeather = await fetch(apiUrl)
      const dataWeather = await responseWeather.json()
      setWeather(dataWeather)
      setResponseText(dataWeather.message)
      setLinkImage(`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`)
      const linkElement = document.querySelector('link[rel=icon]');
      linkElement.href = `https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`;
      console.log(linkElement?.href)
      const titleElement = document.querySelector('title');
      titleElement.innerText = `Weather - ${dataWeather?.name} - ${dataWeather?.main?.temp + "°C"}`
    }
    catch (e) {
      console.log(e)
    }

  }

  const checkWeather = async e => {
    e.preventDefault()
    getWeather()
    setValueEntered("")
  }



  return (
    <div className="card">
      <form className='form' onSubmit={checkWeather}>
        <input placeholder='Enter city...' value={valueEntered || ""} onChange={(e) => setValueEntered(e.target.value)}></input>
        <button><i className="fa-solid fa-magnifying-glass fa-beat"></i></button>
      </form>


      {weather && weather?.cod === 200 ?
        <div className='weatherData'>
          <div className='weatherData_top'>
            <img src={linkImage} className='weatherData_top_image' alt='weather'></img>
            <div className='weatherData_top_temperatur'>{weather?.main?.temp + "°C"}</div>
            <div className='weatherData_top_weather'>{weather?.weather[0]?.main}</div>
            <div className='weatherData_top_city'>{weather?.name}</div>
          </div>

          <div className='weatherData_bottom'>
            <div className='weatherData_bottom_left'>
              <i className="fa-solid fa-water weatherData_bottom_left_image"></i>
              <div className='weatherData_bottom_left_text'>{weather?.main?.humidity + "%"}</div>
              <div className='weatherData_bottom_left_humidity'>Humidity</div>

            </div>

            <div className='weatherData_bottom_right'>
              <i className="fa-solid fa-wind weatherData_bottom_right_image"></i>
              <div className='weatherData_bottom_right_text'>{weather?.wind?.speed + "km/h"}</div>
              <div className='weatherData_bottom_right_wind'>Wind speed</div>
            </div>
          </div>
        </div>
        :
        <div className='noCard'>{responseText}</div>
      }




    </div>
  );
}

export default Card;
