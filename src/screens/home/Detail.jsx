import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Linking } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
//ionicons 모듈사용

const phoneNumber = "010-1234-5678"
//const phoneNumber = {uri: item.IMAGE_COURS }

const Screen = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        {/* 강아지 이미지 */}
        <Image
          style={{
            width: '100%',
            height: 350,
          }}
          source={require('./cute.jpg')}
          //axios로 받아온 이미지를 source에 넣는다.
        />
        <TouchableOpacity
          style={{ position: 'absolute', left: 20, top: 20 }}
          onPress={() => {navigation.goBack();}
            //이 부분에 터치액션 정의
          }>
          <Ionicons name="home" color={'#000000'} size={30} />
        </TouchableOpacity>
        <View style={{ height: 2, backgroundColor: '#000000' }} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Ionicons
            style={{ marginLeft: 20 }}
            name="ios-person"
            color={'#000000'}
            size={45}
          />
          {/* axios로 받아온 제목을 Text 컴포넌트 사이에 넣는다. */}
          <Text style={styles.title}>{'TITLE'}</Text>
        </View>
        <View style={{ height: 2, backgroundColor: '#000000' }} />
          {/* axios로 받아온 내용을 Text 컴포넌트 사이에 넣는다. */}
        <Text style={styles.content}>{'CONTENT~~~~~~~~~~~~~~~'}</Text>
        <View style={{ height: 2, backgroundColor: '#000000' }} />
      
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {Linking.openURL(`tel:${phoneNumber}`)}}>
          <Text style={styles.button}>{'기관으로 연락하기'}</Text>
        </TouchableOpacity>
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
    fontSize: 28,
    color: '#000000',
  },
  content: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20,
    color: '#000000',
  },
  buttonContainer: {
    padding: 5,
    marginVertical: 10,
    backgroundColor: '#F9EBFF',
    alignSelf: 'center',
    borderRadius: 5,
  },
  button: {
    fontSize: 20,
    color: '#000000',
  },
});