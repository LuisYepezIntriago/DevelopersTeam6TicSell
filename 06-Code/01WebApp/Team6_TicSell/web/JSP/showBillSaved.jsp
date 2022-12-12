<%-- 
    Document   : showBillSaved
    Created on : Nov 23, 2022, 9:43:42 PM
    Author     : luisy
--%>

<%@page import="ModelDAO.ModelsDAO"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="Model.Bill"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Visualizar Facturas</title>
        <link href="../CSS/styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div style="text-align: center;">
            <img class="icon" src="../IMAGES/logoTicSell.jpg" >
        </div>

        <nav class="navegacion_principal contenedor">
            <a href="../JSP/showDataSaved.jsp">Regresar</a>
        </nav>
        <div style="text-align: center;">
            <img class="IconText" src="../IMAGES/FulliconTicSell.jpg" alt=""/>
        </div>
        <header>
            <h1>Ventas</h1>
        </header>
        <%
            ModelsDAO modelosDAO = new ModelsDAO();
            ArrayList<Bill> bill;
            bill = modelosDAO.getBills();

        %>
        
        <div class="tableStore">
            <section id = "DatosEnPantalla">
                <table>
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <%                            for (Bill bills : bill) {
                        %>
                         <tr>
                             <td><% out.print(bills.getId());%></td>
                            <td><% out.print(bills.getName());%></td>
                            <td><% out.print(bills.getLastName());%></td>
                            <td><% out.print(bills.getAddress());%></td>
                            <td><% out.print(bills.getPhone());%></td>
                            <td><% out.print(bills.getItem());%></td>
                            <td><% out.print(bills.getAmount());%></td>
                            <td><% out.print(bills.getCost());%></td>
                        </tr>
                        <%
                            }
                        %>
                    </tbody>
                </table>

            </section>
        </div>
    </body>
</html>
