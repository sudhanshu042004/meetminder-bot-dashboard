
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BotIcon, Headphones, MessageSquare, VideoIcon } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <BotIcon className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">MeetMinder</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="#features" className="text-muted-foreground hover:text-foreground transition">Features</Link>
              <Link to="#how-it-works" className="text-muted-foreground hover:text-foreground transition">How it works</Link>
              <Link to="#pricing" className="text-muted-foreground hover:text-foreground transition">Pricing</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Never miss a meeting detail again
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            MeetMinder sends an AI assistant to your meetings to capture everything, 
            create transcripts, and provide intelligent summaries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="px-8">Get started for free</Button>
            </Link>
            <Link to="#how-it-works">
              <Button size="lg" variant="outline" className="px-8">See how it works</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Powerful features to enhance your meetings</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <VideoIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">AI Meeting Attendance</h3>
              <p className="text-muted-foreground">
                Our bot joins meetings on your behalf and captures every detail so you never miss important information.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Full Transcripts</h3>
              <p className="text-muted-foreground">
                Get complete, searchable transcripts of your meetings with speaker identification and timestamps.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">AI Chat & Summaries</h3>
              <p className="text-muted-foreground">
                Chat with our AI about meeting content, get summaries, and extract key action items and decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How MeetMinder works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Enter meeting link</h3>
              <p className="text-muted-foreground">
                Paste your meeting URL from Google Meet, Zoom, or Microsoft Teams
              </p>
            </div>
            
            <div>
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Bot attends for you</h3>
              <p className="text-muted-foreground">
                Our AI assistant joins the meeting and records everything
              </p>
            </div>
            
            <div>
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium mb-3">View transcript</h3>
              <p className="text-muted-foreground">
                Access the full transcript with speaker identification
              </p>
            </div>
            
            <div>
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                <span className="font-bold">4</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Chat with AI</h3>
              <p className="text-muted-foreground">
                Ask questions about the meeting and get personalized insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section placeholder */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Start for free, upgrade when you need more features
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free plan */}
            <div className="border rounded-lg p-8 flex flex-col h-full">
              <h3 className="text-xl font-medium mb-2">Free</h3>
              <div className="text-4xl font-bold mb-6">$0</div>
              <ul className="mb-8 flex-1 space-y-3 text-left">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Up to 3 meetings per month</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic transcripts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Meeting summaries</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Get started</Button>
            </div>
            
            {/* Pro plan */}
            <div className="border rounded-lg p-8 flex flex-col relative bg-primary/5 border-primary">
              <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-medium mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">$29</div>
              <ul className="mb-8 flex-1 space-y-3 text-left">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited meetings</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced transcripts with speaker ID</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited AI chat queries</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Action items extraction</span>
                </li>
              </ul>
              <Button className="w-full">Upgrade to Pro</Button>
            </div>
            
            {/* Enterprise plan */}
            <div className="border rounded-lg p-8 flex flex-col h-full">
              <h3 className="text-xl font-medium mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="mb-8 flex-1 space-y-3 text-left">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>SSO & advanced security</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom API integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Contact sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <BotIcon className="h-6 w-6 text-primary mr-2" />
                <span className="font-bold">MeetMinder</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Your AI meeting assistant that captures, transcribes, and summarizes your meetings.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                  <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Roadmap</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8">
            <p className="text-center text-muted-foreground text-sm">
              © 2025 MeetMinder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
