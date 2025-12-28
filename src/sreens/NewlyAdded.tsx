import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const items = [
  { id: '1', title: 'Truffle Pizza', subtitle: 'Limited time', img: require('../../assets/img/img1.png') },
  { id: '2', title: 'Spicy Pepperoni', subtitle: 'New recipe', img: require('../../assets/img/img2.png') },
  { id: '3', title: 'Veggie Delight', subtitle: 'Healthy choice', img: require('../../assets/img/img3.png') },
];

const NewlyAdded= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Newly added</Text>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.thumb} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        )}

      />
    </View>
  );
};

export default NewlyAdded;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 30,alignSelf:'center' },
  card: { flexDirection: 'row', marginBottom: 12, backgroundColor: '#fafafa', borderRadius: 8, overflow: 'hidden', elevation: 2 },
  thumb: { width: 100, height: 80 },
  info: { flex: 1, padding: 10, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: '600' },
  subtitle: { fontSize: 12, color: '#666', marginTop: 4 },
});