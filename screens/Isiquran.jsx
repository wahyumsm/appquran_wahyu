import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

const Isiquran = () => {
  const [quran, setQuran] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://quran-api.santrikoding.com/api/surah/1',
        );
        setQuran(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        {quran ? (
          <>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 36,
                textAlign: 'center',
                color: 'black',
              }}>
              {quran.nomor}. {quran.nama}
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                textAlign: 'center',
                color: 'black',
              }}>
              {quran.tempat_turun}: {quran.jumlah_ayat}:ayat
            </Text>
            {/* Tampilkan ayat-ayat */}
            {quran.ayat.map(ayat => (
              <View key={ayat.id} style={styles.box}>
                <Text style={{fontWeight: 800, fontSize: 30, color: 'black'}}>
                  {ayat.ar}
                </Text>

                <Text style={styles.nomorAyat}>{ayat.nomor}</Text>
                <Text style={styles.idn}>{ayat.idn}</Text>
              </View>
            ))}
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%', // Lebar sesuai dengan parent
    backgroundColor: '#fefeed', // Warna latar belakang kuning
    marginBottom: 10, // Jarak antar box
    padding: 10, // Padding di dalam box
    textAlign: 'center',
    color: 'black',
    borderRadius: 5, // Menggunakan border-radius untuk membuat sudut kotak sedikit melengkung
  },
  container: {
    backgroundColor: '#fefeed', // Warna latar belakang halaman
  },
  nomorAyat: {
    backgroundColor: 'red', // Warna latar belakang bulat
    width: 30, // Lebar sesuai dengan kebutuhan
    height: 30, // Tinggi sesuai dengan kebutuhan
    borderRadius: 15, // Menggunakan border-radius setengah dari lebar atau tinggi untuk membuat sudut bulat
    justifyContent: 'center', // Mengatur posisi teks ke tengah secara vertikal
    alignItems: 'center', // Mengatur posisi teks ke tengah secara horizontal
    marginRight: 10, // Memberi jarak antara nomor ayat dan teks arab
    color: 'white',
    textAlign: 'center',

    fontSize: 20,
  },
  idn: {
    color: 'black',
  },
  ar: {
    color: 'black',
  },
});

export default Isiquran;
