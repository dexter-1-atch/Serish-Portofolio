import { ExternalLink, Github, Zap, Palette, Brain, History, FlaskConical, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Alcohol Awareness Infographic',
      description: 'Health education project showcasing the effects of alcohol with compelling visual design and clear information hierarchy.',
      icon: <Palette className="w-6 h-6" />,
      category: 'Design',
      color: 'neon-purple',
      skills: ['Visual Design', 'Health Education', 'Infographics']
    },
    {
      title: 'CK One Shock Package Design',
      description: 'Creative hand-colored product package design inspired by CK One Shock, demonstrating artistic and commercial design skills.',
      icon: <Palette className="w-6 h-6" />,
      category: 'Design',
      color: 'neon-cyan',
      skills: ['Package Design', 'Creative Arts', 'Brand Identity']
    },
    {
      title: 'LED Flasher Circuit',
      description: 'Functional electronics circuit built in Tinkercad, demonstrating understanding of basic electronic components and timing circuits.',
      icon: <Zap className="w-6 h-6" />,
      category: 'Electronics',
      color: 'electric-blue',
      skills: ['Circuit Design', 'Electronics', 'Tinkercad']
    },
    {
      title: 'Two-Motor Arduino Control',
      description: 'Advanced Arduino project using L293D motor driver chip with separate logic and motor power supplies for precise motor control.',
      icon: <Cpu className="w-6 h-6" />,
      category: 'Arduino',
      color: 'neon-green',
      skills: ['Arduino Programming', 'Motor Control', 'Circuit Design']
    },
    {
      title: 'AI Risks & Benefits Presentation',
      description: '10-slide professional presentation analyzing artificial intelligence impact on society, covering benefits, risks, and ethical considerations.',
      icon: <Brain className="w-6 h-6" />,
      category: 'Research',
      color: 'neon-purple',
      skills: ['Research', 'AI Ethics', 'Presentation Design']
    },
    {
      title: 'Pierre Elliott Trudeau Essay',
      description: 'Comprehensive 5-paragraph historical research essay examining defining moments in Canadian history through Trudeau\'s leadership.',
      icon: <History className="w-6 h-6" />,
      category: 'Academic',
      color: 'neon-cyan',
      skills: ['Historical Research', 'Academic Writing', 'Canadian History']
    },
    {
      title: 'Chemistry Culminating Project',
      description: 'Comprehensive chemistry assignment completed for online summer school, demonstrating mastery of core chemistry concepts.',
      icon: <FlaskConical className="w-6 h-6" />,
      category: 'Science',
      color: 'electric-blue',
      skills: ['Chemistry', 'Scientific Method', 'Lab Analysis']
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-space-medium/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A collection of projects spanning web development, electronics, design, and academic research
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-xl p-6 border border-card-border hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in-up overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Project Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-${project.color} group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <span className="text-xs bg-card/50 rounded-full px-3 py-1 text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-orbitron font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1 border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <Button
            size="lg"
            className="bg-gradient-button text-primary-foreground hover:scale-105 transition-transform duration-300 glow-blue font-medium"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;