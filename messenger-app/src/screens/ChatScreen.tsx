import React, { useState } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';
import { Chat, Message, defaultMessages, messagesByChat } from '../data/mockData';

type Props = {
  chat: Chat;
  onBack: () => void;
};

export default function ChatScreen({ chat, onBack }: Props) {
  const [messages, setMessages] = useState<Message[]>(messagesByChat[chat.id] ?? defaultMessages);
  const [draft, setDraft] = useState('');

  const send = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: `local-${Date.now()}`, text: draft.trim(), time: 'сейчас', fromMe: true },
    ]);
    setDraft('');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={28} color={colors.accent} />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text numberOfLines={1} style={styles.headerName}>
            {chat.name}
          </Text>
          <Text style={styles.headerStatus}>{chat.online ? 'в сети' : 'был(а) недавно'}</Text>
        </View>

        <Image source={{ uri: chat.avatar }} style={styles.headerAvatar} />
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContent}
        renderItem={({ item }) =>
          item.fromMe ? (
            <LinearGradient
              colors={colors.outGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.bubble, styles.bubbleOut]}
            >
              <Text style={styles.bubbleTextOut}>{item.text}</Text>
              <Text style={styles.bubbleTimeOut}>{item.time}</Text>
            </LinearGradient>
          ) : (
            <View style={[styles.bubble, styles.bubbleIn]}>
              <Text style={styles.bubbleTextIn}>{item.text}</Text>
              <Text style={styles.bubbleTimeIn}>{item.time}</Text>
            </View>
          )
        }
      />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.inputBar}>
          <TouchableOpacity style={styles.inputIcon}>
            <Ionicons name="add-circle-outline" size={28} color={colors.accent} />
          </TouchableOpacity>

          <View style={styles.inputPill}>
            <TextInput
              value={draft}
              onChangeText={setDraft}
              placeholder="Сообщение"
              placeholderTextColor={colors.textTertiary}
              style={styles.input}
              multiline
            />
            <TouchableOpacity>
              <Ionicons name="camera-outline" size={22} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.sendBtn} onPress={send}>
            <Ionicons name={draft.trim() ? 'arrow-up-circle' : 'mic-circle'} size={32} color={colors.accent} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingBottom: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  backBtn: {
    padding: 4,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerName: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  headerStatus: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 1,
  },
  headerAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 10,
  },
  messagesContent: {
    padding: 12,
    paddingBottom: 20,
  },
  bubble: {
    maxWidth: '78%',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 9,
    marginVertical: 3,
  },
  bubbleOut: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },
  bubbleIn: {
    alignSelf: 'flex-start',
    backgroundColor: colors.bubbleIn,
    borderBottomLeftRadius: 5,
  },
  bubbleTextOut: {
    color: '#fff',
    fontSize: 15.5,
  },
  bubbleTextIn: {
    color: colors.text,
    fontSize: 15.5,
  },
  bubbleTimeOut: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 10.5,
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  bubbleTimeIn: {
    color: colors.textTertiary,
    fontSize: 10.5,
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  inputIcon: {
    marginBottom: 6,
    marginRight: 4,
  },
  inputPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.card,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 4,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 15.5,
    maxHeight: 100,
    paddingVertical: 4,
  },
  sendBtn: {
    marginBottom: 2,
    marginLeft: 4,
  },
});
