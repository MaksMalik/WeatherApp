import './Card.scss';

function Card() {
  return (
    <div className="card">
      <form className='form'>
        <input placeholder='Enter city...' spellCheck="false"></input>
        <button><i className="fa-solid fa-magnifying-glass fa-beat"></i></button>
      </form>


      <div className='weatherData'>
        <div className='weatherData_top'>
          <img src='' className='weatherData_top_image' alt='weather'></img>
          <div className='weatherData_top_temperatur'>24°C</div>
          <div className='weatherData_top_city'>Warsaw</div>
        </div>

        <div className='weatherData_bottom'>
          <div className='weatherData_bottom_left'>
            <i className="fa-solid fa-water weatherData_bottom_left_image"></i>
            <div className='weatherData_bottom_left_text'>50%</div>
            <div className='weatherData_bottom_left_humidity'>Humidity</div>

          </div>

          <div className='weatherData_bottom_right'>
            <i className="fa-solid fa-wind weatherData_bottom_right_image"></i>
            <div className='weatherData_bottom_right_text'>8 km/h</div>
            <div className='weatherData_bottom_right_wind'>Wind speed</div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default Card;
