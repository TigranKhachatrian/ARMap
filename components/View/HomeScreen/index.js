import {View,Text} from 'react-native'
import YaMap from 'react-native-yamap';


function HomeScreen() {
    return (
      <YaMap
      userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
      initialRegion={{
        lat: 50,
        lon: 50,
        zoom: 10,
        azimuth: 80,
        tilt: 100
      }}
      style={{ flex: 1 }}
    />
    );
  }

export default HomeScreen;