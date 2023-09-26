import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";
import { ModalAdd } from "../ModalAdd/ModalAdd";
import { v4 as uuidv4 } from "uuid";
import { ModalConfirm } from "../ModalConfirm/ModalConfirm";

const books = [
  {
    id: uuidv4(),
    name: "O Alquimista",
    author: "Paulo Coelho",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Life of Pi",
    author: "Yann Martel",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Start-up Nation",
    author: "Dan Senor & Saul Singer",
    topic: "Economics",
  },
  {
    id: uuidv4(),
    name: "O Alquimista",
    author: "Paulo Coelho",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Life of Pi",
    author: "Yann Martel",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Start-up Nation",
    author: "Dan Senor & Saul Singer",
    topic: "Economics",
  },
  {
    id: uuidv4(),
    name: "O Alquimista",
    author: "Paulo Coelho",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Life of Pi",
    author: "Yann Martel",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Start-up Nation",
    author: "Dan Senor & Saul Singer",
    topic: "Economics",
  },
  {
    id: uuidv4(),
    name: "O Alquimista",
    author: "Paulo Coelho",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Life of Pi",
    author: "Yann Martel",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Start-up Nation",
    author: "Dan Senor & Saul Singer",
    topic: "Economics",
  },
  {
    id: uuidv4(),
    name: "O Alquimista",
    author: "Paulo Coelho",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Life of Pi",
    author: "Yann Martel",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Start-up Nation",
    author: "Dan Senor & Saul Singer",
    topic: "Economics",
  },
  {
    id: uuidv4(),
    name: "O Alquimista",
    author: "Paulo Coelho",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Life of Pi",
    author: "Yann Martel",
    topic: "Novel",
  },
  {
    id: uuidv4(),
    name: "Start-up Nation",
    author: "Dan Senor & Saul Singer",
    topic: "Economics",
  },
];

if (!localStorage.getItem("listBooks")) {
  localStorage.setItem("listBooks", JSON.stringify(books));
}

export const Body = () => {
  const [openModal, setOpenModal] = useState({
    modalAdd: false,
    modalConfirm: false,
  });
  const [data, setData] = useState([JSON.parse(localStorage.getItem("listBooks"))]);
  const [nameInput, setNameInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [topicInput, setTopicInput] = useState("Programing");
  const perPage = 5;
  const [pagination, setPagination] = useState(
    JSON.parse(localStorage.getItem("listBooks")).slice(0, perPage)
  );

  const pagesTotal = Math.round(
    JSON.parse(localStorage.getItem("listBooks")).length / perPage
  );
  const number = [...Array(pagesTotal + 1).keys()].slice(1);

  const handlePageNumber = (num) => {
    setPagination(
      JSON.parse(localStorage.getItem("listBooks")).slice(
        (num - 1) * perPage,
        (num - 1) * perPage + perPage
      )
    );
  };

  const handleAdd = () => {
    setData([
      ...data,
      {
        id: uuidv4(),
        name: nameInput,
        author: authorInput,
        topic: topicInput,
      },
    ]);
    localStorage.setItem("listBooks", JSON.stringify(data));
    setOpenModal({ ...openModal, modalAdd: false });
  };

  const handleDelete = (id) => {
    // setOpenModal({ ...openModal, modalDelete: true });
    console.log(id);
    const newData = pagination.filter((data) => data.id !== id);
    localStorage.setItem("listBooks", JSON.stringify(newData));
    setData(newData);
  };

  const handleSearch = (e) => {
    const localData = JSON.parse(localStorage.getItem("listBooks"));
    const dataSearch = localData.filter((data) => {
      return data.name.toUpperCase().includes(e.toUpperCase());
    });
    setPagination(dataSearch.slice(0, perPage));
  };

  return (
    <main id={styles.main}>
      <div id={styles.box}>
        <input
          type="text"
          placeholder="Search books"
          id={styles.searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          className={styles.btnType}
          onClick={() => setOpenModal({ ...openModal, modalAdd: true })}
        >
          Add book
        </button>
      </div>

      <table id={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Topic</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pagination.map((item) => {
            return (
              <tr key={uuidv4()}>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td>{item.topic}</td>
                <td>
                  <a
                    href="/"
                    className={styles.btnDelete}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul className={styles.pagination}>
        {number.map((item, index) => {
          return (
            <li key={index} onClick={() => handlePageNumber(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      {openModal.modalAdd && (
        <ModalAdd
          setOpenModal={setOpenModal}
          setNameInput={setNameInput}
          setAuthorInput={setAuthorInput}
          setTopicInput={setTopicInput}
          handleAdd={handleAdd}
        />
      )}
      {openModal.modalConfirm && <ModalConfirm setOpenModal={setOpenModal} />}
    </main>
  );
};
