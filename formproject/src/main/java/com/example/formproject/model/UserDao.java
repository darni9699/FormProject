package com.example.formproject.model;

import java.util.List;
public interface UserDao {
 
 List<UserModel> get();
 
 UserModel get(int id);
 
 void save(UserModel employee);
 
 void delete(int id);
 
 boolean checkUserId(String userId);
 
 boolean checkPwd(String pwd);
}