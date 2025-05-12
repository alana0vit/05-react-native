import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Icon, Avatar, ListItem, Image } from 'react-native-elements';

export function Tela02() {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/doctors')
      .then(response => setDoctor(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/places')
      .then(response => setCategories(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userRow}>
          <Avatar
            rounded
            size="medium"
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.nameText}>Dani Martinez</Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="Search doctor"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
          <Icon name="search" type="feather" color="#5C4DB1" containerStyle={styles.searchIcon} />
        </View>
      </View>

      <ScrollView style={styles.body}>
        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.showAll}>Show All</Text>
        </View>

        <View style={styles.grid}>
          {categories.map((label, index) => (
            <View key={index} style={styles.categoryCard}>
              <Icon name="plus-square" type="feather" color="#5C4DB1" size={30} />
              <Text style={styles.categoryText}>{label.placeName}</Text>
            </View>
          ))}
        </View>

        {/* Top Doctors */}
        <Text style={styles.sectionTitle}>Top doctors</Text>

        <View>
          {
            doctor.map((l, i) => (

              <ListItem key={i}>
                <Image
                  source={{uri: l.img }}
                  style={styles.doctorImage}
                />
                
                <View style={styles.doctorInfo}>
                  <Text style={styles.doctorName}>{l.name}</Text>
                  <Text style={styles.doctorSpecialty}>{l.type}</Text>
                  <View style={styles.ratingRow}>
                    <Icon name="star" type="feather" color="#FFD700" size={16} />
                    <Text style={styles.ratingText}>{l.reviews}</Text>
                  </View>
                </View>
              </ListItem>
            ))
          }
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <Icon name="home" type="feather" color="#fff" />
        <Icon name="user-md" type="font-awesome-5" color="#fff" />
        <Icon name="calendar" type="feather" color="#fff" />
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
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  searchInput: {
    flex: 1,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
  body: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  showAll: {
    fontSize: 14,
    color: '#5C4DB1',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  categoryCard: {
    width: '30%',
    backgroundColor: '#f5f4ff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    color: '#5C4DB1',
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    margnLeft: 5,
    fontSize: 13,
    color: '#666',
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
