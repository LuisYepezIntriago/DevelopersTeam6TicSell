<%-- 
    Document   : ShowItem
    Created on : Nov 23, 2022, 1:27:20 AM
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
        <link href="CSS/styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div style="text-align: center;">
            <img class="icon" src="IMAGES/logoTicSell.jpg" alt=""/>
        </div>

        <nav class="navegacion_principal contenedor">
            <a href="HTML/addItem.html">Registrar Productos</a>
            <a href="HTML/addCustomer.html">Registrar Clientes</a>
            <a class="button">Registro Facturas</a>
            <a href="HTML/showDataSaved.jsp">Visualizar Datos</a>
        </nav>

        <div style="text-align: center;">
            <img class="IconText" src="IMAGES/FulliconTicSell.jpg" alt=""/>
        </div>
        <header>
            <h1>Catálogo</h1>
        </header>
        <%
            ModelsDAO modelosDAO = new ModelsDAO();
            ArrayList<Item> producto;
            producto = modelosDAO.getItems();

        %>
        <div class="tableStore">
            <header class="text-center" >Lista de Productos</header>
            <section id = "DatosEnPantalla">
                <table>
                    <thead>
                        <tr>                 
                            <th >Nombre</th>
                            <th >Descripcion</th>
                            <th >Cantidad</th>
                            <th >Precio</th>
                            <th >Total</th>
                            <th >Ganancia</th>
                            <th>Opciones</th> 
                            </th>
                        </tr>
                    </thead>


                    <tbody id=#MostrarProductosAgregados">
                        <%
                            for (Item productos : producto) {
                        %>
                        <tr class="text-center">

                            <td ><% out.print(productos.getNombre());%></td>
                            <td ><% out.print(productos.getDescripcion());%></td>
                            <td ><% out.print(productos.getCantidad());%></td>
                            <td ><% out.print(productos.getPrecio());%></td>
                            <td ><% out.print(productos.getTotal());%> </td>
                            <td ><% out.print(productos.getGanancia());%> </td>
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
