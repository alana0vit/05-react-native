import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SearchBar, Icon, Avatar, Image } from 'react-native-elements';

export function Tela01() {
  const [search, setSearch] = React.useState('');
  const [categoria, setCategoria] = React.useState([]);
  const [destino, setDestino] = React.useState([]);
  const [recomendacao, setRecomendacao] = React.useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/categories")
      .then(response => setCategoria(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/destino")
      .then(response => setDestino(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/recomendacoes")
      .then(response => setRecomendacao(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Icon name="waves" type="material" color="#fff" size={30} />
          <SearchBar
            placeholder="Search here..."
            onChangeText={setSearch}
            value={search}
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInput}
            lightTheme
            round
          />
        </View>
        <View style={styles.profileRow}>
          <Avatar
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            size="medium"
          />
          <View>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.nameText}>Donna Stroupe</Text>
          </View>
          <Icon name="notifications" color="#fff" containerStyle={{ marginLeft: 'auto' }} />
        </View>
      </View>

      <ScrollView style={styles.body}>
        {/* Category Section */}
        <Text style={styles.sectionTitle}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
          {categoria.map((item, index) => (
            <View style={styles.categoryItem} key={index}>
              <View style={styles.categoryIcon}>
                <Icon name="home" type="feather" color="#fff" />
              </View>
              <Text style={styles.categoryLabel}>{item.lugar}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Popular Destination */}
        <Text style={styles.sectionTitle}>Popular Destination</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageRow}>
          {destino.map((l, i) => (
            <Image
              key={i}
              source={{ uri: l.url }}
              style={styles.imageCard}
            />
          ))}
        </ScrollView>

        {/* Recommended */}
        <Text style={styles.sectionTitle}>Recommended</Text>
        <View style={styles.imageRow}>
          {recomendacao.map((l, i) => (
            <Image
              key={i}
              source={{ uri: l.url }}
              style={styles.imageCard}
            />
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <Icon name="home" type="feather" color="#fff" />
        <Icon name="compass" type="feather" color="#fff" />
        <Icon name="search" type="feather" color="#fff" />
        <Icon name="user" type="feather" color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#5C4DB1',
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 1,
    marginLeft: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 35,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  body: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIcon: {
    backgroundColor: '#5C4DB1',
    borderRadius: 50,
    padding: 15,
    marginBottom: 5,
  },
  categoryLabel: {
    fontSize: 12,
  },
  imageRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageCard: {
    width: 140,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#5C4DB1',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});  