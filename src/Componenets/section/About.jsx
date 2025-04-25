import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "CSS", "HTML", "JavaScript"];
    const backendSkills = ["C++", "Java"];
  
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
    <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
  
          <div className="rounded-xl p-8 border border-white/10 hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer eager to improve his developing skills in
              order to create reliable and innovative solutions.
            </p>
  
            {/* Frontend and Backend side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
  
              {/* Backend */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                    <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
        </div>
  
            {/* Education and Work Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Information Technology</strong> – The Co-operative
                    University of Kenya (2023–Present)
                  </li>
                  <li>High School: Starehe Boys' Center and School</li>
                </ul>
              </div>
  
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Attachment at Systech Limited (2025 – Present)
                    </h4>
                    <p>
                      Learned various programming languages like JavaScript and
                      Java.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Attachee at Kenyan Ministry of Sports (2025)
                    </h4>
                    <p>Helped in regular IT support and maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </RevealOnScroll>
      </section>
    );
  };
  