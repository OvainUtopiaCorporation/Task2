import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  subtitle: string;
};

export default function PlaceholderScreen({ title, icon, subtitle }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.center}>
        <Ionicons name={icon} size={48} color={colors.textTertiary} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '800',
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  subtitle: {
    color: colors.textTertiary,
    fontSize: 14,
    marginTop: 10,
  },
});
