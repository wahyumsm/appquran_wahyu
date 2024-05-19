import {brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import {faReadme} from '@fortawesome/free-brands-svg-icons';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {
  // AMBIL DATA QURAN YAITU PERJUS

  handleClick = () => {
    console.log('tekan ini');
    navigation.navigate('Halamandaftar');
  };

  return (
    <>
      <ScrollView>
        <FontAwesomeIcon
          style={{marginTop: 10, marginLeft: 15}}
          icon={faBars}
          size={20}
        />

        <Text
          style={{
            color: 'purple',
            fontSize: 25,
            position: 'absolute',
            marginLeft: 70,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          Quran App
        </Text>
        <FontAwesomeIcon
          style={{marginTop: 10, marginLeft: 370, position: 'absolute'}}
          icon={faSearch}
          size={25}
        />
        <Text
          style={{marginLeft: 29, fontSize: 15, marginTop: 40, color: 'black'}}>
          Assalammualaikum
        </Text>
        <Text
          style={{
            marginLeft: 25,
            fontSize: 25,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          WAHYU HIDAYAT
        </Text>

        <View
          style={{
            backgroundColor: '#800000',
            width: 340,
            marginLeft: 12,
            height: 140,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <FontAwesomeIcon
            style={{marginLeft: 10}}
            icon={faReadme}
            size={30}
            color="white"
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              position: 'absolute',
              marginLeft: 50,
            }}>
            Last Read
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              position: 'absolute',
              marginLeft: 10,
              marginTop: 69,
              fontWeight: 'bold',
            }}>
            ALFATIHAH
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              position: 'absolute',
              marginLeft: 10,
              marginTop: 99,
              fontWeight: '400',
            }}>
            Ayat No 1
          </Text>
          <Image
            style={{width: 130, height: 89, marginLeft: 230, marginTop: 10}}
            source={require('../assets/man.png')}
          />
        </View>
        <Text
          style={{
            color: 'green',
            marginLeft: 25,
            fontSize: 25,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Popular
        </Text>

        {/* INI KOTAK KOTAK  PILIHAN POPULER */}
        <ScrollView>
          <TouchableOpacity onPress={this.handleClick}>
            <View
              style={{
                backgroundColor: '#c1ff4d',
                width: 170,
                marginLeft: 22,
                height: 140,
                borderRadius: 10,
                marginTop: 20,
              }}>
              <Text
                style={{
                  color: 'green',
                  fontSize: 22,
                  position: 'absolute',
                  marginLeft: 19,

                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Quran
              </Text>
              <Image
                style={{width: 60, height: 69, marginLeft: 100, marginTop: 40}}
                source={require('../assets/koran.png')}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'purple',
              width: 150,
              marginLeft: 32,
              height: 140,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                position: 'absolute',
                marginLeft: 19,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Test
            </Text>
            <Image
              style={{width: 60, height: 69, marginLeft: 80, marginTop: 40}}
              source={require('../assets/test.png')}
            />
          </View>
          <View
            style={{
              backgroundColor: '#daa520',

              borderRadius: 10,
              marginTop: -140,

              width: 150,
              marginLeft: 199,
              height: 130,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,

                marginLeft: 19,

                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Recite
            </Text>
            <Image
              style={{width: 60, height: 69, marginLeft: 80, marginTop: 10}}
              source={require('../assets/tasbih.png')}
            />
          </View>

          <View
            style={{
              backgroundColor: '#5f9ea0',
              width: 150,
              marginLeft: 200,
              height: 130,
              borderRadius: 10,
              marginTop: 20,
              position: 'absolute',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,

                marginLeft: 19,

                fontWeight: 'bold',
                marginTop: 10,
              }}>
              listening
            </Text>
            <Image
              style={{width: 60, height: 69, marginLeft: 80, marginTop: 6}}
              source={require('../assets/headset.png')}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default Home;
