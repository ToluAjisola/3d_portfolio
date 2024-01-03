import React from 'react'

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Tolu
        </span>{" "}
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Bachelor's Degree and experience working in a company. I picked up many
          skills along the way
          </p>
      </div>
    </section>
  );
}

export default About