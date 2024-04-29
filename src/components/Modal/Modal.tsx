import styles from "./Modal.module.scss";
import { useModal } from "../../context/ModalContext";
import React from "react";

const Modal = () => {
  const { openModal, setOpenModal, selectedProject } = useModal();

  const {
    img,
    title,
    description,
    skill,
    icon,
    repository,
    deploy,
    createdAt,
  } = selectedProject || {
    img: "",
    title: "",
    description: "",
    skill: [],
    icon: [],
    repository: "",
    deploy: "",
    createdAt: "",
  };

  React.useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return (
    <div
      className={`${styles.overlay} ${openModal ? "" : styles.isClose}`}
      onClick={() => setOpenModal(false)}
    >
      <div
        className={`${styles.modal} ${openModal ? "animeBottom" : "animeTop"} `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.buttonClose}>
          <button className={styles.close} onClick={() => setOpenModal(false)}>
            <i className="fa fa-xmark" />
          </button>
        </div>

        <div className={styles.img}>
          <img src={img} alt={title} />
        </div>

        <div className={styles.content}>
          <span className={styles.createdAt}>{createdAt}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.tech}>
            <h1>Tecnologias</h1>

            <div className={styles.skills}>
              {skill?.map((item, index) => (
                <div key={index} className={styles.skill}>
                  {icon && icon[index] && (
                    <img src={icon[index]} title={item} />
                  )}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <h1>Links</h1>

            <div className={styles.link}>
              <a href={deploy} target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-eye" />
                Ver o projeto
              </a>

              <a href={repository} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
                Ver o repositório
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
