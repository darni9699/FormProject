package com.example.formproject.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.formproject.model.UserDao;
import com.example.formproject.model.UserModel;
@Service
public class UserServiceImpl implements UserService {
 
 @Autowired
 private UserDao employeeDao;
@Transactional
 @Override
 public List<UserModel> get() {
  return employeeDao.get();
 }
@Transactional
@Override
public boolean checkUserId(String userId) {
	// TODO Auto-generated method stub
	return employeeDao.checkUserId(userId);
}
@Transactional
@Override
public boolean checkPwd(String pwd) {
	// TODO Auto-generated method stub
	return employeeDao.checkPwd(pwd);
}

@Transactional
 @Override
 public UserModel get(int id) {
  return employeeDao.get(id);
 }
@Transactional
 @Override
 public void save(UserModel employee) {
  employeeDao.save(employee);
  
 }
@Transactional
 @Override
 public void delete(int id) {
  employeeDao.delete(id);
  
 }
}
