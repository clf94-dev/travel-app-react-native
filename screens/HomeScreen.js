import React, {useState} from 'react';

import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {CountriesDestination} from './CountriesDestination'

export default function HomeScreen(){
    const [country, setCountry] = useState(0);
   
    const showCountries =({item}) =>{
        return(
            <TouchableOpacity  style={styles.CountryButton} onPress={setCountry(item.index)}><Text style={styles.button}>{item.country}</Text></TouchableOpacity>
        )
    }

    return(
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 70 , paddingLeft:20, backgroundColor: 'lightgray'}}>
            <Text>Home screen</Text>
            <FlatList  style={{ position:'relative', top: 50 }} horizontal showsHorizontalScrollIndicator='false' data={CountriesDestination} keyExtractor={item => item.index} renderItem={showCountries}/>       
            <FlatList  horizontal data={CountriesDestination[country].destinations} keyExtractor={item => item.index} renderItem={({item}) => (
                 <View style={styles.cardPlaces}>
  
                             <Text>{item.name}</Text>
                            <Text>{item.info}</Text>
                        
                     
                </View>
            )}/>       
         
         </View>
        
    )
}

const styles = StyleSheet.create({
CountryButton: {
    padding: 10,
    
},
button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray'
},
cardPlaces: {
    alignSelf: 'flex-start',
    margin: 15,
    padding: 20,
    width:300,
    backgroundColor: 'white',
    borderRadius:10
}
})

