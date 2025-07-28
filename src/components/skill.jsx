import { useInViewAnimation } from './Ani';

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS",
  "Node.js", "Express.js", "MongoDB", "Python",
   "Git", "GitHub"
];

export default function Skills() {
  const [ref, inView] = useInViewAnimation();

  return (
    <section
      ref={ref}
      className={`section transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
       <h2 className="section-title text-3xl font-bold text-center mb-8 animate-glow-outline">
        ⚙️ Technology Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
  {skills.map((skill, index) => (
    <div key={index} className="skill-card">
      {skill}
    </div>
  ))}
</div>

    </section>
  );
}
