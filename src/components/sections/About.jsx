import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    // Frontend Skills
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "TailwindCSS",
        "ReactJS",
        "NextJS",
        "React Native"
    ];

    // Backend Skills
    const backendSkills = [
        "Python",
        "Django",
        "Django REST Framework",
        "JWT Authentication",
        "PostgreSQL",
    ];

    // Tools & Other Skills
    const toolsSkills = [
        "Figma",
        "Canva",
        "Git / GitHub",
        "Axios",
        "Postman"
    ];

    const aiSkills = [
        "OpenAI GPT API Integration",
        "Google Gemini API Integration"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="rounded-xl  p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm passionate about art and technology, combining creativity with coding to build digital experiences. I continuously explore new technologies to grow as a versatile full-stack developer.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg font-bold-mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg font-bold-mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg font-bold-mb-4">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {toolsSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg font-bold-mb-4">AI / API Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {aiSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>
                                        B.S. in Information Technology
                                    </strong> - The Women University Multan (2021 - 2025)
                                </li>
                                <li>
                                    Relevent Coursework: ICT, Software Engineering, IT-Management, Computer Architecture, IT-Infrastructure, Web Technologies, Mobile Application Development , Data Structure, Database Managment...
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Frontend Developer Intern at Edusoft System Solutions Multan (2025 - Present)</h4>

                                    <p>Working on React development and building responsive frontends.</p>

                                </div>
                                <div>
                                    <h4 className="font-semibold">Intern at Greenfin Technologies (2024)</h4>
                                    <p>Worked on responsive web pages using Bootstrap, designed mockups with Figma & Canva, and contributed to SRS documentation.</p>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}