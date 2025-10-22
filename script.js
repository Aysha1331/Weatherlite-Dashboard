const apiKey = 'e6fdc79540af990856b1e025800eefea'; // Free key from https://openweathermap.org/
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

const weatherCard = document.getElementById('weather-card');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

searchBtn.onclick = async () => {
  const city = cityInput.value.trim();
  if (!city) return alert('Enter a city name!');

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    if(data.cod !== 200) throw new Error(data.message);

    cityName.textContent = data.name;
    description.textContent = data.weather[0].description;
    temp.textContent = data.main.temp;
    humidity.textContent = data.main.humidity;
    wind.textContent = data.wind.speed;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherCard.classList.remove('hidden');
  } catch(err) {
    alert(`Error: ${err.message}`);
    weatherCard.classList.add('hidden');
  }
};
