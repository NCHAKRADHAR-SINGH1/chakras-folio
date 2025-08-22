import { Card } from '@/components/ui/card'
import { MapPin, GraduationCap, Heart } from 'lucide-react'

const About = () => {
  const quickFacts = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tirupati, Andhra Pradesh, India'
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech Computer Science (Expected 2027)'
    },
    {
      icon: Heart,
      label: 'Interests',
      value: 'AI/ML, Web Development, Problem Solving'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center md:text-left">
              <div className="relative inline-block">
                <div className="w-64 h-64 bg-gradient-primary rounded-full flex items-center justify-center mx-auto md:mx-0 hover-glow transition-smooth">
                  <div className="w-56 h-56 bg-surface rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-gradient">CS</span>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-float">
                  Python
                </div>
                <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium animate-float" style={{ animationDelay: '2s' }}>
                  Web Dev
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Designing Solutions, Not Just Visuals</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a Computer Science undergraduate focused on Python, web development, and data structures & algorithms. 
                  I enjoy building practical projects, exploring new tools, and writing clean, maintainable code.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Currently seeking opportunities in software engineering and web development where I can contribute 
                  my skills and continue learning from experienced developers.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="space-y-4">
                {quickFacts.map((fact, index) => (
                  <Card key={index} className="p-4 hover-lift border-border/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <fact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">{fact.label}</div>
                        <div className="font-semibold">{fact.value}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About