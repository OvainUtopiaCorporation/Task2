import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';

export type TabKey = 'chats' | 'explore' | 'camera' | 'contacts' | 'profile';

type Props = {
  active: TabKey;
  onChange: (tab: TabKey) => void;
};

const items: { key: TabKey; icon: keyof typeof Ionicons.glyphMap }[] = [
  { key: 'chats', icon: 'chatbubble' },
  { key: 'explore', icon: 'compass' },
  { key: 'camera', icon: 'add' },
  { key: 'contacts', icon: 'people' },
  { key: 'profile', icon: 'person-circle' },
];

export default function BottomTabBar({ active, onChange }: Props) {
  return (
    <SafeAreaView edges={['bottom']} style={styles.safe}>
      <View style={styles.bar}>
        {items.map((item) =>
          item.key === 'camera' ? (
            <TouchableOpacity key={item.key} onPress={() => onChange(item.key)} style={styles.cameraWrap}>
              <LinearGradient
                colors={colors.storyGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cameraBtn}
              >
                <Ionicons name={item.icon} size={26} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity key={item.key} onPress={() => onChange(item.key)} style={styles.tabBtn}>
              <Ionicons
                name={item.icon}
                size={26}
                color={active === item.key ? colors.text : colors.textTertiary}
              />
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: colors.tabBarBg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 8,
    paddingBottom: 4,
  },
  tabBtn: {
    flex: 1,
    alignItems: 'center',
  },
  cameraWrap: {
    flex: 1,
    alignItems: 'center',
  },
  cameraBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -14,
  },
});
