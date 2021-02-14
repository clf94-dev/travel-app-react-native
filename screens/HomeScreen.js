import React, {useState} from 'react';

import {View, Text,Image, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {CountriesDestination} from './CountriesDestination'

export default function HomeScreen(){
    const [country, setCountry] = useState(0);
    const countrySel = (countryInd) =>{
        return( 
            console.log(countryInd),
            setCountry(countryInd)

            )
      
   }
    const showCountries =({item}) =>{
        
        return(
            
            <TouchableOpacity key={item.index} style={styles.CountryButton} onPress={() => countrySel(item.index)}><Text style={styles.button}>{item.country}</Text></TouchableOpacity>
        
            )
    }

    return(
        
        <View style={{ flex: 1, alignItems: 'start', justifyContent: 'center', paddingTop: 70 , paddingLeft:20, backgroundColor: 'lightgray'}}>
            
            <FlatList  style={{ position:'relative', top: 50, maxHeight:120}} horizontal showsHorizontalScrollIndicator='false' data={CountriesDestination} keyExtractor={item => item.index} renderItem={showCountries}/>       
            <FlatList  horizontal data={CountriesDestination[country].destinations} keyExtractor={item => item.index} renderItem={({item}) => (
                 <View style={styles.cardPlaces}>
                            <Image style={{width:'100%', borderRadius:10}} source={item.src} />

                            <View style={styles.text}>
                             <Text>{item.name}</Text>
                            <Text>{item.info}</Text>
                            </View>
                        
                     
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
 
    width:300,
    backgroundColor: 'white',
    borderRadius:10
},
text: {
    padding: 20,
    height: 120
}
})

