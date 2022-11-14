import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import SwiperCore, { FreeMode } from "swiper";
SwiperCore.use([FreeMode]);

export default function ProjectItem({ project }) {
  if (!project) return null;
  return (
    <div className="vistadelprogetto">
      <div className="vistadelprogetto__principale">
        <h1 className="vistadelprogetto__principale__title">{project.name}</h1>

        {<Swipe views={project.imgs} />}

        <div className="vistadelprogetto__principale__lista">
          <ul className="lista">
            <label className="lista__titolo">Description</label>
            <li className="lista__elemento desc">{project.desc}</li>
          </ul>
          <ul className="lista">
            <label className="lista__titolo">Tech Used</label>
            <li className="lista__elemento">
              {project.tech.map((item, index) => item).join(", ")}
            </li>
          </ul>
        </div>
        <div className="vistadelprogetto__principale__info">
          <section>
            <label className="lista__titolo">Strategy</label>
            <p>{project.strategy}</p>
          </section>
          <section>
            <label className="lista__titolo">Brief</label>
            <p>{project.brief}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export const Swipe = ({ views }) => {
  return (
    <>
      <div className="vistadelprogetto__principale__imgs">
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          spaceBetween={30}
          className="vistadelprogetto__principale__imgs__swiper "
        >
          {views.map((item, i) => (
            <SwiperSlide
              key={i}
              className="vistadelprogetto__principale__imgs__swiper__elemento"
            >
              <div className="vistadelprogetto__principale__imgs__swiper__elemento__img">
                <Image
                  quality={100}
                  loading="eager"
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                  src={item}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
