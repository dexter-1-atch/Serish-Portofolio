import { Code, Palette, Cpu, Lightbulb } from 'lucide-react';
const profileImage = '/lovable-uploads/c483773f-cb18-4211-9f59-e2fd929de027.png';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Development',
      description: 'HTML, CSS, JavaScript with focus on modern, responsive design'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Electronics & Arduino',
      description: 'Circuit design, motor control, and interactive hardware projects'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Creative Design',
      description: 'Infographics, package design, and visual storytelling'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Analytical thinking applied to technology and creative challenges'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Serish - Creative Technologist"
              className="relative z-10 w-80 h-80 rounded-full object-cover mx-auto border-4 border-primary/30 shadow-2xl"
            />
          </div>

          {/* About Text */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="font-orbitron text-2xl font-semibold text-primary">
              Creative Technologist & Student
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate student from Canada with a strong interest in programming, design, and technology. 
              Over the past year, I've immersed myself in various technical projects, from building interactive 
              web applications to designing complex Arduino circuits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey spans across multiple disciplines - web development with modern technologies, 
              electronics and circuit design, creative visual design, and academic research. I believe 
              in the power of combining technical skills with creative thinking to solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's coding a responsive website, designing an infographic, or building an Arduino 
              project, I approach every challenge with curiosity and dedication to creating something 
              meaningful and polished.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                {skill.icon}
              </div>
              <h4 className="font-orbitron font-semibold text-lg mb-3 text-foreground">
                {skill.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;