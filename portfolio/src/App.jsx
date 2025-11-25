import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
return (
<div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
<div className="max-w-7xl mx-auto px-6">
<Navbar />
<main className="space-y-24">
<Hero />
<About />
<Skills />
<Projects />
<Contact />
</main>
<Footer />
</div>
</div>
)
}