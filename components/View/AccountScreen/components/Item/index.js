import {View, Text, StyleSheet,ImageBackground}  from 'react-native';


function Item({url,title}){
    return(
        <View style={styles.container}>
        <ImageBackground source={{uri:url}} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>{title}</Text>
        </ImageBackground>
      </View>  
    )
};
const styles = StyleSheet.create({
    container:{
        width:132,
        height:186,
        borderWidth:1,
        borderColor:'black',
        borderRadius:16,
        marginLeft:12

    },
    image:{
        alignItems:'flex-end',
    },
    text:{
    fontSize:16,
    color:'#F5F5F5',
    color:'red'
    }
})
export default Item;