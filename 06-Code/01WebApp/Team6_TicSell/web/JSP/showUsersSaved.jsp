<%-- 
    Document   : showUsersSaved
    Created on : Nov 23, 2022, 5:19:38 PM
    Author     : luisy
--%>

<%@page import="ModelDAO.ModelsDAO"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="Model.Customers"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Visualizar Usuarios</title>
        <link href="../CSS/styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div style="text-align: center;">
            <img class="icon" src="../IMAGES/logoTicSell.jpg" >
        </div>

        <nav class="navegacion_principal contenedor">
            <a href="../JSP/showDataSaved.jsp"">Regresar</a>
        </nav>
        <div style="text-align: center;">
            <img class="IconText" src="../IMAGES/FulliconTicSell.jpg" alt=""/>
        </div>

        <header>
            <h1>Lista de Usuarios</h1>
        </header>
        <%
            ModelsDAO modelosDAO = new ModelsDAO();
            ArrayList<Customers> user;
            user = modelosDAO.getCustomers();

        %>
        <div class="tableUsers">
            <section id = "DatosEnPantalla">
                <table>
                    <thead>
                        <tr>                 
                            <th >Cédula</th>
                            <th >Nombre</th>
                            <th >Dirección</th>
                            <th >Teléfono</th>
                            <th >Opciones</th>
                        </tr>
                    </thead>


                    <tbody>
                        <%                            for (Customers users : user) {
                        %>
                        <tr class="text-center">

                            <td ><% out.print(users.getId());%></td>
                            <td ><% out.print(users.getName());%></td>
                            <td ><% out.print(users.getAddress());%></td>
                            <td ><% out.print(users.getPhone());%></td>
                            <td><a><button class="delete" >Eliminar</button></a></td>
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
</body>
</html>
