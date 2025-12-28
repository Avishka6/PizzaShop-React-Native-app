import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const favorites = [
  { id: 'f1', name: 'Classic Margherita', img: require('../../assets/img/img1.png') },
  { id: 'f2', name: 'Pepperoni Feast', img: require('../../assets/img/img2.png') },
];

const Favorite= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(i) => i.id}
        ListEmptyComponent={<Text style={styles.empty}>You have no favorites yet.</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.img} style={styles.thumb} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 30,alignSelf:'center'},
  empty: { textAlign: 'center', color: '#666', marginTop: 20 },
  item: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fafafa', borderRadius: 8, marginBottom: 10 },
  thumb: { width: 70, height: 60, borderRadius: 6 },
  name: { marginLeft: 12, fontSize: 16, fontWeight: '600' },
});