import { skillCategories } from "../data/skills";

export default function Skills() {

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:translateY-[-4px]"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
