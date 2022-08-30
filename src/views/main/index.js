import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainContent = () => {
  return (
    <View style={{display: 'flex', justifyContent: 'center'}}>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{fontFamily: 'Arial', fontSize: 15}}>
          Login with Facebook
        </Text>
      </Icon.Button>
    </View>
  );
};

export default MainContent;
