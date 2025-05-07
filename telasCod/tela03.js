import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Icon, Badge } from 'react-native-elements';

const messages = [
  {
    id: '1',
    name: 'Claudia Alves',
    message: 'Do more of what you love.',
    time: '3m ago',
    unread: 3,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: '2',
    name: 'Dani Martinez',
    message: 'Do your own thing.',
    time: '5m ago',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '3',
    name: 'Kimberly Nguyen',
    message: 'Kindness is beautiful.',
    time: '1h ago',
    unread: 2,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '4',
    name: 'Mariana Napolitani',
    message: 'Live your purpose.',
    time: '2h ago',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: '5',
    name: 'Olivia Wilson',
    message: 'You got this.',
    time: '5h ago',
    unread: 0,
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '6',
    name: 'Rachelle Beaudry',
    message: "You're wonderful.",
    time: 'Yesterday',
    unread: 0,
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: '7',
    name: 'Soo Jin Ae',
    message: 'Keep it simple.',
    time: 'Yesterday',
    unread: 0,
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

export function Tela03() {
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
        data={messages}
        keyExtractor={(item) => item.id}
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