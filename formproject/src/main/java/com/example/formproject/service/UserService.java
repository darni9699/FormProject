package com.example.formproject.service;

import java.util.List;
import com.example.formproject.model.UserModel;
public interface UserService {
List<UserModel> get();
 
 UserModel get(String id);
 
 void save(UserModel employee);
 
 void delete(int id);
boolean checkUserId(String userId);
 
 boolean checkPwd(String pwd);
}
