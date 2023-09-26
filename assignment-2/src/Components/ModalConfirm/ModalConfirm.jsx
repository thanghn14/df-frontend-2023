import React from 'react'
import styles from './ModalConfirm.module.css'
import { GrFormClose } from "react-icons/gr";

export const ModalConfirm = ({setOpenModal}) => {
  return (
    <div id={styles.boxModalConfirm}>
      <div id={styles.modalConfirm}>
        <div id={styles.modalConfirmTop}>
          <p>Delete book</p>
          <GrFormClose onClick={() => setOpenModal({modalConfirm: false})}/>
        </div>
        <div id={styles.modalConfirmContent}>
          <p>Do you want to delete</p>
          <div id={styles.confirmSubContent}>
            <p>Refactoring&nbsp;</p>
            <p>book?</p>
          </div>
        </div>
        <div id={styles.modalConfirmBtns}>
          <button class={styles.confirmDeleteBtn}>
            Delete
          </button>
          <button
            class={styles.confirmCancelBtn}
            onClick={() => setOpenModal({modalConfirm: false})}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
