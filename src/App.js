import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5ed3cb04a859a18d188597f16e0de054";

class App extends React.Component {

  gettingWeather = async (e) => {
    e.preventDefault();
    const api_url = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;