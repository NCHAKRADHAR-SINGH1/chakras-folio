import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Annamacharya Institute of Technology and Sciences',
      location: 'Tirupati, Andhra Pradesh',
      period: 'Expected 2027',
      status: 'Current',
      focus: ['Data Structures', 'Algorithms', 'Web Development', 'Python Programming'],
      description: 'Pursuing comprehensive education in computer science fundamentals with hands-on project experience.'
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Sri Chaithanya College',
      location: 'Tirupati',
      period: '2023',
      status: 'Completed',
      focus: ['Mathematics', 'Physics', 'Chemistry'],
      description: 'Strong foundation in analytical thinking and problem-solving skills.'
    },
    {
      degree: 'Secondary (10th)',
      institution: 'Ravindra Bharathi',
      location: 'Tirupati',
      period: '2021',
      status: 'Completed',
      focus: ['Science', 'Mathematics'],
      description: 'Built fundamental academic skills and developed interest in technology.'
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic path focused on building strong fundamentals in computer science and problem-solving
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="p-6 hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge 
                          variant={edu.status === 'Current' ? 'default' : 'secondary'}
                          className={edu.status === 'Current' ? 'bg-gradient-primary' : ''}
                        >
                          {edu.status}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>

                      {/* Degree & Institution */}
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2 flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                          {edu.degree}
                        </h3>
                        <p className="font-medium text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{edu.description}</p>

                      {/* Focus Areas */}
                      <div>
                        <p className="text-sm font-medium mb-2">Focus Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.focus.map((area, focusIndex) => (
                            <Badge 
                              key={focusIndex} 
                              variant="outline"
                              className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                            >
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education