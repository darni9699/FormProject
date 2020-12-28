package com.example.formproject.model;
import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
@Repository
public class UserDaoImpl implements UserDao {
@Autowired
 private EntityManager entityManager;
@Override
 public List<UserModel> get() {
Session currSession = entityManager.unwrap(Session.class);
  Query<UserModel> query = currSession.createQuery("from UserModel", UserModel.class);
  List<UserModel> list = query.getResultList();
  return list;
}

@Override
public boolean checkUserId(String userId) {
	// TODO Auto-generated method stub
	Session currSession = entityManager.unwrap(Session.class);
	  Query<UserModel> query = currSession.createQuery("from UserModel", UserModel.class);
	  List<UserModel> list = query.getResultList();
	for(int i=0;i<list.size();i++) {
	if(userId.equals(list.get(i).getName()))
	return true;
	}
	return false;
}

@Override
public boolean checkPwd(String pwd) {
	Session currSession = entityManager.unwrap(Session.class);
	  Query<UserModel> query = currSession.createQuery("from UserModel", UserModel.class);
	  List<UserModel> list = query.getResultList();
	for(int i=0;i<list.size();i++)
	if(pwd.equals(list.get(i).getPassword()))
	return true;
	return false;
}

@Override
 public UserModel get(String id) {
  Session currSession = entityManager.unwrap(Session.class);
  Query<UserModel> query = currSession.createQuery("from UserModel", UserModel.class);
  List<UserModel> list = query.getResultList();
for(int i=0;i<list.size();i++) {
if(id.equals(list.get(i).getName()))
return list.get(i);
}
return null;
 }
@Override
 public void save(UserModel employee) {
  
  Session currSession = entityManager.unwrap(Session.class);
  currSession.saveOrUpdate(employee);
}
@Override
 public void delete(int id) {
  Session currSession = entityManager.unwrap(Session.class);
  UserModel emp = currSession.get(UserModel.class, id);
  currSession.delete(emp);
}
}
