
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Phone, GamepadIcon, Download, Coins } from "lucide-react";

const WalkthroughSlide = ({ 
  title, 
  subtext, 
  children, 
  isLast = false, 
  onNext, 
  onSkip 
}: {
  title: string;
  subtext: string;
  children: React.ReactNode;
  isLast?: boolean;
  onNext: () => void;
  onSkip: () => void;
}) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-white px-6 py-12">
    <div className="w-full max-w-md mx-auto text-center space-y-8">
      {/* Illustration Area */}
      <div className="relative h-64 flex items-center justify-center">
        {children}
      </div>
      
      {/* Content */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">{subtext}</p>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-between w-full pt-8">
        <Button 
          variant="ghost" 
          onClick={onSkip}
          className="text-gray-500 hover:text-gray-700"
        >
          Skip
        </Button>
        
        <Button 
          onClick={onNext}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isLast ? "Get Started" : "Next"}
          {!isLast && <ChevronRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  </div>
);

const WelcomeIllustration = () => (
  <div className="relative animate-fade-in">
    <div className="w-48 h-48 bg-white rounded-3xl shadow-2xl mx-auto flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50"></div>
      <div className="relative z-10 text-6xl">📱</div>
      
      {/* Floating coins */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
        <Coins className="h-6 w-6 text-yellow-700" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
        <span className="text-white text-xs">₹</span>
      </div>
      <div className="absolute top-0 left-0 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
        <Play className="h-4 w-4 text-white" />
      </div>
    </div>
  </div>
);

const WatchIllustration = () => (
  <div className="relative animate-fade-in">
    <div className="w-48 h-48 bg-white rounded-3xl shadow-2xl mx-auto flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl"></div>
      <div className="relative z-10 w-32 h-24 bg-gray-900 rounded-xl flex items-center justify-center">
        <Play className="h-12 w-12 text-white" />
      </div>
      
      {/* Flying coins */}
      <div className="absolute -top-2 right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
        <span className="text-yellow-800 text-xs font-bold">₹</span>
      </div>
      <div className="absolute bottom-4 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-300">
        <Coins className="h-5 w-5 text-white" />
      </div>
    </div>
  </div>
);

const TalkIllustration = () => (
  <div className="relative animate-fade-in">
    <div className="w-48 h-48 bg-white rounded-3xl shadow-2xl mx-auto flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl"></div>
      <div className="relative z-10">
        <Phone className="h-20 w-20 text-purple-600 mx-auto" />
        <div className="mt-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <span className="text-white text-xl font-bold">₹</span>
        </div>
      </div>
      
      {/* Audio waves */}
      <div className="absolute left-8 top-1/2 w-2 h-8 bg-purple-300 rounded-full animate-pulse"></div>
      <div className="absolute left-12 top-1/2 w-2 h-12 bg-purple-400 rounded-full animate-pulse delay-150"></div>
      <div className="absolute right-8 top-1/2 w-2 h-8 bg-purple-300 rounded-full animate-pulse delay-300"></div>
      <div className="absolute right-12 top-1/2 w-2 h-12 bg-purple-400 rounded-full animate-pulse delay-450"></div>
    </div>
  </div>
);

const PlayIllustration = () => (
  <div className="relative animate-fade-in">
    <div className="w-48 h-48 bg-white rounded-3xl shadow-2xl mx-auto flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl"></div>
      <div className="relative z-10">
        <GamepadIcon className="h-20 w-20 text-orange-600 mx-auto" />
      </div>
      
      {/* Game elements */}
      <div className="absolute top-4 left-4 w-6 h-6 bg-red-400 rounded-full animate-bounce"></div>
      <div className="absolute top-4 right-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-200"></div>
      <div className="absolute bottom-4 left-8 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-400">
        <Coins className="h-4 w-4 text-yellow-700" />
      </div>
      <div className="absolute bottom-4 right-8 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-600">
        <span className="text-white text-xs font-bold">₹</span>
      </div>
    </div>
  </div>
);

const InstallIllustration = () => (
  <div className="relative animate-fade-in">
    <div className="w-48 h-48 bg-white rounded-3xl shadow-2xl mx-auto flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-3xl"></div>
      <div className="relative z-10 text-6xl">📱</div>
      
      {/* App icons falling */}
      <div className="absolute top-2 left-8 w-8 h-8 bg-red-500 rounded-lg shadow-lg animate-bounce flex items-center justify-center">
        <span className="text-white text-xs">📷</span>
      </div>
      <div className="absolute top-2 right-8 w-8 h-8 bg-blue-500 rounded-lg shadow-lg animate-bounce delay-200 flex items-center justify-center">
        <span className="text-white text-xs">🎵</span>
      </div>
      <div className="absolute bottom-8 left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
        <Download className="h-5 w-5 text-white" />
      </div>
      <div className="absolute bottom-8 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-300">
        <span className="text-yellow-800 text-sm font-bold">₹</span>
      </div>
    </div>
  </div>
);

const Index = () => {
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
    <div className="relative min-h-screen">
      {/* Progress Dots */}
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-green-500 w-8" 
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Slide Content */}
      <WalkthroughSlide
        title={slides[currentSlide].title}
        subtext={slides[currentSlide].subtext}
        isLast={currentSlide === slides.length - 1}
        onNext={handleNext}
        onSkip={handleSkip}
      >
        {slides[currentSlide].component}
      </WalkthroughSlide>
    </div>
  );
};

export default Index;
