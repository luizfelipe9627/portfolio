import styles from "./Projects.module.scss";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import Title from "../../components/Title/Title";
import projectsSorted from "../../utils/projects.jsx";
import { useModal } from "../../context/ModalContext";

export default function Projects() {
  const { openModal } = useModal();

  return (
    <>
      <section
        className="containerSection animeLeft"
        style={openModal ? { position: "initial" } : undefined}
      >
        <div
          className="container"
          style={openModal ? { width: "100vw" } : { width: "initial" }}
        >
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
                deploy={project.deploy}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
