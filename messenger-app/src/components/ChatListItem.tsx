import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { Chat } from '../data/mockData';

type Props = {
  chat: Chat;
  onPress: () => void;
};

export default function ChatListItem({ chat, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.6} onPress={onPress}>
      <View style={styles.avatarWrap}>
        <Image source={{ uri: chat.avatar }} style={styles.avatar} />
        {chat.online && <View style={styles.onlineDot} />}
      </View>

      <View style={styles.middle}>
        <View style={styles.topLine}>
          <View style={styles.nameRow}>
            {chat.pinned && (
              <Ionicons name="pin" size={11} color={colors.textTertiary} style={{ marginRight: 3 }} />
            )}
            <Text numberOfLines={1} style={styles.name}>
              {chat.name}
            </Text>
            {chat.verified && (
              <Ionicons name="checkmark-circle" size={14} color={colors.accent} style={{ marginLeft: 3 }} />
            )}
          </View>
          <Text style={styles.time}>{chat.time}</Text>
        </View>

        <View style={styles.bottomLine}>
          <Text numberOfLines={1} style={[styles.message, chat.unread > 0 && styles.messageUnread]}>
            {chat.lastMessage}
          </Text>
          {chat.muted && (
            <Ionicons name="volume-mute" size={14} color={colors.textTertiary} style={{ marginRight: 4 }} />
          )}
          {chat.unread > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{chat.unread > 99 ? '99+' : chat.unread}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const AVATAR = 54;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 9,
    alignItems: 'center',
  },
  avatarWrap: {
    marginRight: 12,
  },
  avatar: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    backgroundColor: colors.card,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.online,
    borderWidth: 2.5,
    borderColor: colors.bg,
  },
  middle: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingBottom: 9,
    paddingTop: 2,
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    maxWidth: 210,
  },
  time: {
    color: colors.textTertiary,
    fontSize: 12.5,
  },
  bottomLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  message: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 14.5,
  },
  messageUnread: {
    color: colors.text,
  },
  badge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.badge,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    marginLeft: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11.5,
    fontWeight: '700',
  },
});
