import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Palette, 
  Code, 
  Database, 
  Bot,
  ArrowRight,
  Sparkles,
  Layers,
  Zap
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive wireframes, prototypes, and usability-first layouts that provide excellent user experiences.',
      features: [
        'Wireframing & Prototyping',
        'User Research',
        'Responsive Design',
        'Accessibility Focus'
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Code,
      title: 'Web Design & Development',
      description: 'Building responsive websites with clean components, modern frameworks, and efficient backend solutions.',
      features: [
        'Responsive Web Design',
        'React Development',
        'Python/Django Backend',
        'Clean Code Practices'
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradient: 'from-secondary/20 to-secondary/5'
    },
    {
      icon: Bot,
      title: 'AI/ML Applications',
      description: 'Developing intelligent applications using Python libraries for data analysis, visualization, and machine learning.',
      features: [
        'Data Analysis',
        'Python Libraries (NumPy, Pandas)',
        'Data Visualization',
        'AI Integration'
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradient: 'from-primary/20 to-primary/5'
    }
  ]

  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Can Do For You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining creativity with technical expertise to deliver solutions that make a difference
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group p-6 hover-lift border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80"
                    onClick={handleContactClick}
                  >
                    Let's Discuss
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Working Process */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">My Working Process</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach to deliver high-quality results on time
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Database, title: 'Research & Planning', description: 'Understanding requirements and planning the approach' },
                { icon: Layers, title: 'Design & Development', description: 'Creating and implementing the solution' },
                { icon: Code, title: 'Testing & Optimization', description: 'Ensuring quality and performance' },
                { icon: Zap, title: 'Delivery & Support', description: 'Deployment and ongoing maintenance' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Services