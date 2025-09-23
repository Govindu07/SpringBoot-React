import React, { useState, useEffect } from "react";
import { updateStudent } from "../api";

const EditStudent = ({ student, onUpdated, onCancel }) => {
  const [data, setData] = useState({ name: "", email: "", course: "" });

  useEffect(() => {
    setData(student);
  }, [student]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(student.id, data);
    onUpdated();
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={data.name} onChange={handleChange} required />
        <input name="email" value={data.email} onChange={handleChange} required />
        <input name="course" value={data.course} onChange={handleChange} required />
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditStudent;
