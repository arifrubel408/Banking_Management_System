package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class StudentDA {
	List<Student> slist;
	public List<Student> getStudents() {
		Connection con;
		PreparedStatement pstmt;
		slist = new ArrayList<>();
		Student s;

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/finalproject", "root", "nh123456");
			pstmt = con.prepareStatement("select id,name,email,round from student");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				
				s = new Student();
				s.setId(rs.getInt(1));
				s.setName(rs.getString(2));
				s.setEmail(rs.getString(3));
				s.setRound(rs.getString(4));
				slist.add(s);
			}
		} catch (Exception e) {
			System.out.println(e);

		}
		return slist;
	}
}
