import { skillsData } from '../data/skills';
import type { SkillCategory } from '../data/skills';
import { FadeIn } from '../components/animations/FadeIn';
import { SectionTitle } from '../components/ui/SectionTitle';

export const Skills = () => {
  // Group skills by category
  const categories: SkillCategory[] = ["Programming Languages", "Hardware", "Frontend", "Backend", "Database", "Tools", "Frameworks"];
  
  const groupedSkills = categories.reduce((acc, cat) => {
    const skillsInCategory = skillsData.filter(s => s.category === cat);
    if (skillsInCategory.length > 0) {
      acc[cat] = skillsInCategory;
    }
    return acc;
  }, {} as Record<string, typeof skillsData>);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My toolbox for building scalable and aesthetic digital products."
        />

        <div className="flex flex-col gap-16">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="relative">
              <FadeIn delay={0.1} direction="up">
                <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  {category}
                </h3>
              </FadeIn>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {skills.map((skill, i) => (
                  <FadeIn key={skill.name} delay={0.1 * i} direction="up">
                    <div className="glass p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 text-gray-300 group-hover:text-primary transition-colors border border-white/5 group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        <skill.icon size={32} />
                      </div>
                      <h4 className="font-semibold text-white mb-1">{skill.name}</h4>
                      {skill.level && (
                        <>
                          <p className="text-sm text-gray-400 mb-2">{skill.level}</p>
                          <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                              style={{
                                width: skill.level === 'Beginner' ? '25%' :
                                       skill.level === 'Intermediate' ? '50%' :
                                       skill.level === 'Advanced' ? '75%' : '100%'
                              }}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
