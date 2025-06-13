
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface ProgressDotsProps {
  totalSlides: number;
  currentSlide: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ totalSlides, currentSlide }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSlides }, (_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            index === currentSlide ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    zIndex: 50,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d1d5db', // gray-300
  },
  activeDot: {
    width: 32,
    backgroundColor: '#10b981', // green-500
  },
  inactiveDot: {
    width: 8,
    backgroundColor: '#d1d5db', // gray-300
  },
});

export default ProgressDots;
