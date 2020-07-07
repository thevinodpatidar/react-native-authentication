
//Import React
import React from 'react';

//Import all required component
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = props => {

function logout(){
    AsyncStorage.removeItem('token');
    props.navigation.navigate("Auth")
}
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Home Screen</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Simple Login Registraction Example
      </Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>https://aboutreact</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};
export default HomeScreen;