import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import axios from 'axios';

export function Tela03() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/mensagens')
      .then(response => setLista(response.data))
      .catch(error => console.log(error));
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.messageFooter}>
          <Text style={styles.messageText}>{item.message}</Text>
          {item.unread > 0 && (
            <Badge
              value={item.unread}
              status="primary"
              containerStyle={styles.badge}
              textStyle={{ fontSize: 12 }}
            />
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="mail" type="feather" color="#fff" size={24} />
        <Text style={styles.headerTitle}>Messages & Chat</Text>
      </View>

      {/* Top controls */}
      <View style={styles.topControls}>
        <Text style={styles.markRead}>Mark all read</Text>
        <View style={styles.sortWrapper}>
          <Text style={styles.sortText}>Sort by time</Text>
          <Icon name="chevron-down" type="feather" size={16} color="#555" />
        </View>
      </View>

      {/* Messages list */}

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#2D3C88',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  topControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  markRead: {
    color: '#2D3C88',
    fontWeight: '600',
  },
  sortWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    marginRight: 5,
    color: '#555',
  },
  messageItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  time: {
    fontSize: 12,
    color: '#aaa',
  },
  messageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 13,
    color: '#444',
    flex: 1,
  },
  badge: {
    marginLeft: 10,
  },
});  