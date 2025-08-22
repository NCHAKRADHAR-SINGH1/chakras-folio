import { Button } from '@/components/ui/button'
import { 
  Github, 
  Linkedin, 
  Mail,
  Heart,
  ArrowUp,
  Code2
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/NCHAKRADHAR-SINGH1',
      label: 'GitHub'
    },
    { 
      icon: Linkedin, 
      href: 'http://www.linkedin.com/in/n-chakradhar-singh-18a046360',
      label: 'LinkedIn'
    },
    { 
      icon: Mail, 
      href: 'mailto:chakri.august2006@gmail.com',
      label: 'Email'
    },
    { 
      icon: Code2, 
      href: 'https://leetcode.com/u/chakradharSingh/',
      label: 'LeetCode'
    }
  ]

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CS</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Nagaram Chakradhar Singh</h3>
                <p className="text-sm text-muted-foreground">B.Tech CSE • Python Developer</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              Passionate about creating innovative solutions through code. 
              Always eager to learn and contribute to meaningful projects.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/10 hover:border-primary/50 focus-ring"
                  asChild
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm focus-ring"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <div>
                <div className="text-muted-foreground">Email</div>
                <a 
                  href="mailto:chakri.august2006@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  chakri.august2006@gmail.com
                </a>
              </div>
              <div>
                <div className="text-muted-foreground">Phone</div>
                <a 
                  href="tel:+919000413656"
                  className="hover:text-primary transition-colors"
                >
                  +91 90004 13656
                </a>
              </div>
              <div>
                <div className="text-muted-foreground">Location</div>
                <div>Tirupati, Andhra Pradesh</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Nagaram Chakradhar Singh</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary/10 hover:border-primary/50 focus-ring group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer