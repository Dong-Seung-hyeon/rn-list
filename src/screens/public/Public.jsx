import React, { useEffect, useState } from "react";
import { Text, FlatList, Alert, Pressable, Touchable, TouchableOpacity} from "react-native";
import styled from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

//components
//import Header from '../../components/Header'

//API request
import axios from "axios";

//data
//import { locationData } from "../Public/Data"

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dog, setDog] = useState([]);

  const navigation = useNavigation();

  const API_KEY = "37b635865f1b47e6a9d89e1ce7cc4ff9";
  const lat = 38;
  const lon = 128;

  useEffect(() => {
    let mounted = true;

    // IIEF 즉 실행함수 (async~return 전까지)()
    (async (lat, lon) => {
      try {
        const data = await axios.get(
            `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${API_KEY}&Type=json&pIndex=1&pSize=&`,
            )
        // console.log('data', data.data.AbdmAnimalProtect[1].row)
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

    return () => {
      mounted = false
    }

  }, []);

  const handlePressItem = ()=>{
    console.log('aaaaaa')
    navigation.navigate('Detail')

  }
  return (
    <Wrapper>
      {/*<Header title='강아지' />*/}
      {isLoading || error
        ? <Text> Waiting.. </Text>
        : <Text> </Text>
      }
      <FlatList
        data={dog}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={()=>handlePressItem()}> 
            <ListItem>
              {/*<TitleView>
                <Title>{item.PROTECT_PLC}</Title>
              </TitleView>*/}
              <Picture source={{uri: item.IMAGE_COURS }}/>
              <Contents> 
                품종 : {item.SPECIES_NM} {"\n"} 
                성별 : {item.SEX_NM} {"\n"} 
                나이 : {item.AGE_INFO} {"\n"} 
                체중 : {item.BDWGH_INFO} {"\n"} 
                보호소명 : {item.SHTER_NM} 
              </Contents>
            </ListItem>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <EmptyView>
            <Text> 강아지 데이터가 없습니다.</Text>
          </EmptyView>
        )}
      />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
`;

const List = styled.FlatList`
  margin: 10px;
  margin-top: 10px;
`;
const ListItem = styled.View`
flex-direction: row;
  background-color: white;
  border-top-color: black;
  border-top-width: 1;
  margin-bottom: 10px;
  height: 100px;
`

const Picture = styled.Image`
  width: 100px;
  height: 100px;
  margin: 5px;
`

const TitleView = styled.View`
flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #00B0FF;
`
/*const Title = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
  `*/
const Contents = styled.Text`
  flex: 1;
  font-size: 14px;
`

const EmptyView = styled.View`
  align-items: center;
`




/* const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.TitleView} > {item.TitleView}</Text>
    </TouchableOpacity>
  );

  const App = () => {
    const renderItem = ({item}) => {
      const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

      return (
        <Item 
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
        />
      )
    }
  }; */