import Head from "next/head";
import { useState } from "react";
import DATA from "../static/_";
import { RiArrowRightDownLine, RiMovieLine } from "react-icons/ri";
import CV from "../components/cv";

export default function Home() {
  const [show, setShow] = useState(1);
  const [previewImage, setPreviewImage] = useState(-1);
  const [project, setProject] = useState(null);
  return (
    <>
      <div className="container">
        <Head>
          <title>Samuel — Designer, Skaterboard & Pizza Connoisseur.</title>
          <meta
            name="description"
            content="Samuel is a digital design & developer specialising in interaction, animation and motion."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          className={`container__face ${show === 1 ? "show" : "hidden"}`}
          style={{
            transform: `${show === 1 ? "rotateY(0deg)" : "rotateY(180deg)"}`,
            zIndex: `${show === 1 ? 5 : 0}`,
          }}
        >
          <div className="container__face__inner">
            <div className="involucro">
              <main className="principale">
                <div className="globale">
                  <div className="testo">
                    <p>
                      <label className="lista__titolo">About</label>
                      Samuel graduated in digital design & development and now a
                      passionate engineer specializing in interaction, animation, and
                      motion. Focusing on interactive user interface with rich
                      visuals and best practice in accessibility with scalable modern
                      technology. See his CV for more academic information{" "}
                      <span
                        className="lista__elemento lista__elemento--link"
                        onClick={() => setShow(2)}
                      >
                        Curriculum Vitae
                      </span>
                    </p>

                    <div>
                      <label className="lista__titolo">Recent Works</label>
                      <ul className="progettolista">
                        {DATA.map((project, index) => (
                          <div key={index} className="progettolista__elemento">
                            <h5
                              className="progettolista__elemento__titolo"
                              onClick={() => {
                                // setShow(2);
                                // setProject(
                                //   DATA.find(
                                //     (item) =>
                                //       item.name.toLowerCase() ===
                                //       project.name.toLowerCase()
                                //   )
                                // );
                                location.href = project.link;
                              }}
                            >
                              {project.name}
                              <RiArrowRightDownLine />
                            </h5>
                            <ul className="progettolista__elemento__lista">
                              {project.tech
                                .slice(0, 2)
                                .map((item) => item)
                                .join(", ")}
                            </ul>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="globale">
                  <ul className="lista">
                    <label className="lista__titolo">Who</label>
                    <li className="lista__elemento">Samuel Campbell</li>
                  </ul>
                  <ul className="lista mobile">
                    <label className="lista__titolo">Location</label>
                    <li className="lista__elemento">Edinburgh, UK</li>
                    <li className="lista__elemento">55.9533° N, 3.1883° W</li>
                  </ul>
                  <ul className="lista mobile">
                    <label className="lista__titolo">Email</label>
                    <li className="lista__elemento lista__elemento--link">
                      <a href="mailto:samsvk00@gmail.com?subject=inquiring about your services">
                        samsvk00@gmail.com
                      </a>
                    </li>
                  </ul>
                  <ul className="lista">
                    <label className="lista__titolo">Socials</label>
                    <li className="lista__elemento lista__elemento--link mobile">
                      <a href="mailto:samsvk00@gmail.com?subject=inquiring about your services">
                        Email
                      </a>
                    </li>
                    <li className="lista__elemento lista__elemento--link">
                      <a
                        href="https://github.com/samsvk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </li>
                    <li className="lista__elemento lista__elemento--link">
                      <a
                        href="https://twitter.com/svkxo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="lista__elemento lista__elemento--link">
                      <a
                        href="https://dribbble.com/svkxo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Dribbble
                      </a>
                    </li>
                    <li className="lista__elemento lista__elemento--link">
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Spotify
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="globale">
                  <ul className="lista mobile">
                    <label className="lista__titolo">Currently at</label>
                    <li className="lista__elemento">Fulltime — Freelance</li>
                  </ul>

                  <ul className="lista">
                    <label className="lista__titolo">
                      Available for freelance
                      <br />
                      (creative) work from:
                    </label>
                    <li className="lista__elemento">January 2023</li>
                  </ul>
                </div>
              </main>
            </div>
          </div>
        </div>

        <div
          className="container__face"
          style={{
            transform: `${show === 2 ? "rotateY(0deg)" : "rotateY(180deg)"}`,
            opacity: `${show === 2 ? 1 : 0}`,
            zIndex: `${show === 2 ? 5 : 0}`,
          }}
        >
          <div className="container__face__inner">
            <div className="container__face__inner__col">
              <CV setShow={setShow} />
            </div>
            <div
              className="container__face__inner__close"
              onClick={() => {
                setShow(1);
              }}
            ></div>
          </div>
        </div>

        {/* <div
          className="container__face"
          style={{
            transform: `${show === 2 ? "rotateY(0deg)" : "rotateY(180deg)"}`,
            opacity: `${show === 2 ? 1 : 0}`,
            zIndex: `${show === 2 ? 5 : 0}`,
          }}
        >
          <div className="container__face__inner">
            <div className="container__face__inner__col">
              <ProjectItem project={project} setPreviewImage={setPreviewImage} />
            </div>
            <div
              className="container__face__inner__close"
              onClick={() => {
                setPreviewImage(-1);
                setShow(1);
              }}
            >
              <div className="container__face__inner__close__img">
                {previewImage !== -1 && (
                  <Image
                    quality={100}
                    loading="eager"
                    priority={true}
                    layout="fill"
                    alt={"preview image of project display page"}
                    objectFit="contain"
                    // objectPosition="top"
                    src={project?.imgs[previewImage]}
                  />
                )}
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="container__face"
          style={{
            transform: `${show === 3 ? "rotateY(0deg)" : "rotateY(-180deg)"}`,
            opacity: `${show === 3 ? 1 : 0}`,
            zIndex: `${show === 3 ? 5 : 0}`,
          }}
        >
          <div className="container__face__inner">
            <div className="container__face__inner__col">3</div>
          </div>
        </div>
      </div>
    </>
  );
}
