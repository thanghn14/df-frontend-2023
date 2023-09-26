import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";
import { ModalAdd } from "../ModalAdd/ModalAdd";

const books = [
  {
    id: 1,
    name: "O Alquimista",
    author: "Paulo Coelho",
    topic: "Novel",
  },
  {
    id: 2,
    name: "Life of Pi",
    author: "Yann Martel",
    topic: "Novel",
  },
  {
    id: 3,
    name: "Start-up Nation",
    author: "Dan Senor & Saul Singer",
    topic: "Economics",
  },
];

if (!localStorage.getItem("listBooks")) {
  localStorage.setItem("listBooks", JSON.stringify(books));
}

export const Body = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(books);
  const [nameInput, setNameInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [topicInput, setTopicInput] = useState("Programing");

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("listBooks"));
    setData(localData);
  }, []);

  const handleAdd = () => {
    setData([
      ...data,
      {
        name: nameInput,
        author: authorInput,
        topic: topicInput,
      },
    ]);
    localStorage.setItem("listBooks", JSON.stringify(data));
    setOpenModal(false);
  };

  const handleDelete = (id) => {
    const newData = data.filter((data) => data.id !== id);
    localStorage.setItem("listBooks", JSON.stringify(newData));
    setData(newData);
  };

  const handleSearch = (e) => {
    const localData = JSON.parse(localStorage.getItem("listBooks"))
    const dataSearch = localData.filter((data) => {
      return data.name.toUpperCase().includes(e.toUpperCase());
    });
    setData(dataSearch);
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
        <button className={styles.btnType} onClick={() => setOpenModal(true)}>
          Add book
        </button>
      </div>

      <table id={styles.table}>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Topic</th>
          <th>Action</th>
        </tr>
        {data.map((item) => {
          return (
            <tr key={item.id}>
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
      </table>
      {openModal && (
        <ModalAdd
          setOpenModal={setOpenModal}
          setNameInput={setNameInput}
          setAuthorInput={setAuthorInput}
          setTopicInput={setTopicInput}
          handleAdd={handleAdd}
        />
      )}
    </main>
  );
};
