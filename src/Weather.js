import React, { Component } from 'react';
import axios from 'axios';
import App from './App';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      weather: {}
    };
  }

  componentDidMount() {
    const name = this.state.name;
    const apiKey = '<your API key>';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`
    axios.get(url)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          const weather = res.data;
          this.setState({ weather });
        }
      });
  }

  handleSearch = () => {
    const name = this.state.name;
    const apiKey ='<your API key>';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`
    axios.get(url)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          const weather = res.data;
          this.setState({ weather });
        }
      });
  }


  
  handleNewSearch = () => {
    window.location.reload();
  }

  render() {
    const { name, weather } = this.state;

    if (weather.main) {
      return (
        <>
          <h1>{name}</h1>
          <div>{weather.main.temp} °C</div>
          <div>Feels Like: {weather.main.feels_like} °C</div>
          <button onClick={this.handleNewSearch}>New Search</button>

        </>
      );
    }

    return (
      <div>
        <input type="text" value={name}/>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Weather;