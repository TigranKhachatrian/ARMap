import {View,Text,StyleSheet,Animated} from 'react-native'
import YaMap from 'react-native-yamap';
import Footer from '../../components/Footer';
import { useRef } from 'react';


function MiddleTimesScreen({navigation}) {
   
   const handleClicks = [
    () => navigation.navigate('oldTimes'),
    () => navigation.navigate('middleTimes'),
    () => navigation.navigate('newTimes'),
    () => navigation.navigate('nowadays'),

   ]
    return (
    <Animated.View style={styles.container}>  
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
    <Footer handleClick1={handleClicks[0]} handleClick2={handleClicks[1]} handleClick3={handleClicks[2]} handleClick4={handleClicks[3]} cond2={false}/>
    </Animated.View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,

    }
})

export default MiddleTimesScreen;