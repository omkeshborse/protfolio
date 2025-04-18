import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
function About() {
  return (
    <section className=" bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text={"🚀 Full Stack Developer (Backend)"} />
          <p className=" text-slate-600 mt-8 leading-loose">
            I’m a Full Stack Software Developer with strong expertise in Java,
            Spring Boot, and the MERN Stack (MongoDB, Express.js, React.js,
            Node.js). I specialize in building scalable backend systems and
            efficient front-end interfaces, driven by a passion for clean code
            and seamless user experiences. With hands-on experience in NestJS,
            PostgreSQL, MongoDB, AWS (EC2, S3), and Agile methodologies, I’ve
            developed and deployed robust web applications that enhance
            performance, reduce latency, and scale effectively. Whether it’s
            crafting high-performance APIs or optimizing system architecture, I
            bring a problem-solving mindset, strong communication skills, and a
            commitment to delivering quality in every project I work on.
          </p>
        </article>
      </div>
    </section>
  );
}
export default About;
