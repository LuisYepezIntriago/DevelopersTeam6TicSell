<%-- 
    Document   : addItem
    Created on : Nov 21, 2022, 11:26:52 PM
    Author     : luisy
--%>

<%@page import="Model.Item"%>
<%@page import="DataBaseMongo.ConnectionDatabase"%>
<%@page import="org.bson.Document"%>
<%@page import="java.text.DecimalFormat"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="refresh" content="2;URL=../index.jsp">
        <title>JSP Page</title>
    </head>
    <body>
        <header>Productos Agregados Correctamente</header>
        <% 
            DecimalFormat df = new DecimalFormat();
            ConnectionDatabase mongoDBConnection = new ConnectionDatabase();
            ConnectionDatabase mongoDBMetodos = new ConnectionDatabase();
            mongoDBMetodos.ConnectionMongo();
            Document document = new Document();                     
   
            String nombre;
            String descripcion;
            int cantidad;
            double precio;  
            double total;
            double ganancia;
            
            
            nombre = request.getParameter("ProductoNombre");
            descripcion = request.getParameter("ProductoDescripcion");
            cantidad = Integer.parseInt(request.getParameter("ProductoCantidad")) ;
            precio = Double.parseDouble(request.getParameter("ProductoPrecio"));
            total = (Math.round(cantidad*precio*100d)/100);
            ganancia = (Math.round((total*0.12) * 100d )/100 );         
            
                      
            Item item = new Item (nombre,descripcion, cantidad ,precio,total,ganancia);
                    
            document.put("nombre", item.getNombre());
            document.put("descripcion", item.getDescripcion());
            document.put("cantidad", item.getCantidad());
            document.put("precio", item.getPrecio());
            document.put("total", item.getTotal());
            document.put("ganancia", item.getGanancia());
            
            mongoDBConnection.save(document,"items", mongoDBConnection.database);
        %>
    </body>
</html>
