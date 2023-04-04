export default function WeatherDescription({ data }) {
  return (
    <ul className="weather-description-block">
      <li>
        Temperature: <b>{data.temperature} °C.</b>
      </li>
      <li>
        Description: <b>{data.description}</b>
      </li>
      <li>
        Humidity: <b>{data.humidity}%</b>
      </li>
      <li>
        Wind: <b>{data.wind} km/h</b>
      </li>
      <li>
        <img src={data.icon} alt={data.description} />
      </li>
    </ul>
  );
}
