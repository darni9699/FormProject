package com.example.formproject.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "users")
public class UserModel {

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getPatientName() {
	return patientName;
}

public void setPatientName(String patientName) {
	this.patientName = patientName;
}

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}

public String getDob() {
	return dob;
}

public void setDob(String dob) {
	this.dob = dob;
}

public int getAge() {
	return age;
}

public void setAge(int age) {
	this.age = age;
}

public String getBloodGroup() {
	return bloodGroup;
}

public void setBloodGroup(String bloodGroup) {
	this.bloodGroup = bloodGroup;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getfOrSName() {
	return fOrSName;
}

public void setfOrSName(String fOrSName) {
	this.fOrSName = fOrSName;
}

public String getStreet() {
	return street;
}

public void setStreet(String street) {
	this.street = street;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

public String getState() {
	return state;
}

public void setState(String state) {
	this.state = state;
}

public String getGender() {
	return gender;
}

public void setGender(String gender) {
	this.gender = gender;
}

public String getMobile() {
	return mobile;
}

public void setMobile(String mobile) {
	this.mobile = mobile;
}

public String getPcrResult() {
	return pcrResult;
}

public void setPcrResult(String pcrResult) {
	this.pcrResult = pcrResult;
}
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column
private int id;
@Column
private String userid;
public UserModel()
{
	
}
public UserModel(String userid, String pwd, String patientName, Date date, String street, String city, String state,
		String mobile, String gender, String dob, int age, String bloodGroup, String email, String fOrSName,
		String pcrResult) {
	super();
	this.userid = userid;
	this.pwd = pwd;
	this.patientName = patientName;
	this.date = date;
	this.street = street;
	this.city = city;
	this.state = state;
	this.mobile = mobile;
	this.gender = gender;
	this.dob = dob;
	this.age = age;
	this.bloodGroup = bloodGroup;
	this.email = email;
	this.fOrSName = fOrSName;
	this.pcrResult = pcrResult;
}
@Column
private String pwd;
@Column(name="pname")
private String patientName;
@Column(name="tDate")
private Date date;
@Column(name="paddr")
private String street;
@Column(name="city")
private String city;
@Column(name="pstate")
private String state;
@Column(name="pmobile")
private String mobile;
@Column(name="gender")
private String gender;
@Column(name="pdob")
private String dob;
@Column(name="age")
private int age;
@Column(name="bgroup")
private String bloodGroup;
@Column(name="pemail")
private String email;
@Column(name="pfather")
private String fOrSName;
@Column(name="pcrResult")
private String pcrResult;

@Override
 public String toString() {
  return "Employee [ name=" + userid + ", password=" + pwd+ "]";
 }

public String getName() {
  return userid;
 }
public void setName(String name) {
  this.userid = name;
 }
public String getPassword() {
  return pwd;
 }
public void setPassword(String department) {
  this.pwd = department;
 }
}