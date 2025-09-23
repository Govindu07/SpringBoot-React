package com.student.sms.service.impl;

import com.student.sms.model.Student;
import com.student.sms.repository.StudentRepository;
import com.student.sms.service.StudentService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    @Override
    public Student updateStudent(Long id, Student student) {
        Optional<Student> opt = studentRepository.findById(id);
        if (opt.isPresent()) {
            Student existing = opt.get();
            existing.setName(student.getName());
            existing.setEmail(student.getEmail());
            existing.setCourse(student.getCourse());
            return studentRepository.save(existing);
        } else {
            student.setId(id);
            return studentRepository.save(student);
        }
    }

    @Override
    public void deleteStudentById(Long id) {
        studentRepository.deleteById(id);
    }
}
