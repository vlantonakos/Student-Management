package com.vlanto.studentsystem.service;

import java.util.List;

import com.vlanto.studentsystem.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);
	public List<Student> getAllStudents();
}
