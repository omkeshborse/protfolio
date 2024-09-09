import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
function About() {
  return (
    <section className=" bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text={"MERN Stack Developer"} />
          <p className=" text-slate-600 mt-8 leading-loose">
            I am a passionate MERN Stack Developer with expertise in MongoDB,
            Express.js, React.js, and Node.js. My technical skills include
            front-end technologies such as JavaScript (ES6+), React.js, HTML,
            CSS, Tailwind, and Redux. On the back-end, I am proficient in
            Node.js, Express.js, and Mongoose, and have experience with Spring
            and Spring Boot. I also work with JavaScript and Java, and utilize
            tools like Git, GitHub, Postman, and VS Code. I am skilled in
            database management with MongoDB and SQL and excel in
            problem-solving and communication.
          </p>
        </article>
      </div>
    </section>
  );
}
export default About;
