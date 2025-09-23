import React, { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {
  const [editingStudent, setEditingStudent] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>Student Management System</h1>
      {editingStudent ? (
        <EditStudent
          student={editingStudent}
          onUpdated={() => { setEditingStudent(null); setRefresh(!refresh); }}
          onCancel={() => setEditingStudent(null)}
        />
      ) : (
        <AddStudent onAdded={() => setRefresh(!refresh)} />
      )}
      <StudentList key={refresh} onEdit={setEditingStudent} />
    </div>
  );
}

export default App;
