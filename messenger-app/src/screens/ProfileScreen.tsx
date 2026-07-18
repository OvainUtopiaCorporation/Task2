import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';

const gridPhotos = Array.from({ length: 12 }).map((_, i) => `https://picsum.photos/seed/msg${i}/300/300`);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.username}>ваш_профиль</Text>
          <Ionicons name="menu-outline" size={26} color={colors.text} />
        </View>

        <View style={styles.topRow}>
          <LinearGradient
            colors={colors.storyGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.avatarRing}
          >
            <Image source={{ uri: 'https://i.pravatar.cc/150?img=12' }} style={styles.avatar} />
          </LinearGradient>

          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNum}>128</Text>
              <Text style={styles.statLabel}>постов</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNum}>4.2K</Text>
              <Text style={styles.statLabel}>подписчиков</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNum}>318</Text>
              <Text style={styles.statLabel}>подписок</Text>
            </View>
          </View>
        </View>

        <View style={styles.bio}>
          <Text style={styles.bioName}>Ваше Имя</Text>
          <Text style={styles.bioText}>просто демо-профиль ✨</Text>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>Редактировать профиль</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtnSmall}>
            <Ionicons name="person-add-outline" size={18} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.tabsRow}>
          <View style={[styles.tab, styles.tabActive]}>
            <Ionicons name="grid" size={22} color={colors.text} />
          </View>
          <View style={styles.tab}>
            <Ionicons name="play-outline" size={24} color={colors.textTertiary} />
          </View>
          <View style={styles.tab}>
            <Ionicons name="person-outline" size={22} color={colors.textTertiary} />
          </View>
        </View>

        <View style={styles.grid}>
          {gridPhotos.map((uri) => (
            <Image key={uri} source={{ uri }} style={styles.gridPhoto} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const AVATAR = 84;
const GAP = 2;
const PHOTO_SIZE = 130;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  username: { color: colors.text, fontSize: 19, fontWeight: '700' },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  avatarRing: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  avatar: {
    width: AVATAR - 10,
    height: AVATAR - 10,
    borderRadius: (AVATAR - 10) / 2,
    borderWidth: 2,
    borderColor: colors.bg,
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: { alignItems: 'center' },
  statNum: { color: colors.text, fontSize: 17, fontWeight: '700' },
  statLabel: { color: colors.textSecondary, fontSize: 12.5, marginTop: 2 },
  bio: { paddingHorizontal: 16, marginTop: 10 },
  bioName: { color: colors.text, fontWeight: '600', fontSize: 14 },
  bioText: { color: colors.textSecondary, fontSize: 14, marginTop: 2 },
  actionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 12,
    gap: 8,
  },
  actionBtn: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  actionText: { color: colors.text, fontWeight: '600', fontSize: 13.5 },
  actionBtnSmall: {
    width: 38,
    backgroundColor: colors.card,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 18,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabActive: {
    borderTopWidth: 1.5,
    borderTopColor: colors.text,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: GAP,
  },
  gridPhoto: {
    width: PHOTO_SIZE,
    height: PHOTO_SIZE,
    marginBottom: GAP,
  },
});
