
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface WalkthroughSlideProps {
  title: string;
  subtext: string;
  children: React.ReactNode;
  isLast?: boolean;
  onNext: () => void;
  onSkip: () => void;
}

const WalkthroughSlide: React.FC<WalkthroughSlideProps> = ({
  title,
  subtext,
  children,
  isLast = false,
  onNext,
  onSkip
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Illustration Area */}
        <View style={styles.illustrationContainer}>
          {children}
        </View>
        
        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtext}>{subtext}</Text>
        </View>
        
        {/* Navigation */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity onPress={onSkip} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={onNext} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>
              {isLast ? "Get Started" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4', // green-50 equivalent
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  illustrationContainer: {
    height: 280,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827', // gray-900
    textAlign: 'center',
    marginBottom: 16,
  },
  subtext: {
    fontSize: 18,
    color: '#6b7280', // gray-600
    textAlign: 'center',
    lineHeight: 26,
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 32,
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#6b7280', // gray-500
  },
  nextButton: {
    backgroundColor: '#10b981', // green-500
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default WalkthroughSlide;
