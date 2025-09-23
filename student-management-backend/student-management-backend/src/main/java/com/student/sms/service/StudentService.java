package com.student.sms.service;

import com.student.sms.model.Student;
import java.util.List;
import java.util.Optional;

public interface StudentService {
    List<Student> getAllStudents();
    Student saveStudent(Student student);
    Optional<Student> getStudentById(Long id);
    Student updateStudent(Long id, Student student);
    void deleteStudentById(Long id);
}
