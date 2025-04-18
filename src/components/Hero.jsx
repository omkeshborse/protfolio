import heroImg from "../assets/hero-2.svg";
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
function Hero() {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className=" text-7xl font-bold tracking-wider">
            I&apos;m omkesh
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wider">
            Software Engineer
          </p>

          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wider ">
            turning ideas into interactive reality
          </p>
          <div className=" flex gap-x-4 mt-4">
            <a href="https://github.com/omkeshborse">
              <FaGithubSquare className="h-8 w-8 text-slate-600 hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/in/omkeshborse/">
              <FaLinkedinIn className="h-8 w-8 text-slate-600 hover:text-black" />
            </a>
            <a href="https://twitter.com/1omkesh1/">
              <FaTwitterSquare className="h-8 w-8 text-slate-600 hover:text-black" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="hero image" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
}
export default Hero;
