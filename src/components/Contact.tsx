import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code2,
  Copy,
  Check,
  MessageCircle,
  ExternalLink
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Contact = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chakri.august2006@gmail.com',
      href: 'mailto:chakri.august2006@gmail.com',
      copyValue: 'chakri.august2006@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 90004 13656',
      href: 'tel:+919000413656',
      copyValue: '+919000413656'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tirupati, Andhra Pradesh, India',
      href: null,
      copyValue: 'Tirupati, Andhra Pradesh, India'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'NCHAKRADHAR-SINGH1',
      href: 'https://github.com/NCHAKRADHAR-SINGH1',
      color: 'hover:text-foreground',
      bg: 'hover:bg-foreground/10'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'n-chakradhar-singh',
      href: 'http://www.linkedin.com/in/n-chakradhar-singh-18a046360',
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-600/10'
    },
    {
      icon: Code2,
      label: 'LeetCode',
      value: 'chakradharSingh',
      href: 'https://leetcode.com/u/chakradharSingh/',
      color: 'hover:text-orange-600',
      bg: 'hover:bg-orange-600/10'
    }
  ]

  const handleCopy = async (value: string, field: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(field)
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
      })
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-4 hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="font-medium">{contact.value}</div>
                        )}
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(contact.copyValue, contact.label)}
                      className="focus-ring"
                    >
                      {copiedField === contact.label ? (
                        <Check className="w-4 h-4 text-success" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </Card>
              ))}

              {/* Availability Card */}
              <Card className="p-6 bg-gradient-primary border-0 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="font-medium">Currently Available</span>
                </div>
                <p className="text-white/90 text-sm">
                  Open to internship opportunities, freelance projects, and full-time positions in software development.
                </p>
              </Card>
            </div>

            {/* Social Links & Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Find Me Online</h3>
              
              {socialLinks.map((social, index) => (
                <Card key={index} className="p-4 hover-lift border-border/50 bg-card/50 backdrop-blur-sm group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-colors ${social.bg}`}>
                        <social.icon className={`w-5 h-5 transition-colors ${social.color}`} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{social.label}</div>
                        <div className="font-medium">{social.value}</div>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="focus-ring group-hover:bg-primary/10"
                    >
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}

              {/* Quick Message Card */}
              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <h4 className="font-semibold mb-3">Prefer Email?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Drop me a line and I'll get back to you as soon as possible.
                </p>
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow group"
                  asChild
                >
                  <a href="mailto:chakri.august2006@gmail.com?subject=Project%20Inquiry&body=Hi%20Chakradhar,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0D%0A%0D%0ABest%20regards">
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Send Email
                  </a>
                </Button>
              </Card>

              {/* Response Time */}
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-sm text-muted-foreground">
                  💡 <strong>Typical response time:</strong> 24-48 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact