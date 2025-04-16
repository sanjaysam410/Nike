import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

// Define comprehensive intents and responses with product links
const chatIntents = {
  // Product Information
  "what's new": "Check out our New & Featured section for the latest Nike releases. Here are some highlights:\n- Nike Air Max 90 (/product/1)\n- Nike ZoomX Vaporfly NEXT% 2 (/product/4)\n- Nike Air Jordan 1 High (/product/6)",
  "show me new arrivals": "Visit our New & Featured page (/new) to discover the latest Nike products. Some standout releases:\n- Nike Air Max 90 (/product/1)\n- Nike Metcon 8 (/product/3)\n- Nike Tech Fleece Hoodie (/product/5)",
  "latest products": "Here are our newest releases:\n- Nike Air Max 90 (/product/1)\n- Nike ZoomX Vaporfly NEXT% 2 (/product/4)\n- Nike Air Jordan 1 High (/product/6)\nExplore more at /new",
  "popular shoes": "Our most popular shoes include:\n- Air Force 1 (/product/1)\n- Air Max series (/product/4)\n- Nike Dunk (/product/6)\nCheck them out in our footwear section",
  "best running shoes": "For running, we recommend:\n- Nike Air Zoom Pegasus (/product/8)\n- Nike React Infinity Run (/product/305)\n- Nike ZoomX Vaporfly (/product/4)",
  "basketball shoes": "Our top basketball shoes include:\n- Nike LeBron series (/product/6)\n- Air Jordan 1 High (/product/6)\n- Nike Zoom GT Jump (/product/3)",
  "soccer cleats": "Check out our soccer cleats:\n- Nike Mercurial (/product/306)\n- Nike Tiempo (/product/302)\n- Nike Phantom (/product/303)",
  "training shoes": "For training, we recommend:\n- Nike Metcon 8 (/product/3)\n- Nike Free (/product/301)\n- Nike SuperRep (/product/302)",
  "casual shoes": "Our lifestyle collection includes:\n- Air Force 1 (/product/1)\n- Nike Blazer (/product/2)\n- Air Max series (/product/4)",
  "kids shoes": "Explore our kids' collection:\n- Nike Team Hustle D 10 (/product/203)\n- Nike Revolution 6 Kids (/product/204)\n- Nike Flex Runner Kids (/product/205)",
  "show me womens shoes": "Check out our women's collection:\n- Nike Air Zoom Pegasus 39 (/product/101)\n- Nike Air Max 270 (/product/103)\n- Nike Free Run 5.0 (/product/106)",
  "mens running shoes": "Popular men's running shoes:\n- Nike Air Max 90 (/product/1)\n- Nike ZoomX Vaporfly NEXT% 2 (/product/4)\n- Nike Air Zoom Pegasus 39 (/product/8)",

  // Lifestyle & Fashion
  "styling tips": "Here are some style recommendations:\n- Pair Nike Air Max 90 (/product/1) with joggers\n- Layer with Nike Tech Fleece Hoodie (/product/5)\n- Complete the look with Nike accessories",
  "match outfit": "Create a coordinated look:\n- Nike Dri-FIT Element (/product/2) top\n- Nike Pro Training Tights (/product/102)\n- Nike Air Max 90 (/product/1)",
  "athleisure options": "Popular athleisure choices:\n- Nike Tech Fleece Hoodie (/product/5)\n- Nike Sportswear Windrunner (/product/107)\n- Nike Air Max 270 (/product/103)",
  "fashion trends": "Current trending items:\n- Nike Air Jordan 1 High (/product/6)\n- Nike Tech Fleece (/product/5)\n- Nike Air Max 270 (/product/103)",
  
  // Seasonal & Weather
  "winter running shoes": "Winter-ready running shoes:\n- Nike Air Zoom Pegasus Shield (/product/8)\n- Nike React Infinity Run (/product/305)\n- Nike ZoomX Vaporfly (/product/4)",
  "summer gear": "Stay cool with:\n- Nike Dri-FIT Element (/product/2)\n- Nike Pro Training Tights (/product/102)\n- Nike Free Run 5.0 (/product/106)",
  "rain gear": "Weather-resistant options:\n- Nike Shield Running Jacket (/product/5)\n- Nike Pegasus Shield (/product/8)\n- Nike Trail Running Shoes (/product/4)",

  // Kids & Family
  "baby shoes": "For little ones:\n- Nike Revolution 6 Kids (/product/204)\n- Nike Team Hustle (/product/203)\n- Nike Flex Runner (/product/205)",
  "school shoes": "Perfect for school:\n- Nike Revolution 6 Kids (/product/204)\n- Nike Team Hustle D 10 (/product/203)\n- Nike Flex Runner Kids (/product/205)",
  
  // Training & Performance
  "workout gear": "Essential training gear:\n- Nike Metcon 8 (/product/3)\n- Nike Pro Training Tights (/product/102)\n- Nike Dri-FIT Element (/product/2)",
  "running essentials": "Must-haves for runners:\n- Nike Air Zoom Pegasus (/product/8)\n- Nike Dri-FIT Element (/product/2)\n- Nike Running Shorts (/product/102)",

  // Sale & Deals
  "sale items": "Check out our best deals:\n- Nike Free RN 5.0 (/product/301)\n- Nike Metcon 7 (/product/302)\n- Nike React Infinity Run 3 (/product/305)",
  "discounted shoes": "Current shoe deals:\n- Nike Structure 24 (/product/303)\n- Nike React Infinity (/product/305)\n- Nike Air Zoom Tempo (/product/307)",

  // Default Responses
  "hi": "Hello! Welcome to Nike support. How can I help you today? Check out our latest releases at /new",
  "hello": "Hi there! How can I assist you with Nike products or services today? Browse our featured collection at /new",
  "help": "I'm here to help! Ask me about:\n- Latest releases (/new)\n- Men's collection (/men)\n- Women's collection (/women)\n- Kids' collection (/kids)\n- Sale items (/sale)",
  "thank you": "You're welcome! Don't forget to check out our new arrivals at /new",
  "thanks": "You're welcome! Browse our latest collection at /new",
  "bye": "Thank you for chatting! Check out our latest releases at /new before you go!",
  "goodbye": "Thanks for chatting! Don't forget to explore our new arrivals at /new",
  "contact human": "To speak with a human representative, please visit our Contact Us page or call our customer service. Meanwhile, browse our latest collection at /new",
  "speak to person": "Would you like to speak with a customer service representative? Visit our Contact Us page or call our support line. You can also explore our new arrivals at /new",
  "agent": "I'll help you connect with a customer service agent. Please visit our Contact Us page or call our support line. While you wait, check out our latest releases at /new"
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! How can I help you with Nike products or services today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const findBestMatch = (input: string): string => {
    const userInput = input.toLowerCase();
    let bestMatch = "I'm not sure about that. Here are some popular sections you might be interested in:\n- New Arrivals (/new)\n- Men's Collection (/men)\n- Women's Collection (/women)\n- Sale Items (/sale)";
    let bestMatchScore = 0;

    Object.entries(chatIntents).forEach(([intent, response]) => {
      const intentWords = intent.toLowerCase().split(' ');
      const userWords = userInput.split(' ');
      let matchScore = 0;

      intentWords.forEach(word => {
        if (userWords.includes(word)) matchScore++;
      });

      if (matchScore > bestMatchScore) {
        bestMatchScore = matchScore;
        bestMatch = response;
      }
    });

    return bestMatch;
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('/product/') || line.includes('/new') || line.includes('/men') || line.includes('/women') || line.includes('/kids') || line.includes('/sale')) {
        const parts = line.split('(');
        const productName = parts[0].trim();
        const link = parts[1]?.replace(')', '');
        return (
          <div key={index}>
            {productName}
            {link && (
              <Link to={link} className="text-blue-600 hover:underline ml-1">
                View Product
              </Link>
            )}
          </div>
        );
      }
      return <div key={index}>{line}</div>;
    });
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput('');
    
    // Find and send response
    setTimeout(() => {
      const response = findBestMatch(userMessage);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Nike Support</h3>
                <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {message.isUser ? message.text : formatMessage(message.text)}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <Button onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full h-14 w-14 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}