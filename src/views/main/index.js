import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../../components/post';
import firebase from '../../services/firebase';
import IconBtn from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {postFormInitialValues, postInitialConstants} from '../../services/post';
import {userInfo} from '../../services/user';
import Firebase from '../../services/firebase';

const MainContent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const createPostHeader = () => {
    const [postForm, setPostForm] = useState(postFormInitialValues);

    const createPost = () => {
      const newPost = {
        ...postForm,
        ...postInitialConstants,
        user: userInfo,
      };
      Firebase.createPost(newPost);
      setPostForm(postInitialConstants);
    };

    return (
      <View
        style={{
          backgroundColor: '#fff',
          margin: 10,
          padding: 8,
          marginBottom: 0,
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            width: 250,
            borderColor: '#d3d3d3',
            borderRadius: 5,
            borderWidth: 1,
            color: 'black',
          }}
          onChangeText={e => {
            setPostForm({...postForm, text: e});
          }}
          value={postForm.text}
          placeholder="What are you thinking?"
          placeholderTextColor={'gray'}></TextInput>
        <IconBtn.Button
          onPress={createPost}
          name={'send'}
          size={40}
          backgroundColor={'white'}
          color={'blue'}></IconBtn.Button>
      </View>
    );
  };

  const getPosts = async () => {
    const retrievedPosts = await firebase.getPosts();
    setPosts(retrievedPosts);
  };

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Post post={item} />}
        onRefresh={getPosts}
        refreshing={loading}
        ListHeaderComponent={createPostHeader}
      />
    </View>
  );
};

export default MainContent;
