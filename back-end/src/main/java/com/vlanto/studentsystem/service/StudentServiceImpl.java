package com.vlanto.studentsystem.service;

import java.util.List;

import com.vlanto.studentsystem.model.Student;
import com.vlanto.studentsystem.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}
	
	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}
}
