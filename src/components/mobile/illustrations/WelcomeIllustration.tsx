
import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const WelcomeIllustration: React.FC = () => {
  const bounceAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [bounceAnim]);

  const translateY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <View style={styles.container}>
      <View style={styles.phoneContainer}>
        <Text style={styles.phoneEmoji}>📱</Text>
        
        {/* Floating elements */}
        <Animated.View style={[styles.floatingCoin1, { transform: [{ translateY }] }]}>
          <Text style={styles.coinText}>₹</Text>
        </Animated.View>
        
        <Animated.View style={[styles.floatingCoin2, { transform: [{ translateY: translateY }] }]}>
          <Text style={styles.coinText}>₹</Text>
        </Animated.View>
        
        <Animated.View style={[styles.floatingPlay, { transform: [{ translateY }] }]}>
          <Text style={styles.playText}>▶</Text>
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
  phoneContainer: {
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
  phoneEmoji: {
    fontSize: 64,
  },
  floatingCoin1: {
    position: 'absolute',
    top: -16,
    right: -16,
    width: 48,
    height: 48,
    backgroundColor: '#fbbf24', // yellow-400
    borderRadius: 24,
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
    bottom: -16,
    left: -16,
    width: 40,
    height: 40,
    backgroundColor: '#10b981', // green-400
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
  floatingPlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 32,
    height: 32,
    backgroundColor: '#3b82f6', // blue-400
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
  coinText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playText: {
    color: '#ffffff',
    fontSize: 12,
  },
});

export default WelcomeIllustration;
