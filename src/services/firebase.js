import database from '@react-native-firebase/database';

export default class Firebase {
  static getPosts() {
    console.log('GET');
    return database()
      .ref('posts')
      .once('value')
      .then(snapshot => {
        const posts = [];
        snapshot.forEach(childSnapshot => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        return posts;
      });
  }

  static createPost(newPost) {
    return database()
      .ref('posts')
      .push(newPost)
      .then(() => {
        console.log('Post Created');
        return content;
      });
  }
}
