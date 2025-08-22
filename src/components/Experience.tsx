import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Code, Database, Zap, TrendingUp } from 'lucide-react'

const Experience = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Web Application Development',
      description: 'Built small web apps using HTML, CSS, JavaScript, and Python',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python']
    },
    {
      icon: Database,
      title: 'Algorithm Implementation',
      description: 'Developed Python programs for algorithmic problems and data structures',
      technologies: ['Python', 'DSA', 'Problem Solving']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Completed hands-on exercises in DBMS, SQL, and PL/SQL',
      technologies: ['MySQL', 'SQL', 'PL/SQL', 'Database Design']
    },
    {
      icon: TrendingUp,
      title: 'Rapid Learning & Adaptation',
      description: 'Demonstrated quick learning and adoption of new technologies',
      technologies: ['Self-Learning', 'Documentation', 'Research']
    }
  ]

  const learningStats = [
    { label: 'Projects Built', value: '10+', icon: Code },
    { label: 'Technologies Learned', value: '15+', icon: Zap },
    { label: 'Problem Solving Hours', value: '200+', icon: TrendingUp },
    { label: 'Code Commits', value: '500+', icon: CheckCircle }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Practical Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hands-on learning through coursework, personal projects, and continuous skill development
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
          </div>

          {/* Learning Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {learningStats.map((stat, index) => (
              <Card key={index} className="p-4 text-center hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Experience Highlights */}
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground mb-4">{highlight.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {highlight.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Learning Philosophy */}
          <Card className="mt-12 p-8 bg-gradient-surface border-border/50">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">My Learning Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in learning by doing. Every project is an opportunity to explore new concepts, 
                solve real problems, and improve my skills. I focus on understanding fundamentals while 
                staying updated with modern technologies and best practices.
              </p>
              
              <div className="flex items-center justify-center space-x-8 mt-8">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-sm font-medium">Hands-on Learning</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-sm font-medium">Project-Based</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-sm font-medium">Continuous Growth</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Experience