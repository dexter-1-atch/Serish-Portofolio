import { useState, useEffect, useRef } from 'react';
import { Code, Palette, Cpu, BookOpen, Lightbulb, Presentation } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Web Development',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'HTML & CSS', level: 85, color: 'neon-cyan' },
        { name: 'JavaScript', level: 75, color: 'electric-blue' },
        { name: 'Responsive Design', level: 80, color: 'neon-purple' },
        { name: 'UI/UX Concepts', level: 70, color: 'neon-green' }
      ]
    },
    {
      title: 'Electronics & Arduino',
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: 'Circuit Design', level: 80, color: 'electric-blue' },
        { name: 'Arduino Programming', level: 75, color: 'neon-cyan' },
        { name: 'Motor Control', level: 85, color: 'neon-purple' },
        { name: 'Tinkercad', level: 90, color: 'neon-green' }
      ]
    },
    {
      title: 'Creative Design',
      icon: <Palette className="w-8 h-8" />,
      skills: [
        { name: 'Infographic Design', level: 85, color: 'neon-purple' },
        { name: 'Package Design', level: 80, color: 'neon-cyan' },
        { name: 'Visual Communication', level: 85, color: 'electric-blue' },
        { name: 'Photo Editing', level: 70, color: 'neon-green' }
      ]
    },
    {
      title: 'Academic & Research',
      icon: <BookOpen className="w-8 h-8" />,
      skills: [
        { name: 'Research Writing', level: 90, color: 'electric-blue' },
        { name: 'Data Analysis', level: 75, color: 'neon-cyan' },
        { name: 'Scientific Method', level: 80, color: 'neon-purple' },
        { name: 'Critical Thinking', level: 85, color: 'neon-green' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, index, categoryIndex }: { skill: any; index: number; categoryIndex: number }) => (
    <div className="mb-6" style={{ animationDelay: `${(categoryIndex * 4 + index) * 0.1}s` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-space-light rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/60 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            animationDelay: `${(categoryIndex * 4 + index) * 0.1}s`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A comprehensive overview of my technical abilities and creative competencies
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass rounded-xl p-8 border border-card-border hover:border-primary/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="text-primary mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-orbitron text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill}
                    index={index}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="font-orbitron text-2xl font-semibold mb-8 text-primary">
            Additional Competencies
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <Presentation className="w-6 h-6" />, name: 'Presentation Design', desc: 'Professional slide creation' },
              { icon: <Lightbulb className="w-6 h-6" />, name: 'Problem Solving', desc: 'Analytical approach to challenges' },
              { icon: <BookOpen className="w-6 h-6" />, name: 'Continuous Learning', desc: 'Adaptable to new technologies' }
            ].map((item, index) => (
              <div
                key={index}
                className="glass rounded-lg p-6 border border-card-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
              >
                <div className="text-primary mb-3">{item.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;