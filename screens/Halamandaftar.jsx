import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const Halamandaftar = ({navigation}) => {
  const [quran, setQuran] = useState([]);
  const [isiQuran, setIsiQuran] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://quran-api.santrikoding.com/api/surah',
        );
        setQuran(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  handleClick = () => {
    console.log('tekan ini');
    navigation.navigate('Isiquran');
  };

  const FirstRoute = () => (
    <>
      <ScrollView style={styles.container}>
        {quran.map((surah, index) => (
          <TouchableOpacity onPress={this.handleClick}>
            <View key={index} style={styles.box}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 10,
                  fontSize: 20,
                  marginLeft: 10,
                }}>
                {surah.nomor}.
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  position: 'absolute',
                  marginLeft: 49,
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 16,
                }}>
                {' '}
                {surah.nama}
              </Text>
              <Text
                style={{
                  marginTop: 69,
                  position: 'absolute',
                  marginLeft: 49,
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 16,
                }}>
                {surah.nama_latin}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  position: 'absolute',
                  marginLeft: 259,
                  fontFamily: 'serif',
                  color: 'black',
                  fontSize: 16,
                }}>
                {' '}
                {surah.tempat_turun}
              </Text>
              <Text
                style={{
                  marginTop: 30,
                  position: 'absolute',
                  marginLeft: 259,
                  fontFamily: 'sans-serif',
                  color: 'black',
                  fontSize: 16,
                }}>
                {' '}
                {surah.jumlah_ayat}
              </Text>

              <Image
                style={{
                  width: 40,
                  height: 50,
                  backgroundColor: '#a1a3bc',
                  marginLeft: 330,
                  marginTop: -10,
                }}
                source={require('../assets/i.png')}
              />

              {/* 
         
        
          <Text>Arti: {surah.arti}</Text>
          <Text>Deskripsi: {surah.deskripsi}</Text>
      */}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: 'white'}} />
  );

  const ThreeRoute = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

  const renderScene = SceneMap({
    SURAH: FirstRoute,
    JUZ: SecondRoute,
    PENANDA: ThreeRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'SURAH', title: 'SURAH'},
    {key: 'JUZ', title: 'JUZ'},
    {key: 'PENANDA', title: 'PENANDA'},
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10, // padding sesuaikan dengan kebutuhan
    },
    box: {
      width: '100%', // atau lebar yang sesuai
      height: 100, // atau tinggi yang sesuai
      backgroundColor: 'lightgrey', // warna latar belakang sesuaikan dengan kebutuhan
      marginBottom: 10, // jarak antar box
    },
  });

  return (
    <>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </>
  );
};

export default Halamandaftar;
