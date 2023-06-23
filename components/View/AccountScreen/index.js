import {View,Text, StyleSheet,FlatList} from 'react-native'
import HistoryIcon from './assets/svg/hisorySvg/index.js';
import Item from './components/Item/index.js';
  
const DATA =[
  {
    id:1,
    url:'',
    name:'Aragats'
  }
]

function AccountScreen() {
    const DATA = [
      {
        id:0,
        url:`https://welcomearmeniatour.com/uploads/posts/2017-11/1510225859_garni6.jpg`,
        name:'Aragats'
      },
      {
        id:1,
        url:'https://welcomearmeniatour.com/uploads/posts/2017-11/1510225859_garni6.jpg',
        name:'Garni'
      }, {
        id:2,
        url:'https://welcomearmeniatour.com/uploads/posts/2017-11/1510225859_garni6.jpg',
        name:'Aragats'
      }, {
        id:3,
        url:'https://welcomearmeniatour.com/uploads/posts/2017-11/1510225859_garni6.jpg',
        name:'Aragats'
      },
    ]
  return (
      <View style={styles.cont}>
      <HistoryIcon style={styles.historyIcon}/>
         <FlatList
         data={DATA}
         renderItem={({item}) => <Item title={item.name} url={item.uri} />}
         keyExtractor={item => item.id}
         horizontal={true}
       />
      </View>

    );
  }

  const styles = StyleSheet.create({
    cont:{
      marginTop:10,
      marginLeft:10,
    },
    historyIcon:{
      marginBottom:10
    }
  });

export default AccountScreen;