import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-slate-600 hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Welcome to My
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Space
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I'm a developer passionate about creating beautiful and functional web experiences. 
              This portfolio showcases my work and skills.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Get in Touch</Button>
              <Button variant="outline">View My Work</Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">👨‍💻</div>
            <p className="text-slate-600">Your professional image or illustration here</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 border-t border-slate-200">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition">
              <CardHeader>
                <Code2 className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Experienced in modern web technologies including React, TypeScript, and Tailwind CSS.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 hover:shadow-lg transition">
              <CardHeader>
                <Palette className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Passionate about creating beautiful user interfaces with attention to detail.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 hover:shadow-lg transition">
              <CardHeader>
                <Zap className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Focused on building fast, responsive, and accessible web applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Card key={i} className="border-slate-200 overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-48"></div>
                <CardHeader>
                  <CardTitle>Project {i}</CardTitle>
                  <CardDescription>A brief description of your project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    This is where you describe your project, the technologies used, and the impact it had.
                  </p>
                  <Button variant="ghost" className="gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-12 opacity-90">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <Button variant="secondary" className="gap-2">
              <Mail className="w-4 h-4" /> Email Me
            </Button>
            <Button variant="secondary" className="gap-2">
              <Github className="w-4 h-4" /> GitHub
            </Button>
            <Button variant="secondary" className="gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 My Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, Tailwind CSS, and ❤️</p>
        </div>
      </footer>
    </div>
  );
}
