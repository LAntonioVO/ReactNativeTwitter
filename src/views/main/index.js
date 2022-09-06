import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../../components/post';

const MainContent = () => {
  return (
    <View>
      <ScrollView>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
};

export default MainContent;
