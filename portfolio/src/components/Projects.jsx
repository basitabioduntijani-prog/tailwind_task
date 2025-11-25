import React from 'react'
import projects from '../data/projects'


export default function Projects() {
return (
<section id="projects" className="py-12">
<h2 className="text-2xl font-bold">Projects</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
{projects.map((p) => (
<article key={p.id} className="card flex flex-col md:flex-row gap-4 items-center">
<img src={p.image} alt={p.title} className="w-full md:w-48 h-32 object-cover rounded-lg" />
<div className="flex-1">
<h3 className="font-semibold">{p.title}</h3>
<p className="text-sm text-slate-600 mt-2">{p.description}</p>
<div className="mt-3 flex gap-3 items-center">
<a href={p.live} className="text-sm underline">Live</a>
<a href={p.repo} className="text-sm underline">Code</a>
</div>
</div>
</article>
))}
</div>
</section>
)
}