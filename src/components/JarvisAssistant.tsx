import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const JarvisAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am Jarvis, your virtual assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getJarvisResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greetings & Introductions
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('greetings')) {
      const greetings = [
        'Hello! I am Jarvis, your virtual assistant. How can I assist you today?',
        'Greetings! I\'m here to help you explore Serish\'s portfolio. What would you like to know?',
        'Hi there! Welcome to Serish\'s portfolio. I\'m Jarvis, ready to assist you.'
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    if (message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening')) {
      return 'Good day! I\'m Jarvis, ready to help you navigate through Serish\'s impressive portfolio.';
    }
    
    // Identity & About Jarvis
    if (message.includes('your name') || message.includes('who are you') || message.includes('what are you')) {
      return 'I am Jarvis, an AI assistant designed to help you explore Serish\'s portfolio. Think of me as your personal guide to his work and achievements!';
    }
    
    if (message.includes('how are you') || message.includes('how do you feel')) {
      return 'I\'m functioning perfectly and ready to assist! How can I help you learn more about Serish today?';
    }
    
    // Projects & Work
    if (message.includes('projects') || message.includes('work') || message.includes('portfolio')) {
      return 'Serish has an impressive portfolio! He\'s worked on Arduino electronics, web development projects, creative designs, AI presentations, and academic research. Would you like details about any specific project?';
    }
    
    if (message.includes('arduino') || message.includes('electronics') || message.includes('circuit')) {
      return 'Serish has excellent electronics skills! He\'s built LED flasher circuits and two-motor Arduino control systems using L293D chips. His work includes motor speed control with potentiometers and series circuits in Tinkercad.';
    }
    
    if (message.includes('web') || message.includes('website') || message.includes('html') || message.includes('css') || message.includes('javascript')) {
      return 'Serish is skilled in web development with HTML, CSS, and JavaScript! He\'s created interactive applications, responsive designs, and this very portfolio website you\'re browsing.';
    }
    
    if (message.includes('design') || message.includes('creative') || message.includes('infographic')) {
      return 'Serish excels at creative design! He\'s created professional infographics, package designs inspired by CK One Shock, poster layouts, and visual presentations that look truly professional.';
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('presentation')) {
      return 'Serish created a comprehensive 10-slide presentation on AI risks and benefits in society. He\'s clearly passionate about emerging technologies and their impact!';
    }
    
    // Skills & Abilities
    if (message.includes('skills') || message.includes('abilities') || message.includes('programming')) {
      return 'Serish\'s skills span multiple domains: Web Development (HTML, CSS, JavaScript), Arduino & Electronics, Creative Design, Academic Research, and Programming concepts like loops, arrays, and algorithms!';
    }
    
    if (message.includes('languages') || message.includes('coding') || message.includes('code')) {
      return 'Serish is proficient in JavaScript for web development, has experience with Arduino programming, and understands core programming concepts like conditionals, loops, and arrays.';
    }
    
    if (message.includes('experience') || message.includes('level')) {
      return 'Serish is at a beginner to intermediate level with strong fundamentals. He\'s completed numerous school assignments and personal projects, showing consistent growth and learning!';
    }
    
    // Education & Background
    if (message.includes('student') || message.includes('school') || message.includes('education')) {
      return 'Serish is a dedicated student who has completed various assignments across technology, design, and academic subjects. His work shows a perfect blend of technical skill and creative thinking!';
    }
    
    if (message.includes('history') || message.includes('trudeau') || message.includes('canada')) {
      return 'Serish completed a comprehensive history project on Pierre Elliott Trudeau, exploring Canada\'s defining moments. He excels at research and academic writing!';
    }
    
    if (message.includes('chemistry') || message.includes('science')) {
      return 'Serish has completed chemistry and science assignments, including online summer school projects. His analytical skills extend beyond just technology!';
    }
    
    // Contact & Location
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('hire')) {
      return 'You can reach Serish at dexter125555@gmail.com or use the contact form below. He\'s always open to discussing new opportunities and collaborations!';
    }
    
    if (message.includes('location') || message.includes('where') || message.includes('canada')) {
      return 'Serish is based in Canada. He\'s part of the vibrant Canadian tech and creative community!';
    }
    
    // About Serish
    if (message.includes('about') || message.includes('bio') || message.includes('serish')) {
      return 'Serish is a creative technologist and passionate student exploring the intersection of technology, creativity, and innovation. He brings ideas to life through code, circuits, and design!';
    }
    
    if (message.includes('age') || message.includes('old')) {
      return 'Serish is a young and talented student with a bright future ahead in technology and creative fields!';
    }
    
    if (message.includes('interests') || message.includes('hobbies') || message.includes('passion')) {
      return 'Serish is passionate about programming, electronics, design, and technology projects. He loves making things look professional and enjoys the creative process of bringing ideas to life!';
    }
    
    // Technical Questions
    if (message.includes('technology') || message.includes('tech') || message.includes('tools')) {
      return 'Serish works with various technologies: Arduino for electronics, HTML/CSS/JavaScript for web development, design tools for creative projects, and Tinkercad for circuit simulation.';
    }
    
    if (message.includes('future') || message.includes('goals') || message.includes('plans')) {
      return 'Serish is focused on growing his skills in technology and design. His diverse project portfolio shows he\'s building a strong foundation for a career in tech!';
    }
    
    // Interactive & Fun
    if (message.includes('cool') || message.includes('awesome') || message.includes('amazing') || message.includes('impressive')) {
      return 'I agree! Serish\'s work is quite impressive for a student. His combination of technical skills and creative design really makes his projects stand out!';
    }
    
    if (message.includes('favorite') || message.includes('best')) {
      return 'It\'s hard to pick a favorite! I\'d say his Arduino motor control project and the AI presentation showcase his technical and analytical skills beautifully.';
    }
    
    if (message.includes('learn') || message.includes('studying')) {
      return 'Serish is always learning! He\'s studied web development, electronics, design principles, and academic subjects. His diverse learning approach is really admirable.';
    }
    
    // Help & Commands
    if (message.includes('help') || message.includes('commands') || message.includes('what can you do')) {
      return 'I can help you learn about Serish\'s projects, skills, background, education, and contact information. Try asking about specific projects like "Arduino" or "web development", or ask about his skills and experience!';
    }
    
    if (message.includes('navigate') || message.includes('sections') || message.includes('website')) {
      return 'This website has several sections: About (Serish\'s background), Projects (his impressive work), Skills (technical abilities), and Contact (get in touch). Feel free to scroll through or ask me about any section!';
    }
    
    // Compliments & Responses
    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      return 'You\'re very welcome! I\'m here to help you discover all the amazing work Serish has done. Is there anything else you\'d like to know?';
    }
    
    if (message.includes('nice') || message.includes('good job') || message.includes('well done')) {
      return 'Thank you! I\'ll pass along your kind words to Serish. He\'s put a lot of effort into his projects and portfolio!';
    }
    
    // Farewells
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you') || message.includes('later')) {
      return 'Goodbye! Thank you for exploring Serish\'s portfolio. Feel free to reach out anytime. Have a wonderful day!';
    }
    
    // Questions about specific projects
    if (message.includes('package design') || message.includes('ck one')) {
      return 'Serish created a hand-colored package design inspired by CK One Shock for a creative assignment. It showcases his attention to detail and professional design aesthetic!';
    }
    
    if (message.includes('alcohol') || message.includes('infographic')) {
      return 'The alcohol awareness infographic was a health project focusing on the effects of alcohol, designed with clear visual impact. It demonstrates Serish\'s ability to communicate important information effectively!';
    }
    
    if (message.includes('led') || message.includes('flasher')) {
      return 'The LED flasher circuit was built in Tinkercad for a tech class. It\'s a great example of Serish\'s understanding of basic electronics and circuit design!';
    }
    
    // Random conversation starters
    if (message.includes('how') && message.includes('day')) {
      return 'Every day is a good day to explore technology and creativity! How has your day been? Are you interested in learning more about Serish\'s work?';
    }
    
    if (message.includes('weather') || message.includes('today')) {
      return 'I don\'t track weather, but I can tell you about the sunny prospects in Serish\'s technology career! What would you like to know about his work?';
    }
    
    if (message.includes('time') || message.includes('clock')) {
      return 'Time flies when you\'re exploring amazing portfolios! Speaking of time, Serish has invested considerable time perfecting his skills. What interests you most?';
    }
    
    // Encourage exploration
    if (message.includes('more') || message.includes('tell me') || message.includes('information')) {
      return 'There\'s so much more to discover! Serish has worked on Arduino projects, web development, creative designs, academic research, and presentations. What specific area interests you most?';
    }
    
    // Default responses with variety
    const defaultResponses = [
      'That\'s an interesting question! Try asking me about Serish\'s projects, skills, background, or contact information. I\'m here to help you explore his portfolio!',
      'I\'m still learning! You can ask me about his Arduino projects, web development work, creative designs, or academic achievements. What interests you most?',
      'I might not understand that specific phrase yet, but I\'d love to help! Try asking about Serish\'s projects, skills, experience, or how to contact him.',
      'Hmm, I\'m not sure about that. But I can tell you all about Serish\'s impressive work in technology, design, and academics! What would you like to know?'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getJarvisResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-button text-primary-foreground hover:scale-110 transition-transform duration-300 animate-pulse-glow shadow-lg"
        >
          <Bot className="w-8 h-8" />
        </Button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-50 transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[500px]'
        }`}>
          <div className="glass rounded-xl border border-primary/30 overflow-hidden h-full flex flex-col animate-slide-in-right">
            {/* Header */}
            <div className="bg-gradient-primary p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Bot className="w-6 h-6 mr-3 text-primary-foreground" />
                <div>
                  <h3 className="font-orbitron font-semibold text-primary-foreground">Jarvis Assistant</h3>
                  <p className="text-xs text-primary-foreground/80">
                    {isTyping ? 'Typing...' : 'Online'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-primary-foreground hover:bg-white/20 w-8 h-8 p-0"
                >
                  <Minimize className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-white/20 w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-space-dark/90">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isUser
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card/80 text-card-foreground border border-card-border'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-card/80 text-card-foreground border border-card-border p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-card-border bg-space-dark/90">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything..."
                      className="flex-1 bg-space-light border-card-border focus:border-primary"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default JarvisAssistant;