import Head from "next/head";
import { useState } from "react";
import DATA from "../static/_";
import Image from "next/image";
import { RiArrowRightDownLine } from "react-icons/ri";

export default function Home() {
  const [show, setShow] = useState(1);
  return (
    <>
      <div className="container">
        <Head>
          <title>Samuel — Designer, Skaterboard & Pizza Connoisseur.</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          className="container__face"
          style={{
            transform: `${show === 1 ? "rotateY(0deg)" : "rotateY(180deg)"}`,
            opacity: `${show === 1 ? 1 : 0}`,
            zIndex: `${show === 1 ? 5 : 0}`,
          }}
        >
          <div className="container__face__inner">
            <div className="involucro">
              <section className="superiore">
                <h1 className="superiore__titolo">SAM CAMPBELL (23) IS A</h1>
                <h1 className="superiore__titolo">*CREATIVE DEVELOPER*</h1>
                <h1 className="superiore__titolo">FROM »SCOTLAND«</h1>
                <h1 className="superiore__titolo">BASED IN BERGAMO, ITALIA.</h1>
              </section>
              <main className="principale">
                <div className="globale">
                  <div className="testo">
                    <p>
                      <label className="lista__titolo">About</label>
                      Samuel graduated in digital design & development, Samuel is a
                      passionate engineer specializing in interaction, animation, and
                      motion. Focusing on interactive user interface with rich
                      visuals and best practice in accessibility with scalable modern
                      technology.
                    </p>

                    <div>
                      <label className="lista__titolo">Recent Works</label>
                      <ul className="progettolista">
                        {DATA.map((project, index) => (
                          <div key={index} className="progettolista__elemento">
                            <h5 className="progettolista__elemento__titolo">
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
                  <ul className="lista">
                    <label className="lista__titolo">Location</label>
                    <li className="lista__elemento">Bergamo, Italia</li>
                    <li className="lista__elemento">45.6983° N, 9.6773° E</li>
                  </ul>
                  <ul className="lista">
                    <label className="lista__titolo">Email</label>
                    <li className="lista__elemento">hello@samsvk.com</li>
                  </ul>
                  <ul className="lista">
                    <label className="lista__titolo">Socials</label>
                    <li className="lista__elemento lista__elemento--link">Github</li>
                    <li className="lista__elemento lista__elemento--link">
                      Twitter
                    </li>
                    <li className="lista__elemento lista__elemento--link">
                      Dribbble
                    </li>
                    <li className="lista__elemento lista__elemento--link">
                      Spotify
                    </li>
                  </ul>
                </div>
                <div className="globale">
                  <ul className="lista">
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
            <div className="container__face__inner__col">2</div>
          </div>
        </div>

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
