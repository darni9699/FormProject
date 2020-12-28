package com.example.formproject.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.formproject.model.UserModel;
import com.example.formproject.service.*;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
 
 @Autowired
 private UserService employeeService;
 
 @GetMapping("/userdetails")
 public List<UserModel> get() {
  return employeeService.get();
 }
 @GetMapping("/userdetails/id/{userId}")
 public boolean checkId(@PathVariable String userId) {
	 return employeeService.checkUserId(userId);
 }
 @GetMapping("/userdetails/pass/{pwd}")
 public boolean checkPwd(@PathVariable String pwd) {
	 return employeeService.checkPwd(pwd);
 }
 @PostMapping("/userdetails")
 public UserModel save(@RequestBody UserModel employee) {
  employeeService.save(employee);
  return employee;
 }
 
 @GetMapping("/userdetails/{id}")
 public UserModel get(@PathVariable String id) {
  return employeeService.get(id);
 }
 
 @DeleteMapping("/userdetails/{id}")
 public String delete(@PathVariable int id) {
  
  employeeService.delete(id);
  
  return "Employee removed with id "+id;
  
 }
 
 @PutMapping("/userdetails")
 public UserModel update(@RequestBody UserModel employee) {
  employeeService.save(employee);
  return employee;
 }
}
