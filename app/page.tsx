"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Menu, X, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useScrollPosition } from "./hooks/useScrollPosition"
import { useScrollProgress } from "./hooks/useScrollProgress"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const scrollPosition = useScrollPosition()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  useScrollProgress(scrollContainerRef)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
              setMobileMenuOpen(false)
            }}
            className="font-bold text-xl hover:text-primary transition-colors"
          >
            Vinay
          </button>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Vinay-ponugoti" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/vinay-ponugoti" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 px-6 space-y-4 bg-background border-t">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up">
              Hi, I'm <span className="text-primary">Vinay Ponugoti</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200">
              I'm a developer passionate about building beautiful and functional web applications.
            </p>
            <div className="flex gap-4 pt-4 animate-fade-in-up animation-delay-400 justify-center">
              <Button asChild>
                <button onClick={() => scrollToSection("contact")}>Get in touch</button>
              </Button>
              <Button variant="outline" asChild>
                <button onClick={() => scrollToSection("projects")}>View my work</button>
              </Button>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="bg-muted py-16">
          <div className="container space-y-6">
            <h2 className="text-3xl font-bold text-center">About Me</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg">
                I'm a passionate developer with experience in building web applications using modern technologies. I
                enjoy solving complex problems and creating intuitive user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-16 space-y-8">
          <h2 className="text-3xl font-bold text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Ether.js</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>Python</Badge>
                  <Badge>Django</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>REST API</Badge>
                  <Badge>Blockchain</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Agile</Badge>
                  <Badge>Ubuntu</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted py-16">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold text-center">My Projects</h2>
            <div className="relative">
              <div className="overflow-x-auto pb-4 scrollbar-hide" ref={scrollContainerRef}>
                <div className="inline-flex gap-6 min-w-full px-[1px]">
                  <Card className="overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0">
                    <div className="relative h-48">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/voteing-gd9bUO6F8iiyiMuVbiptpagqGYORhM.png"
                        alt="Blockchain Voting Application"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">Blockchain Voting System</h3>
                      <p className="text-muted-foreground">
                        A decentralized voting application with MetaMask integration, allowing secure and transparent
                        voting on the blockchain.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Solidity</Badge>
                        <Badge variant="outline">Web3.js</Badge>
                        <Badge variant="outline">MetaMask</Badge>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0">
                    <div className="relative h-48">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-28%20230603-Mr1ifdy8V0F89Fh51WZOGGjQScQrza.png"
                        alt="Blockchain Explorer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">ChainHub Explorer</h3>
                      <p className="text-muted-foreground">
                        A multi-chain blockchain explorer with real-time transaction tracking and lightning-fast lookups
                        across multiple networks.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Web3</Badge>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link
                            href="https://github.com/Vinay-ponugoti/chainhub"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href="https://chainhub.onrender.com" target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0">
                    <div className="relative h-48">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-01%20000136-CP7fV4e7yCSKoqLGMtiXLzBK8Hamfp.png"
                        alt="Personal Finance Tracker"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">Personal Finance Tracker</h3>
                      <p className="text-muted-foreground">
                        A comprehensive finance management tool for tracking expenses, categorizing transactions, and
                        predicting future spending patterns.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Python</Badge>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link
                            href="https://github.com/Vinay-ponugoti/Financial-tracker"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-muted-foreground/10 mt-4">
                <div
                  className="h-full bg-primary/50 w-1/3 transition-all duration-300"
                  style={{
                    transform: "translateX(var(--scroll-progress, 0))",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-16 space-y-8">
          <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto space-y-6">
            <p className="text-center text-muted-foreground">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="https://www.linkedin.com/in/vinay-ponugoti/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="flex gap-4" asChild>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  Ponugotivinay.v@gmail.com
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vinay Ponugoti. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
      {scrollPosition > 500 && (
        <Button className="fixed bottom-4 right-4 rounded-full" size="icon" onClick={scrollToTop}>
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

