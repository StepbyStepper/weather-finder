import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5ed3cb04a859a18d188597f16e0de054";

class App extends React.Component {
  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;