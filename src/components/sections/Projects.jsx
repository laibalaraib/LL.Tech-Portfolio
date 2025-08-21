import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0,2)] "
                        >
                            <h3 className="text-xl font-bold mb-2">AI-Enhanced Task and Incident Management Web App for Restaurants
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Streamlines restaurant operations with AI-powered task management, incident handling, and sentiment-based complaint resolution. Provides role-based dashboards, predictive analytics, and offline PWA support for efficient and intelligent restaurant management.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["JS", "Bootstrap", "NextJS", "Django", "Postgres", "Google Gemini API"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                )
                                )}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/laibalaraib/rims-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                                >
                                    View Project ⟶
                                </a>
                            </div>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0,2)] "
                        >
                            <h3 className="text-xl font-bold mb-2">Learnify App
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A mobile learning app built with React Native (Expo Go) that features role-based navigation, form validation, and CRUD operations through MockAPI, with gradient UI and toast notifications for a smooth user experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["JS", "React Native", "Expo Go", "Expo Router", "MockAPI (CRUD)", "Toast Notifications"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                )
                                )}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/laibalaraib/React-Native-Expo-Go-App"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                                >
                                    View Project ⟶
                                </a>
                            </div>


                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0,2)] "
                        >
                            <h3 className="text-xl font-bold mb-2">Frontend Mini Projects
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A collection of small web projects created to strengthen my frontend development skills. The folder includes interactive apps (Calculator, To-Do List, Rock Paper Scissors), website clones (Amazon UI), and responsive design practice projects. These projects highlight my ability to work with DOM manipulation, user interaction logic, and responsive layouts.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML5", "CSS3", "Bootstrap5", "JavaScript (Vanilla)"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                )
                                )}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/laibalaraib/frontend-mini-projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                                >
                                    View Project ⟶
                                </a>
                            </div>


                        </div>


                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0,2)] "
                        >
                            <h3 className="text-xl font-bold mb-2">PondPro Website Clone
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A responsive clone of the PondPro 2000 website, built during my internship with a focus on clean design, interactivity, and seamless user experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML5", "CSS3", "Bootstrap5", "JavaScript (Vanilla)"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/laibalaraib/pondpro-project-clone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                                >
                                    View Project ⟶
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}