import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const pizzas = [
  { id: 'p1', name: 'Margherita', desc: 'Classic cheese & tomato', price: '8.99', img: require('../../assets/img/img1.png') },
  { id: 'p2', name: 'Pepperoni', desc: 'Spicy pepperoni', price: '9.99', img: require('../../assets/img/img2.png') },
  { id: 'p3', name: 'BBQ Chicken', desc: 'Smoky BBQ sauce', price: '10.99', img: require('../../assets/img/img3.png') },
];

const PizzaMenu= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pizza Menu</Text>
      <FlatList
        data={pizzas}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.thumb} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PizzaMenu;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 30,alignSelf:'center'},
  card: { flexDirection: 'row', padding: 10, marginBottom: 12, backgroundColor: '#fafafa', borderRadius: 8, elevation: 2 },
  thumb: { width: 90, height: 70, borderRadius: 6 },
  info: { flex: 1, marginLeft: 12 },
  title: { fontSize: 16, fontWeight: '700' },
  desc: { fontSize: 12, color: '#666', marginTop: 4 },
  price: { marginTop: 6, fontWeight: '600' },
});