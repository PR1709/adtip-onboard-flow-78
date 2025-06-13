
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import WalkthroughSlide from './WalkthroughSlide';
import ProgressDots from './ProgressDots';
import WelcomeIllustration from './illustrations/WelcomeIllustration';
import WatchIllustration from './illustrations/WatchIllustration';

// Simple placeholder components for other illustrations
const TalkIllustration = () => (
  <View style={styles.illustrationPlaceholder}>
    <View style={styles.phoneIcon}>
      <Text style={styles.iconText}>📞</Text>
    </View>
  </View>
);

const PlayIllustration = () => (
  <View style={styles.illustrationPlaceholder}>
    <View style={styles.gameIcon}>
      <Text style={styles.iconText}>🎮</Text>
    </View>
  </View>
);

const InstallIllustration = () => (
  <View style={styles.illustrationPlaceholder}>
    <View style={styles.downloadIcon}>
      <Text style={styles.iconText}>📱</Text>
    </View>
  </View>
);

const MobileOnboarding: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Welcome to Adtip",
      subtext: "Earn rewards from videos, chats, games, and more.",
      component: <WelcomeIllustration />
    },
    {
      title: "Watch & Earn",
      subtext: "Watch short ads and videos. Get paid instantly.",
      component: <WatchIllustration />
    },
    {
      title: "Talk & Earn",
      subtext: "Join sponsored calls and earn for your time.",
      component: <TalkIllustration />
    },
    {
      title: "Play & Earn",
      subtext: "Play games and unlock real rewards with every task.",
      component: <PlayIllustration />
    },
    {
      title: "Install & Earn",
      subtext: "Download partner apps and earn instantly.",
      component: <InstallIllustration />
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Handle "Get Started" action
      console.log("Getting started!");
    }
  };

  const handleSkip = () => {
    setCurrentSlide(slides.length - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressDots totalSlides={slides.length} currentSlide={currentSlide} />
      
      <WalkthroughSlide
        title={slides[currentSlide].title}
        subtext={slides[currentSlide].subtext}
        isLast={currentSlide === slides.length - 1}
        onNext={handleNext}
        onSkip={handleSkip}
      >
        {slides[currentSlide].component}
      </WalkthroughSlide>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4', // green-50
  },
  illustrationPlaceholder: {
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
  },
  phoneIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#a855f7', // purple-600
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#ea580c', // orange-600
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#0891b2', // cyan-600
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 32,
  },
});

export default MobileOnboarding;
