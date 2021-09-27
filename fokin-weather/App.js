import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'a76cd9cfef2f10a1c49aadb8ac7e1390';
// https://api.openweathermap.org/data/2.5/weather?lat=37.785834&lon=-122.406417&appid=a76cd9cfef2f10a1c49aadb8ac7e1390
export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({isLoading:false, temp: data.main.temp})
      console.log(data);
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords : { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      // const {coords} = await Location.getCurrentPositionAsync();
      // Send to API and get weather

      // latitude": 37.785834
      // "longitude": -122.406417
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
      console.log(coords);
    } catch (error) {
      Alert.alert("Can't find you.","So sad");
    }
    
    
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)}/>;
  }
}

