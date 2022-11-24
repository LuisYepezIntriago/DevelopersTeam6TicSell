<%-- 
    Document   : showDataSaved
    Created on : Nov 23, 2022, 2:57:06 AM
    Author     : luisy
--%>

<%@page import="ModelDAO.ModelsDAO"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="Model.Item"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TicSell</title>
        <link href="../CSS/styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div style="text-align: center;">
            <img class="icon"src="../IMAGES/logoTicSell.jpg" alt=""/>
        </div>

        <nav class="navegacion_principal contenedor">
            <a href="../JSP/showItemsSaved.jsp">Productos</a>
            <a href="../JSP/showUsersSaved.jsp">Clientes</a>
            <a href="../JSP/showBillSaved.jsp">Facturas</a>
            <a href="../index.jsp">Menú Principal</a>
        </nav>

        <div style="text-align: center;">
            <img class="IconText" src="../IMAGES/FulliconTicSell.jpg" alt=""/>
        </div>
    </body>
</html>
