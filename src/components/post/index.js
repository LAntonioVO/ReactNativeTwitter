import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const post = {
  user: {
    id: 123,
    avatar:
      'https://pickaface.net/gallery/avatar/unr_example_161122_0416_qss004g.png',
    name: 'Joselito juan xd',
    username: '@josejuanxd',
    verified: true,
  },
  text: 'MY FIRST APP USING REACT NATIVE!! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta totam doloribus ipsa vitae eligendi saepe ducimus obcaecati porro libero! Repellendus et quod sunt maxime odit earum esse tempora odio officia?',
  image:
    'https://blog.digital-pineapple.com.mx/wp-content/uploads/2021/01/0_oZLL-N4dGNlBe4Oh.png',
  commentsNumber: 12,
  sharesNumber: 34,
  likesNumer: 134,
  likedByMe: true,
};

const Post = () => {
  return (
    <View style={{backgroundColor: '#fff', margin: 10, borderRadius: 10}}>
      <View
        style={{
          display: 'flex',
          padding: 15,
          paddingBottom: 0,
          flexDirection: 'row',
        }}>
        <Image
          source={{
            uri: post.user.avatar,
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 100,
          }}
        />
        <View
          style={{
            paddingStart: 10,
            display: 'flex',
            justifyContent: 'center',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                fontWeight: 'bold',
              }}>
              {post.user.name}
            </Text>

            {post.user.verified && (
              <MaterialIcons
                name="verified"
                style={{marginLeft: 5}}
                color={'blue'}
                size={21}
              />
            )}
          </View>
          <Text style={{fontSize: 10, color: 'gray', fontWeight: 'bold'}}>
            {post.user.username}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={{padding: 15}}>
        <Text
          style={{fontSize: 12, lineHeight: 15, color: 'black', padding: 5}}>
          {post.text}
        </Text>
        <Image
          source={{uri: post.image}}
          style={{
            width: '100%',
            height: 300,
            borderRadius: 5,
            marginTop: 15,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Icon.Button
          name={post.likedByMe ? 'favorite' : 'favorite-border'}
          backgroundColor={'white'}
          color={post.likedByMe ? 'red' : 'gray'}>
          <Text style={{fontSize: 15, color: 'gray'}}>{post.likesNumer}</Text>
        </Icon.Button>

        <Icon.Button name="comment" backgroundColor={'white'} color="gray">
          <Text style={{fontSize: 15, color: 'gray'}}>
            {post.commentsNumber}
          </Text>
        </Icon.Button>

        <Icon.Button name="share" backgroundColor={'white'} color="gray">
          <Text style={{fontSize: 15, color: 'gray'}}>{post.sharesNumber}</Text>
        </Icon.Button>
      </View>
    </View>
  );
};

export default Post;
