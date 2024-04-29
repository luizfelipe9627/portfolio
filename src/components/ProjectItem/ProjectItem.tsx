import Overlay from "../Overlay/Overlay";
import styles from "./ProjectItem.module.scss";
import { useModal } from "../../context/ModalContext";

interface ProjectItemProps {
  img: string;
  title: string;
  deploy?: string;
  project: any;
}

export default function ProjectItem({
  img,
  title,
  deploy,
  project,
}: ProjectItemProps) {
  const { setOpenModal, setSelectedProject } = useModal();

  function handleClick(project: any) {
    setSelectedProject(project);
    setOpenModal(true);
  }

  return (
    <>
      <div className={styles.projectItem}>
        <div className={styles.inner}>
          <div className={styles.image}>
            <a href={deploy} target="_blank" rel="noopener noreferrer">
              <Overlay title={title} />
              <img src={img} title={`Clique para abrir o(a): ${title}`} />
            </a>
          </div>

          <button className={styles.btn} onClick={() => handleClick(project)}>
            Ver mais informações
          </button>
        </div>
      </div>
    </>
  );
}
