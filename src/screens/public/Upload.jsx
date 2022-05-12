import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import Ionicons from '@expo/vector-icons/Ionicons';
//ionicons 모듈사용

const Screen = () => {
  //setImageList를 이용해 이미지 추가.
  const [imageList, setImageList] = useState([
    {
      uri: 'setImageList',
    },
    
  ]);

  const pickImage = async () => {
    console.log('이미지 선택');
    let imageData = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })
    getImageUrl(imageData);
  };
  const getImageUrl = async (imageData) => {
    setImageUri(imageData.uri);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={{height: 2, backgroundColor: '#CCCCCC'}} />
        <View style={styles.imageList}>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              style={styles.buttonCamera}
              onPress={() => pickImage()
                //퍼미션 체크 & 갤러리 호출 코드 작성
              }>
              <Ionicons name="camera" color={'#000000'} size={30} />
              <Text>{`${imageList.length}/10`}</Text>
            </TouchableOpacity>
            {imageList.map((item, index) => {
              return (
                <Image
                  key={index}
                  style={styles.image}
                  source={{uri: item.uri}}
                  resizeMode={'cover'}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={{height: 2, backgroundColor: '#CCCCCC'}} />
        <TextInput style={styles.price} placeholder={'책임비'} />
        <View style={{height: 2, backgroundColor: '#CCCCCC'}} />
        <TextInput
          style={styles.content}
          placeholder={'게시글 내용을 작성해 주세요.'}
          multiline={true}
          textAlignVertical={'top'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 20,
    color: '#F3A7FF',
  },

  title: {
    marginLeft: 37,
    fontSize: 28,
    color: '#000000',
  },

  imageList: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCamera: {
    marginLeft: 20,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
  },

  image: {
    marginLeft: 20,
    width: 80,
    height: 80,
    borderRadius: 4,
    backgroundColor: '#EEEEEE',
  },

  price: {
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20,
    color: '#000000',
  },
  content: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'top',
  },
});