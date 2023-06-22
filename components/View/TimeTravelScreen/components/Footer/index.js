import {View,Text,StyleSheet,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Footer({handleClick1,handleClick2,handleClick3,handleClick4,cond1=true,cond2=true,cond3=true,cond4=true}){
    oldTimePress = cond1 ? handleClick1 : () => {}
    middleTimePress = cond2 ? handleClick2 : () => {}
    newTimePress = cond3 ? handleClick3 : () => {}
    nowadaysPress = cond4 ? handleClick4 : () => {}
    return(
        <View style={styles.container}>
            <Pressable style={[styles.item]} onPress={oldTimePress}>
                <Text style={styles.itemText}>Հին</Text>
            </Pressable>
            <Pressable style={[styles.item]} onPress={middleTimePress}>
                <Text style={styles.itemText}>Միջին</Text>
            </Pressable>
            <Pressable style={[styles.item]} onPress={newTimePress}>
                <Text style={styles.itemText}>Նոր</Text>
            </Pressable>
            <Pressable style={[styles.item]} onPress={nowadaysPress}>
                <Text style={styles.itemText}>Մեր Օրեր</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'100%',
        backgroundColor:'#F5F5F5',
        padding:5,
        borderTopWidth:1,
        borderTopColor:'#D24C2E',
        borderLeftWidth:1,
        borderLeftColor:'#D24C2E',
        borderRightWidth:1,
        borderRightColor:'#D24C2E',
        borderTopLeftRadius:24,
        borderTopRightRadius:24

        
        
    },
    item:{
        padding:5,
        backgroundColor:'#D24C2E',
        borderRadius:8,
    },
    itemText:{
        color:'#F5F5F5',

    }
})

export default Footer