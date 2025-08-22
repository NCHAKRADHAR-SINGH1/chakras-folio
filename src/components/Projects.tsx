import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ExternalLink, 
  Github, 
  Bot, 
  Mic, 
  Calculator,
  Filter,
  Sparkles,
  Code2,
  Globe
} from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Gemini AI Chatbot',
      description: 'A real-time AI chatbot application built with Python and Streamlit, integrating Google Generative AI (Gemini API) for intelligent conversations and responses.',
      image: Bot,
      category: 'AI/ML',
      technologies: ['Python', 'Streamlit', 'Gemini API', 'AI'],
      features: [
        'Real-time AI responses',
        'Google Gemini integration',
        'Clean user interface',
        'Conversation history'
      ],
      liveUrl: 'https://gemini-chatbot-cpaznk9bpumod2kurc3jnm.streamlit.app/',
      githubUrl: '#', // Placeholder
      status: 'Live'
    },
    {
      id: 2,
      title: 'Speech-to-Text & Text-to-Speech App',
      description: 'A comprehensive speech processing application using Python and Streamlit with speech_recognition for STT and gTTS for TTS functionality.',
      image: Mic,
      category: 'Python',
      technologies: ['Python', 'Streamlit', 'speech_recognition', 'gTTS'],
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Audio file support',
        'Multiple language support'
      ],
      liveUrl: 'https://python-projects-kfskjs9upkeig4gzandsoj.streamlit.app/',
      githubUrl: '#', // Placeholder
      status: 'Live'
    },
    {
      id: 3,
      title: 'Interactive Calculator',
      description: 'A clean and responsive calculator application demonstrating JavaScript fundamentals, DOM manipulation, and modern UI design principles.',
      image: Calculator,
      category: 'Web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      features: [
        'Basic arithmetic operations',
        'Keyboard support',
        'Responsive design',
        'Clean user interface'
      ],
      liveUrl: 'https://nchakradhar-singh1.github.io/calculator/',
      githubUrl: 'https://github.com/NCHAKRADHAR-SINGH1/calculator',
      status: 'Live'
    }
  ]

  const categories = ['All', 'AI/ML', 'Python', 'Web']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work in web development, AI applications, and Python programming
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className={`${
                  filter === category 
                    ? 'bg-gradient-primary hover:shadow-glow' 
                    : 'border-border hover:border-primary/50'
                } transition-all duration-300 focus-ring`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                {/* Project Image/Icon */}
                <div className="relative p-8 bg-gradient-surface">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <project.image className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-success text-success-foreground">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  {/* Category & Title */}
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-muted/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow group/btn"
                      asChild
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Globe className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:border-primary/50 group/btn"
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-surface border-border/50 inline-block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-1">More Projects Coming Soon!</h3>
                  <p className="text-sm text-muted-foreground">
                    I'm always working on new and exciting projects.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects