import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

type Props = {
  name: string;
  avatar: string;
  seen: boolean;
  isMe?: boolean;
};

const SIZE = 64;
const RING = 4;

export default function StoryAvatar({ name, avatar, seen, isMe }: Props) {
  return (
    <TouchableOpacity style={styles.wrap} activeOpacity={0.7}>
      {seen ? (
        <View style={[styles.ring, styles.ringSeen]}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
        </View>
      ) : (
        <LinearGradient
          colors={colors.storyGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.ring}
        >
          <Image source={{ uri: avatar }} style={styles.avatar} />
        </LinearGradient>
      )}
      {isMe && (
        <View style={styles.plusBadge}>
          <Ionicons name="add" size={13} color="#fff" />
        </View>
      )}
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    width: 74,
    marginRight: 2,
  },
  ring: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: RING,
  },
  ringSeen: {
    backgroundColor: colors.border,
  },
  avatar: {
    width: SIZE - RING * 2 - 4,
    height: SIZE - RING * 2 - 4,
    borderRadius: (SIZE - RING * 2 - 4) / 2,
    borderWidth: 2,
    borderColor: colors.bg,
  },
  plusBadge: {
    position: 'absolute',
    top: SIZE - 16,
    left: 42,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: colors.textSecondary,
    fontSize: 11.5,
    marginTop: 4,
    maxWidth: 70,
  },
});
