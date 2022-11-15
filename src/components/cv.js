import Image from "next/image";
import { RiArrowRightDownLine } from "react-icons/ri";
export default function CV() {
  return (
    <div className="cv">
      <header className="cv__header">
        <div className="cv__header__img">
          <Image
            quality={100}
            loading="eager"
            priority={true}
            layout="fill"
            objectFit="cover"
            src={"/me.jpg"}
            className="cv__header__img--scale"
          />
        </div>
        <aside className="cv__header__details">
          <h1>Samuel Campbell</h1>
          <p>Front-end Developer in Edinburgh, UK.</p>
        </aside>
      </header>

      <section className="cv__section">
        <label className="lista__titolo">About</label>
        <p className="lista__elemento">
          Samuel (23) is a freelance digital design and developer with a strong focus
          on creating meaningful visual identities and timeless scaleable solutions
          working remotely from Edinburgh.
        </p>
      </section>
      <section className="cv__section">
        <label className="lista__titolo">Profile</label>
        <p className="lista__elemento">
          As a passionate creative individual the past few years I spent building
          industry experience in design and development strategy. All that empowered
          by my passion and ambition drives me to grow brands and products to their
          full potential. With that said, I am now looking to continue my growth in a
          cultivating and creative environment - as such I&apos;m open to full-time
          employment offers.
        </p>
      </section>

      <section className="cv__section">
        <ul className="lista">
          <label className="lista__titolo">Work Experience & Education</label>
          <li className="work__lista__elemento">
            <span className="work__lista__elemento__yr">2018 — Now</span>
            <span className="work__lista__elemento__titolo">
              <span className="work__lista__elemento__titolo__arrow">
                Front-end Developer at Freelance <RiArrowRightDownLine size={16} />
              </span>
              <span className="work__lista__elemento__titolo__loc">
                Bergamo, IT.
              </span>
            </span>
          </li>
          <li className="work__lista__elemento">
            <span className="work__lista__elemento__yr">2018 — 2019</span>
            <span className="work__lista__elemento__titolo">
              <span className="work__lista__elemento__titolo__arrow">
                Method Esports Organisation <RiArrowRightDownLine size={16} />
              </span>
              <span className="work__lista__elemento__titolo__loc">
                Scotland, UK — Freelance.
              </span>
            </span>
          </li>

          <li className="work__lista__elemento">
            <span className="work__lista__elemento__yr">2017 — 2018</span>
            <span className="work__lista__elemento__titolo">
              <span className="work__lista__elemento__titolo__arrow">
                SoaR Gaming <RiArrowRightDownLine size={16} />
              </span>
              <span className="work__lista__elemento__titolo__loc">
                Remote — Freelance
              </span>
            </span>
          </li>

          <li className="work__lista__elemento">
            <span className="work__lista__elemento__yr">2016 — 2019</span>
            <span className="work__lista__elemento__titolo">
              <span className="work__lista__elemento__titolo__arrow">
                Twitch <RiArrowRightDownLine size={16} />
              </span>
              <span className="work__lista__elemento__titolo__loc">
                Remote — Fulltime
              </span>
            </span>
          </li>

          <li className="work__lista__elemento">
            <span className="work__lista__elemento__yr">2017 — 2020</span>
            <span className="work__lista__elemento__titolo">
              <span className="work__lista__elemento__titolo__arrow">
                Education <RiArrowRightDownLine size={16} />
              </span>
              <span className="work__lista__elemento__titolo__loc">
                Info available on Request.
              </span>
            </span>
          </li>
        </ul>
      </section>

      <section className="cv__section">
        <ul className="lista">
          <label className="lista__titolo">Awards</label>
          <li className="work__lista__elemento">
            <span className="work__lista__elemento__yr">2021</span>
            <span className="work__lista__elemento__titolo">
              <span className="work__lista__elemento__titolo__arrow">
                Top 25 Personal Portfolios: Akram
              </span>
              <span className="work__lista__elemento__titolo__loc">Akram</span>
            </span>
          </li>
          <li className="work__lista__elemento">
            <span className="work__lista__elemento__yr">2021</span>
            <span className="work__lista__elemento__titolo">
              <span className="work__lista__elemento__titolo__arrow">
                Blizzard Ent. Design Comp
              </span>
              <span className="work__lista__elemento__titolo__loc">
                Blizzard.Ent
              </span>
            </span>
          </li>

          <li className="work__lista__elemento">
            <span className="work__lista__elemento__yr">2022</span>
            <span className="work__lista__elemento__titolo">
              <span className="work__lista__elemento__titolo__arrow">
                Awwwards: Honorable Mention
              </span>
              <span className="work__lista__elemento__titolo__loc">Awwwards</span>
            </span>
          </li>

          <li className="work__lista__elemento">
            <span className="work__lista__elemento__yr">2022</span>
            <span className="work__lista__elemento__titolo">
              <span className="work__lista__elemento__titolo__arrow">
                Awwwards: Site of the Day
              </span>
              <span className="work__lista__elemento__titolo__loc">Awwwards</span>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
