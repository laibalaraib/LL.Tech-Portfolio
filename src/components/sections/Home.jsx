import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative">

            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Laiba Laraib
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        A passionate web developer who loves turning ideas into clean, responsive, and user-friendly websites. Always exploring new technologies to create innovative digital experiences.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-teal-500 text-white py-3 px-6 rounded font-medium trasition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)">View Projects</a>

                        <a
                            href="#contact"
                            className="border border-teal-500/50 text-teal-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-teal-500/10"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}