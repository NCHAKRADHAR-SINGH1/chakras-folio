import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Code2, 
  Globe, 
  Database, 
  Wrench, 
  Brain,
  GitBranch,
  Terminal
} from 'lucide-react'

const Coffee = ({ className }: { className?: string }) => (
  <div className={className}>☕</div>
)

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Problem Solving',
      icon: Code2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        { name: 'Python', level: 90, icon: Code2 },
        { name: 'Java', level: 70, icon: Coffee },
        { name: 'Data Structures & Algorithms', level: 85, icon: Brain },
        { name: 'Problem Solving', level: 88, icon: Brain }
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      skills: [
        { name: 'HTML', level: 95, icon: Code2 },
        { name: 'CSS', level: 90, icon: Code2 },
        { name: 'JavaScript', level: 80, icon: Code2 },
        { name: 'React', level: 65, icon: Code2 }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      icon: Wrench,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        { name: 'NumPy', level: 85 },
        { name: 'Pandas', level: 80 },
        { name: 'Matplotlib', level: 75 },
        { name: 'Django', level: 70 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      skills: [
        { name: 'MySQL', level: 80, icon: Database },
        { name: 'Git', level: 85, icon: GitBranch },
        { name: 'VS Code', level: 95, icon: Code2 },
        { name: 'Linux', level: 70, icon: Terminal }
      ]
    }
  ]


  return (
    <section id="skills" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I've worked with, continuously learning and improving
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {skill.icon && <skill.icon className="w-4 h-4 text-muted-foreground" />}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Other Skills */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">Other Strengths</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Logical Thinking',
                'Project Implementation',
                'Quick Learner',
                'Team Collaboration',
                'Problem Analysis',
                'Code Documentation',
                'Testing & Debugging',
                'Continuous Learning'
              ].map((strength, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="px-4 py-2 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  {strength}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
