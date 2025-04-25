import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section id="projects" 
    className="min-h-screen flex items-centre justify-center py-20"
    >
    <RevealOnScroll>
        <div className="max-w-5xl px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
            >
                {" "}
                Featured Projects
                
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="flex px-2 text-xl font-bold mb-2"> Student Attendance Management System</h3>
                    <p className="flex text-grey-400 mb-5">
                        Student class attendance management system with the ability
                        to record student attendance and calculate their attendance
                        grades 
                    </p>
                    <div className="items-center justify-center flex flex-wrap gap-2 mb-4">
                        {["Python", "HTML/CSS", "Django"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                "
                            >
                                {tech}
                            </span>
                        ))} 
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                            href="#" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                            {" "} 
                            View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="flex px-2 text-xl font-bold mb-2"> To Do List</h3>
                    <p className="flex text-grey-400 mb-5">
                        An interactive to-do system that accepts and stores a user's input
                        in the form of to-do and is also able to edit and delete them. 
                    </p>
                    <div className="items-center justify-center flex flex-wrap gap-2 mb-4">
                        {["React", "HTML/CSS"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                "
                            >
                                {tech}
                            </span>
                        ))} 
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                            href="#" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                            {" "} 
                            View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="flex px-5 text-xl font-bold mb-2"> Portfolio</h3>
                    <p className="flex text-grey-400 mb-5">
                        A digital interactive portfolio that displays a user's Information,
                        Projects and Contacts
                    </p>
                    <div className="items-center justify-center flex flex-wrap gap-2 mb-4">
                        {["React", "HTML", "Tailwind CSS"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                "
                            >
                                {tech}
                            </span>
                        ))} 
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                            href="#" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                            {" "} 
                            View Project → </a>
                    </div>
                </div>

                </div>
            </div>
    </RevealOnScroll>
    </section>
    
};