import React from "react";
import featuredImg from "../assets/featured.jpg";
import { ArrowRight } from "lucide-react";

export default function NewsCard() {
  return (
    <div className="max-w-lg bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
      
      {/* Image */}
      <img 
        src={featuredImg} 
        alt="Featured" 
        className="w-full h-48 object-cover"
      />

      <div className="p-5 space-y-3">
        
        {/* Category Badge */}
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-naijaGreen/15 text-naijaGreen">
          Politics
        </span>

        {/* Headline */}
        <h2 className="text-xl font-bold leading-tight text-gray-900">
          Nigerian Senate Approves New Economic Reform Bill
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 line-clamp-3">
          The Nigerian Senate has passed a landmark economic reform bill aimed at improving
          foreign investment, strengthening small businesses, and enhancing national revenue...
        </p>

        {/* Footer info */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
          <div>
            <span className="font-medium text-gray-700">By Adeola Femi</span> • Jan 15, 2025
          </div>
          <span>5 min read</span>
        </div>

        {/* Read more */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-naijaGreen font-medium hover:text-naijaDarkGreen transition-all duration-300"
        >
          Read More <ArrowRight size={18} />
        </a>

      </div>
    </div>
  );
}
