import Image from "next/image";
import { useEffect, useState } from "react";
export default function ProjectItem({ project }) {
  if (!project) return null;

  return (
    <div className="vistadelprogetto">
      <div className="vistadelprogetto__principale">
        <div className="vistadelprogetto__principale__intestazione">
          <h1 className="vistadelprogetto__principale__intestazione__title">
            {project.name}
          </h1>
        </div>
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

      <div className="vistadelprogetto__principale__imgs">
        <div className="vistadelprogetto__principale__imgs__swiper">
          <div className="vistadelprogetto__principale__imgs__swiper__elemento">
            <div className="vistadelprogetto__principale__imgs__swiper__elemento__img">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectFit="cover"
                src={project.imgs[0]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
