import { FC } from 'react';
import Image from 'next/image';

const About: FC = () => {
  // Dynamic data
  const aboutData = {
    title: "About This Blog",
    intro: "Welcome to my tech blog! Here, I share my experiences, challenges, and insights on various tech-related topics.",
    sections: [
      {
        heading: "About Me",
        text: "Hi, I'm Hammad! I'm a passionate web developer with a love for coding, designing, and creating dynamic websites. I believe in the power of technology to solve problems and improve lives. Join me as I dive deep into the world of tech!",
        image: "/about.jpg"
      },
      {
        heading: "What This Blog is About",
        text: "This blog is dedicated to all things tech – from web development tips and tutorials to the latest in tech trends. Whether you're a beginner or a pro, you'll find something here that will inspire and help you in your tech journey.",
        image: "/aboutblog.jpg"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto mt-[170px] p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">{aboutData.title}</h1>
        <p className="mt-4 text-xl text-gray-600">{aboutData.intro}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutData.sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={section.image}
              alt={section.heading}
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <h2 className="mt-6 text-3xl font-semibold text-gray-800">{section.heading}</h2>
            <p className="mt-2 text-lg text-gray-600 text-center">{section.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600">Thanks for visiting my blog! Stay tuned for more articles and updates.</p>
      </div>
    </div>
  );
};

export default About;
