import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

export const GlassView = ({ children, style }) => {
  return (
    <BlurView intensity={45} tint="dark" style={[styles.glass, style]}>
      {children}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  glass: {
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    backgroundColor: 'rgba(20, 20, 25, 0.5)',
  },
});
