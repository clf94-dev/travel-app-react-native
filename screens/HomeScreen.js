import React, {useState} from 'react';

import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {CountriesDestination} from './CountriesDestination'

export default function HomeScreen(){
    const [country, setCountry] = useState(0);
   
    const showCountries =({item}) =>{
        return(
            <TouchableOpacity onPress={setCountry(item.index)}><Text>{item.country}</Text></TouchableOpacity>
        )
    }
    const showPlaces =({item}) =>{
        return(
           <View>
               <Text>{item.destinations.name}</Text>
               <Text>{item.destinations.info}</Text>
           </View>
        )
    }
    return(
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 70 }}>
            <Text>Home screen</Text>
            <FlatList  style={{ position:'relative', top: 50 }} horizontal data={CountriesDestination} keyExtractor={item => item.index} renderItem={showCountries}/>       
            <FlatList  style={{ position:'relative', top: 50 }} horizontal data={CountriesDestination[country]} keyExtractor={item => item.index} renderItem={showPlaces}/>       
         
         </View>
        
    )
}