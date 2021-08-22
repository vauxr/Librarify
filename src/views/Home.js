import React from 'react';
import { FlatList,View, Text, TouchableHighlight } from 'react-native';

const BOOK_LIST = [
    {
        id: 1,
        title: 'Javascript para principiantes'
    },
    { 
        id: 1,
        title: 'PHP para dummies'

    }
];
const Home = ({navigation}) =>(
    <View>
        <Text>
            Hola Soy la vista Home
        </Text>
        <TouchableHighlight onPress={()=>{navigation.navigate('Library')}}>
            <Text>Ir a Library</Text>
        </TouchableHighlight>
    </View>
)
export default Home;