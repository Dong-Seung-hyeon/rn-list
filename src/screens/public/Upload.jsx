import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { useNavigation } from '@react-navigation/native';

import { Linking } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Route } from 'react-router-dom';
//ionicons 모듈사용

const pickImage = async () => {
  console.log('이미지 선택 ');
  let imageData = await ImagePicker.launchImageLibraryAsync({
    mediType: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 4],
    quality: 1,
  });

  getImageUrl(imageData);
};
const getImageUrl = async (imageData) => {
  setImageUrl(imageData.uri);
};

const Screen = () => {

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        {/* 강아지 이미지 */}
        <TouchableOpacity style={styles.buttonContainer} onPress={() => alert('Photo')}>
          <Text style={styles.button}>사진올리기</Text>
        </TouchableOpacity>
        <View style={{ height: 2, backgroundColor: '#a8a5a5' }} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="책임비"
          />
        </View>
        <View style={{ height: 2, backgroundColor: '#a8a5a5' }} />
          {/* axios로 받아온 내용을 Text 컴포넌트 사이에 넣는다. */}
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="게시글 내용을 작성해 주세요"
          />
        <View style={{ height: 2, backgroundColor: '#a8a5a5' }} />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    marginLeft: 10,
    fontSize: 20,
    color: '#000000',
  },
  content: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 15,
    color: '#000000',
  },
  buttonContainer: {
    padding: 5,
    marginVertical: 10,
    marginLeft: 150,
    backgroundColor: '#F9EBFF',
    alignSelf: 'center',
    borderRadius: 5,
  },
  button: {
    fontSize: 20,
    color: '#000000',
  },
});