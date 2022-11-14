export default function ProjectItem({ project }) {
  if (!project) return null;
  console.log(project);
  return (
    <div className="vistadelprogetto">
      <div className="vistadelprogetto__principale">
        <h1 className="vistadelprogetto__principale__title">{project.name}</h1>
        <section>images</section>
        <div className="vistadelprogetto__principale__lista">
          <ul className="lista">
            <label className="lista__titolo">Description</label>
            <li className="lista__elemento desc">{project.desc}</li>
          </ul>
          <ul className="lista">
            <label className="lista__titolo">Tech Used</label>
            {project.tech.map((item, index) => (
              <li className="lista__elemento">{item}</li>
            ))}
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

//  <div className="vistadelprogetto__principale__info">
//           <h1 className="vistadelprogetto__principale__info__titolo">
//             {project.name}
//           </h1>
//           <p className="vistadelprogetto__principale__info__paragrafo">
//             {project.desc}
//           </p>
//         </div>
//         <div className="vistadelprogetto__principale__paragrafo">
//           <section>
//             <label className="lista__titolo">Strategy</label>
//             <p>{project.strategy}</p>
//           </section>
//           <section>
//             <label className="lista__titolo">Brief</label>
//             <p>{project.brief}</p>
//           </section>
//         </div>
