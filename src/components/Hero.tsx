import { Button } from '@/components/ui/button'
import { Download, ArrowRight, Code2, Database, Cpu } from 'lucide-react'

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-glow"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-surface border border-border rounded-full mb-6 animate-fade-in-up">
            <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hello, I'm <br />
            <span className="text-gradient">Nagaram Chakradhar Singh</span>
          </h1>

          {/* Role & Skills */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center px-3 py-2 bg-primary/10 text-primary rounded-lg">
              <Code2 className="w-4 h-4 mr-2" />
              B.Tech CSE Undergrad
            </div>
            <div className="flex items-center px-3 py-2 bg-secondary/10 text-secondary-foreground rounded-lg">
              <Database className="w-4 h-4 mr-2" />
              Python Developer
            </div>
            <div className="flex items-center px-3 py-2 bg-primary/10 text-primary rounded-lg">
              <Cpu className="w-4 h-4 mr-2" />
              DSA Enthusiast
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Building clean, responsive web experiences and solving problems with Python & DSA. 
            A passionate learner from Tirupati focused on creating meaningful software solutions.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              onClick={handleScrollToProjects}
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-lift border-border hover:border-primary/50 group"
              onClick={handleScrollToContact}
            >
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">3+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">2+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">Passion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero