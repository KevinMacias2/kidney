import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Main = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Hola Mundo!</Text>

        <TouchableOpacity
        onPress={() => navigation.navigate('contactsScreen')}
        style={styles.signIn}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          colors={['#C3AED6' , '#B088F9']}
          style={styles.gradient}
          >
          <Text >
            Add Emergency Contacts
          </Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
    );

    
};

export default Main;