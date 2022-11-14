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

      {/* <div className="immagine__involucro">
        <label className="lista__titolo">Previews</label>

        <div className="immagine__involucro__immagini">
          {project.imgs.map((img, index) => (
            <div className="immagine__involucro__immagini__img" key={index}>
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectFit="cover"
                src={img}
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
