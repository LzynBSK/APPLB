import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const Series = () => {
  return (
    <ScrollView>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgnike-a.akamaihd.net/768x768/02602115A2.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Air Jordan 37 Low</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 1.699,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgnike-a.akamaihd.net/768x768/025980NXA3.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Dunk Low Remastered</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 899,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgnike-a.akamaihd.net/768x768/025979NXA2.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Dunk Low Retro BTTYS</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 899,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgnike-a.akamaihd.net/768x768/0254993XA2.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis KD15</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 1.199,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgnike-a.akamaihd.net/768x768/02568815A2.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Air Jordan 5 Retro SE</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 1.799,99</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: "#E1EDFE"
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
});

export default Series;
