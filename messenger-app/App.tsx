import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/theme/colors';
import { Chat } from './src/data/mockData';
import ChatsListScreen from './src/screens/ChatsListScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PlaceholderScreen from './src/screens/PlaceholderScreen';
import BottomTabBar, { TabKey } from './src/components/BottomTabBar';

export default function App() {
  const [tab, setTab] = useState<TabKey>('chats');
  const [openChat, setOpenChat] = useState<Chat | null>(null);

  const handleTabChange = (next: TabKey) => {
    if (next === 'camera') return;
    setOpenChat(null);
    setTab(next);
  };

  const renderTab = () => {
    switch (tab) {
      case 'chats':
        return <ChatsListScreen onOpenChat={setOpenChat} />;
      case 'explore':
        return (
          <PlaceholderScreen title="Обзор" icon="compass-outline" subtitle="Здесь будут истории и рекомендации" />
        );
      case 'contacts':
        return (
          <PlaceholderScreen title="Контакты" icon="people-outline" subtitle="Список ваших контактов появится тут" />
        );
      case 'profile':
        return <ProfileScreen />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <StatusBar style="light" />
        <View style={styles.content}>{openChat ? <ChatScreen chat={openChat} onBack={() => setOpenChat(null)} /> : renderTab()}</View>
        {!openChat && <BottomTabBar active={tab} onChange={handleTabChange} />}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    flex: 1,
  },
});
