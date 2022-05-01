import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  BackHandler,
  ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Linking } from 'react-native';

//API request
import axios from 'axios';

//ionicons 모듈사용
import Ionicons from '@expo/vector-icons/Ionicons';

//icons
import { FontAwesome } from '@expo/vector-icons';

const mail = "010-1234-5678"

const AIP_KEY = "37b635865f1b47e6a9d89e1ce7cc4ff9";
const lat = 38;
const lon = 128;

(async (lat, lon) => {
  try {
    const data = await axios.get(
      `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${API_KEY}&Type=json&pIndex=1&pSize=&`,
    )
    console.log('useEffect data update Completed')
       if (mounted) {
          let _main = data.data.AbdmAnimalProtect[1].row;

          setDog(_main);
          setIsLoading(false);
        }

      } catch (error) {
        console.log(error)
        Alert.alert("강아지 정보를 읽어올 수 없습니다.")
        setError(true);
        setIsLoading(false);
      }
    })(lat, lon)

const Screen = (props) => {
  const navigation = useNavigation();

  const item = props.route.params.item
  console.log(props.route.params.item)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        {/* 강아지 이미지 */}
        <Image
          style={{
            width: '100%',
            height: 350,
          }}
          source={{ uri: props.route.params.item.IMAGE_COURS }}
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
          {/*<Ionicons
            style={{ marginLeft: 20 }}
            name="ios-person"
            color={'#000000'}
            size={45}
        />*/}
        <FontAwesome name="user-circle" size={30} color="black" style={{marginLeft:20}}/>
          {/* axios로 받아온 제목을 Text 컴포넌트 사이에 넣는다. */}
          <Text style={styles.title} >{item.SHTER_NM }</Text>
        </View>
        <View style={{ height: 2, backgroundColor: '#000000' }} />
          {/* axios로 받아온 내용을 Text 컴포넌트 사이에 넣는다. */}
          <ScrollView>
        <Text style={styles.content}>
                발견장소 : {item.DISCVRY_PLC_INFO} {"\n"} 
                상태 : {item.STATE_NM} {"\n"} 
                품종 : {item.SPECIES_NM} {"\n"} 
                색상 : {item.COLOR_NM} {"\n"}
                나이 : {item.AGE_INFO} {"\n"}
                체중 : {item.BDWGH_INFO} {"\n"}
                성별 : {item.SEX_NM} {"\n"}
                특징 : {item.SFETR_INFO} {"\n"}
                {"\n"}
                ※ 공고 시작일자 : {item.PBLANC_BEGIN_DE} {"\n"}
                ※ 공고 종료일자 : {item.PBLANC_END_DE} {"\n"}
                {"\n"}
                ※ 보호소 도로명주소 : {"\n"}{item.PROTECT_PLC} </Text>
        <View style={{ height: 2, backgroundColor: '#000000' }} />
        </ScrollView>
        <View style={{ height: 2, backgroundColor: '#000000' }} />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {Linking.openURL(`sms:${item.SHTER_TELNO}`)}}>
          <Text style={styles.button}>사용자에게 연락하기</Text>
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