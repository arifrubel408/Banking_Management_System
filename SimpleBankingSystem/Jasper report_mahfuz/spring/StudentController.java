package com.example.demo;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@CrossOrigin
@RestController
public class StudentController {
	StudentDA d = new StudentDA();

	@GetMapping(value = "/reports", produces = MediaType.APPLICATION_PDF_VALUE)
	public ResponseEntity<byte[]> allTicket() {
		try {
			JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(d.getStudents(), false);
			Map<String, Object> param = new HashMap<>();
			JasperReport compileReport = JasperCompileManager
					.compileReport(new FileInputStream("src/main/resources/Invoice_1.jrxml"));
			JasperPrint jasperPrint = JasperFillManager.fillReport(compileReport, param, dataSource);
			byte[] data = JasperExportManager.exportReportToPdf(jasperPrint);
			HttpHeaders headers = new HttpHeaders();
			headers.add("Content-Disposition", "inline; filename=citiesreport.pdf");
			return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(data);
		} catch (FileNotFoundException | JRException e) {
			System.out.println(e);
		}
		return null;
	}
}
