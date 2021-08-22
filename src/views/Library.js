
import React from 'react';
import { View, Text, TouchableHighlight} from 'react-native';

const Library = ({navigation}) =>(
    <View>
        <Text>
            Hola Soy la vista Library
        </Text>
        <TouchableHighlight onPress={()=>{navigation.navigate('Home')}}>
            <Text>Ir a Home</Text>
        </TouchableHighlight>
    </View>
)
export default Library;