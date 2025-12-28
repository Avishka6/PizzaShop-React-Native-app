import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const drinks = [
  { id: 'd1', name: 'Coca-Cola', price: '1.99', img: require('../../assets/img/img1.png') },
  { id: 'd2', name: 'Orange Juice', price: '2.49', img: require('../../assets/img/img2.png') },
  { id: 'd3', name: 'Iced Tea', price: '1.79', img: require('../../assets/img/img3.png') },
];

const FoodBeverage= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food & Beverage</Text>
      <FlatList
        data={drinks}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.thumb} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FoodBeverage;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 30,alignSelf:'center'},
  card: { flexDirection: 'row', padding: 10, marginBottom: 12, backgroundColor: '#fafafa', borderRadius: 8, elevation: 2 },
  thumb: { width: 80, height: 60, borderRadius: 6 },
  info: { marginLeft: 12, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: '700' },
  price: { marginTop: 6, fontWeight: '600' },
});