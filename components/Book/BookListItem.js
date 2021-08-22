import React from  'react';
import {View, Text} from 'react-native';

const BookListItem = ({Book})=>{
 return (
     <View>
         <Text>{Book.title}</Text>
     </View>
 )
};
export default BookListItem;