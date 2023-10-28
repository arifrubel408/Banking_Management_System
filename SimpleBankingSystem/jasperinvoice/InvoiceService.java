package com.food.jasperinvoice;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import com.food.Order;
import com.food.OrderDA;
import com.food.OrderFoods;
import com.food.OrderFoodsDA;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class InvoiceService {
	
	public void exportJasperReport(HttpServletResponse response, String orderId) throws JRException, IOException {
        List<OrderFoods> orderFood = new OrderFoodsDA().getMyorderFoodByOrderId(orderId);
        //Get file and compile it
        File file = ResourceUtils.getFile("classpath:Invoice_1.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(orderFood);
        
        Order or = new OrderDA().getOrderByOrderId(orderId);
        
        DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        // Parse the input string into LocalDateTime
        LocalDateTime localDateTime = LocalDateTime.parse(or.getOrderDate(), inputFormatter);
        // Define the desired output format
        DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        // Format the LocalDateTime
        String formattedDate = localDateTime.format(outputFormatter);
        
        
        HashMap<String, Object> parameter = new HashMap<>();
        parameter.put("id", or.getOrderId());
        parameter.put("date", formattedDate);
        parameter.put("user", or.getUserName());
        parameter.put("phone", or.getUserphone());
        parameter.put("email", or.getUserEmail());
        parameter.put("address", or.getUserAddress());
        parameter.put("pay", or.getPaymentMethod());
        parameter.put("pnumber", or.getPayNumber());
        parameter.put("tns", or.getTransectionNumber());
        parameter.put("total", or.getTotalPrice());
        parameter.put("subtotal", or.getTotalPrice()-(or.getTotalPrice()*5/100));
        parameter.put("vat", (or.getTotalPrice()*5/100));
        
        
        
        
        //Fill Jasper report
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameter, dataSource);
        //Export report
        JasperExportManager.exportReportToPdfStream(jasperPrint,response.getOutputStream());
    }
}
