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
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! I am Jarvis, your virtual assistant. How can I assist you today?';
    }
    
    if (message.includes('your name') || message.includes('who are you')) {
      return 'I am Jarvis, your virtual assistant created to help you navigate this portfolio.';
    }
    
    if (message.includes('projects') || message.includes('work')) {
      return 'Serish has worked on various projects including web development, Arduino circuits, creative design, and academic research. Check out the Projects section for detailed information!';
    }
    
    if (message.includes('skills') || message.includes('abilities')) {
      return 'Serish\'s skills include web development (HTML, CSS, JavaScript), electronics & Arduino, creative design, and academic research. Visit the Skills section to see the full breakdown!';
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return 'You can reach Serish at dexter125555@gmail.com or use the contact form in the Contact section below.';
    }
    
    if (message.includes('location') || message.includes('where')) {
      return 'Serish is based in Canada.';
    }
    
    if (message.includes('about') || message.includes('bio')) {
      return 'Serish is a creative technologist and student with interests in programming, design, and technology. Check out the About section for more details!';
    }
    
    if (message.includes('help') || message.includes('commands')) {
      return 'I can help you learn about Serish\'s projects, skills, background, and contact information. Try asking about "projects", "skills", "about", or "contact"!';
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return 'You\'re welcome! Is there anything else you\'d like to know about Serish\'s work?';
    }
    
    if (message.includes('bye') || message.includes('goodbye')) {
      return 'Goodbye! Feel free to reach out anytime. Have a great day!';
    }
    
    return 'I\'m not sure I understand that yet. Try asking me about Serish\'s projects, skills, background, or contact information. You can also ask for help to see what I can do!';
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