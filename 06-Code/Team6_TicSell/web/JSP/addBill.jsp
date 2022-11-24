<%-- 
    Document   : addBill
    Created on : Nov 23, 2022, 6:42:42 PM
    Author     : luisy
--%>

<%@page import="Model.Bill"%>
<%@page import="DataBaseMongo.ConnectionDatabase"%>
<%@page import="org.bson.Document"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Añadir Facturas</title>
    </head>
    <body>
        <header>Factura Agregada Correctamente</header>
        <% 
           
            ConnectionDatabase mongoDBConnection = new ConnectionDatabase();
            ConnectionDatabase mongoDBMetodos = new ConnectionDatabase();
            mongoDBMetodos.ConnectionMongo();
            Document document = new Document();                     
   
            String id;
            String name;
            String lastName;
            String address;
            String item;
            double phone;
            double amount;
            double cost;  
            
           
            id = request.getParameter("id");
            name = request.getParameter("name");
            lastName = request.getParameter("lastname");
            address = request.getParameter("address");
            item = request.getParameter("item");
            phone = Double.parseDouble(request.getParameter("phone"));      
            amount = Double.parseDouble(request.getParameter("amount"));
            cost = Double.parseDouble(request.getParameter("cost"));
                                  
            Bill bill = new Bill (id, name, lastName ,address, phone, item, amount, cost);
           
            document.put("id",bill.getId());
            document.put("name", bill.getName());
            document.put("lastName", bill.getLastName());
            document.put("address", bill.getAddress());
            document.put("phone", bill.getPhone());
            document.put("item", bill.getItem());
            document.put("amount", bill.getAmount());
            document.put("cost", bill.getCost());
           
                      
            mongoDBConnection.save(document,"bill", mongoDBConnection.database);
        %>
    </body>
</html>
