import React from 'react'

const About = () => {

  const skills = [
    { image:'https://img.icons8.com/color/144/html-5--v1.png' , name: 'HTML', description: 'Markup language for building web pages.' },
    { image:'https://img.icons8.com/fluency/144/css3.png' , name: 'CSS', description: 'Style sheet language for designing beautiful websites.' },
    { image:'https://img.icons8.com/fluency/144/javascript.png' , name: 'JavaScript', description: 'Programming language for adding interactivity.' },
    { image:'https://img.icons8.com/color/144/sass.png' , name: 'SASS', description: 'CSS preprocessor for cleaner, reusable code.' },
    { image:'https://img.icons8.com/color/144/tailwindcss.png' , name: 'TailwindCSS', description: 'Utility-first CSS framework for rapid design.' },
    { image:'https://img.icons8.com/color-glass/144/bootstrap.png' , name: 'Bootstrap 5', description: 'Responsive design framework for fast development.' },
    { image:'https://img.icons8.com/plasticine/144/react.png' , name: 'React.js', description: 'JavaScript library for building user interfaces.' },
  ];

  return (
    <section
      id="about"
      className="text-white flex flex-col items-center justify-center w-full" data-aos="fade-down"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 z-20 bg-[#0B3142] py-10 w-full">
        {/* Informasi tentang saya */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
          Hi guys ! My name is Hanif Romdhon Anwary, I am an English Education student at Sayyid Ali Rahmatullah University, Tulungagung, 
          who is also passionate about front-end development. With a unique combination of academic background and 
          technical expertise, I blend creativity and communication skills to deliver interactive and user-friendly websites.
          </p>
          <p className="text-lg leading-relaxed mb-4">
          Currently, I am proficient in HTML, CSS, JavaScript, Bootstrap 5, and TailwindCSS. I am also actively learning React.js as a stepping stone to mastering Next.js in the future. To enhance my skills, I frequently work on landing pages and simple web applications.
          </p>
        </div>
        {/* Card di sisi kanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[400px] overflow-y-auto overflow-x-hidden">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition hover:scale-90 hover:shadow-2xl"
    >
      <div>
        <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-4" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
      <p className="text-base text-center">{skill.description}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default About;
