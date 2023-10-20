import HorizontalScrollCarousel from './components/HorizotallScrollCarousel'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="content">
        <section id="hero">
          <div className="hero-hi">
            <h1>Hi, i am</h1>
          </div>
          <div>
            <h1 className="hero-name">Anıl.</h1>
          </div>
          <div>
            <p className="hero-des">
              As a recently graduated software developer, I am passionate about
              full stack development and game development. Discover my passion
              for pushing the boundaries of technology, unleashing creativity
              and bringing exciting projects to life on this portfolio page.
            </p>
          </div>
        </section>

        <section id="about">
          <h2 className="numbered-heading">About Me</h2>
          <div className="about-inner">
            <div className="about-text">
              <p>
                My name is Anıl Altan. I am a Software Engineer from Turkey.
              </p>
              <p>
                As a computer engineer, I love to learn new things and develop
                projects in the world of technology. In Web Development, I am
                familiar with technologies such as NextJS and ASP.NET. I can
                develop games with Unity.
              </p>
              <p>
                But my life is not limited to programming. Embarking on new
                adventures with video games, getting lost deep in the universe
                with astrophotogry, telling stories with photography and
                wandering among the flavours is for me enjoying life.
              </p>
              <p>
                It's my nature to dream and I aim to realise these ambitions. I
                look forward to taking a fresh step daily on my transformative
                journey.That's why I strive to acquire new knowledge every day -
                while producing innovative projects and having diverse
                experiences.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="skill-list">
                <li>Git</li>
                <li>C#</li>
                <li>NextJS</li>
                <li>Unity</li>
                <li>ASP.NET</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="about-pp">
              <Image
                src="/images/photo.jpg"
                width={500}
                height={625}
                alt="photo"
              />
            </div>
          </div>
        </section>

        <section id="projects">
          <h2 className="numbered-heading">Projects</h2>
          <HorizontalScrollCarousel />
        </section>

        <section id="contact">
          <h2 className="numbered-heading">Contact</h2>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
            If you'd like to collaborate on a project, get in touch, or just say
            "Hello," please don't hesitate to reach out. I'm always looking
            forward to hearing from you and responding promptly.
          </p>
          <a className="email-link" href="mailto:anlaltnn@gmail.com">
            anlaltnn@gmail.com
            <span className="overlay"></span>
          </a>

          <ul className="contact-list">
            <li>
              <a href="https://www.linkedin.com/in/anilaltan/" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/anilaltan" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/altn_anl/" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
