import featuredImg from "../assets/featured.jpg";
import related1 from "../assets/related1.jpg";
import related2 from "../assets/related2.jpg";
import related3 from "../assets/related3.jpg";

export default function BlogPost() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Featured Image */}
      <div className="mb-6">
        <img
          src={featuredImg}
          alt="Featured"
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Title & Metadata */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          How to Build a Responsive Blog Layout with TailwindCSS
        </h1>
        <div className="text-gray-500 text-sm md:text-base flex flex-wrap gap-4">
          <span>By Tijani Basit</span>
          <span>Nov 15, 2025</span>
          <span>5 min read</span>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="md:flex md:gap-8">
        {/* Main Content (2/3 width) */}
        <div className="md:w-2/3 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Building a responsive blog layout is essential for modern web design. 
            With readers accessing content from a variety of devices, 
            it’s important that your layout adapts smoothly to both mobile and desktop screens.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Using TailwindCSS makes this task much easier. 
            Its utility-first approach allows developers to quickly apply responsive classes, 
            adjust spacing, and maintain a clean design without writing custom CSS for every element.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Subheading Example</h2>
          <p className="text-gray-700 leading-relaxed">
            More content goes here. TailwindCSS makes it simple to create
            responsive layouts with utility classes.
          </p>
        </div>

        {/* Sidebar (1/3 width) */}
        <aside className="md:w-1/3 mt-8 md:mt-0">
          <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <img src={related1} alt="Related 1" className="w-20 h-20 object-cover rounded" />
              <div>
                <p className="font-semibold">Understanding Flexbox in TailwindCSS</p>
                <p className="text-gray-500 text-sm">Nov 10, 2025</p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={related2} alt="Related 2" className="w-20 h-20 object-cover rounded" />
              <div>
                <p className="font-semibold">Building Responsive Navbars Easily</p>
                <p className="text-gray-500 text-sm">Nov 8, 2025</p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={related3} alt="Related 3" className="w-20 h-20 object-cover rounded" />
              <div>
                <p className="font-semibold">TailwindCSS Typography Tips</p>
                <p className="text-gray-500 text-sm">Nov 5, 2025</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
