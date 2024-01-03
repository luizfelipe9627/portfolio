import styles from "./Projects.module.scss";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import Title from "../../components/Title/Title";
import projectsSorted from "./ProjectsData";

export default function Projects() {
  return (
    <section className="containerSection animeLeft">
      <div className="container">
        <Title title="Projetos" />

        <div className={styles.heading}>
          <h2>Meus projetos :</h2>
        </div>

        <div className={styles.row}>
          {projectsSorted.map((project, index) => (
            <ProjectItem
              key={index}
              img={project.img}
              title={project.title}
              href={project.href}
              skill={project.skill}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
