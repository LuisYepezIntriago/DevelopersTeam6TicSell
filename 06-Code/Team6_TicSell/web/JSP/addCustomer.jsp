<%-- 
    Document   : addCustomer
    Created on : 23 nov. 2022, 02:20:38
    Author     : Lili
--%>

<%@page import="Model.Customers"%>
<%@page import="DataBaseMongo.ConnectionDatabase"%>
<%@page import="org.bson.Document"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Añadir Clientes</title>
    </head>
    <body>
        <header>Clientes Agregados Correctamente</header>
        <% 
           
            ConnectionDatabase mongoDBConnection = new ConnectionDatabase();
            ConnectionDatabase mongoDBMetodos = new ConnectionDatabase();
            mongoDBMetodos.ConnectionMongo();
            Document document = new Document();                     
   
            String Id;
            String name;
            String address;
            String phone;
            
            
            Id = request.getParameter("Cedula");
            name = request.getParameter("Nombres");
            address = request.getParameter("Direccion");
            phone = request.getParameter("Telefono");
                   
                                  
            Customers customers = new Customers (Id,name, address ,phone);
           
            document.put("id",customers.getId());
            document.put("name", customers.getName());
            document.put("address", customers.getAddress());
            document.put("phone", customers.getPhone());
           
                      
            mongoDBConnection.save(document,"customers", mongoDBConnection.database);
        %>
    </body>
</html>
