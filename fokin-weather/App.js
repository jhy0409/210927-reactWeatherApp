import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = 'a76cd9cfef2f10a1c49aadb8ac7e1390';
// https://api.openweathermap.org/data/2.5/weather?lat=37.785834&lon=-122.406417&appid=a76cd9cfef2f10a1c49aadb8ac7e1390
export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
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
      this.setState({isLoading: true});
      console.log(coords);
    } catch (error) {
      Alert.alert("Can't find you.","So sad");
    }
    
    
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state
    return isLoading ? <Loading /> : null;
  }
}

