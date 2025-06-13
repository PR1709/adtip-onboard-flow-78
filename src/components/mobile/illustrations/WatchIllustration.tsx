
import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const WatchIllustration: React.FC = () => {
  const pulseAnim = new Animated.Value(1);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.videoPlayer}>
          <Text style={styles.playIcon}>▶</Text>
        </View>
        
        {/* Flying coins */}
        <Animated.View style={[styles.floatingCoin1, { transform: [{ scale: pulseAnim }] }]}>
          <Text style={styles.coinText}>₹</Text>
        </Animated.View>
        
        <Animated.View style={[styles.floatingCoin2, { transform: [{ scale: pulseAnim }] }]}>
          <Text style={styles.coinText}>₹</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenContainer: {
    width: 192,
    height: 192,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  videoPlayer: {
    width: 128,
    height: 96,
    backgroundColor: '#1f2937', // gray-900
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    fontSize: 32,
    color: '#ffffff',
  },
  floatingCoin1: {
    position: 'absolute',
    top: -8,
    right: 16,
    width: 32,
    height: 32,
    backgroundColor: '#fbbf24', // yellow-400
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  floatingCoin2: {
    position: 'absolute',
    bottom: 16,
    right: -8,
    width: 40,
    height: 40,
    backgroundColor: '#10b981', // green-500
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  coinText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default WatchIllustration;
