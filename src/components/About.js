import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
          About
        </h2>
        <div className="w-24 h-1 bg-white mx-auto mb-12"></div>

        <div className="mb-12">
          <img
            src="https://naderemad.github.io/nader-wear/images/pic03.jpg"
            alt="About AngeLo Wear"
            className="w-full max-w-md mx-auto rounded-lg mb-8"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <span className="text-brand-blue font-bold text-xl">
              Ange<span className="text-brand-red">L</span>o
            </span>{' '}
            is more than just clothing — it's a lifestyle.
          </p>

          <p>
            Inspired by gaming, anime, and modern street culture,
            we create pieces that speak to those who live differently.
          </p>

          <p>
            Every design is made to represent confidence, individuality,
            and the mindset of leveling up — in style and in life.
          </p>

          <p>
            This is for gamers, creators, and anyone who believes
            that what you wear should say who you are.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
