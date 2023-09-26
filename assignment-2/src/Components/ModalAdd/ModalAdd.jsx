import React from "react";
import styles from "./ModalAdd.module.css";
import { GrFormClose } from "react-icons/gr";

export const ModalAdd = ({
  setOpenModal,
  setNameInput,
  setAuthorInput,
  setTopicInput,
  handleAdd,
}) => {
  return (
    <div id={styles.boxModalAdd}>
      <div id={styles.modalAdd}>
        <div id={styles.modalAddTop}>
          <p>Add book</p>
          <GrFormClose onClick={() => setOpenModal(false)} />
        </div>
        <div id={styles.modalAddInput}>
          <label for="name-input" className={styles.addLabel}>
            Name
          </label>
          <input
            type="text"
            id="name-input"
            placeholder="Name"
            className={styles.addInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <label for="author-input" className={styles.addLabel}>
            Author
          </label>
          <input
            type="text-input"
            id="author-input"
            placeholder="Author"
            className={styles.addInput}
            onChange={(e) => setAuthorInput(e.target.value)}
          />
          <label for="topic-input" className={styles.addLabel}>
            Topic
          </label>
          <select
            name="topic"
            id={styles.topicInput}
            className={styles.addInput}
            onChange={(e) => setTopicInput(e.target.value)}
          >
            <option value="Programing" defaultValue>Programing</option>
            <option value="Novel">Novel</option>
            <option value="Economics">Economics</option>
            <option value="Comic">Comic</option>
          </select>
        </div>
        <button className={styles.btnType} onClick={handleAdd}>
          Create
        </button>
      </div>
    </div>
  );
};
