import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App(onAdd,onDelete) {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((r) => r.json())
      .then((questions) => {setQuestions(questions)});
  }, []);
  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }
  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAdd={handleAddQuestion} />
      ) : (
        <QuestionList
        
          onDelete={onDelete}
        />
      )}
    </main>
  );
}

export default App;
