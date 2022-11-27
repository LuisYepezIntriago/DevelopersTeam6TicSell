<%-- 
    Document   : showItemsSaved
    Created on : Nov 23, 2022, 5:30:35 PM
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
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Visualizar Productos</title>
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
            <h1>Lista de Productos</h1>
        </header>
        <%
            ModelsDAO modelosDAO = new ModelsDAO();
            ArrayList<Item> producto;
            producto = modelosDAO.getItems();

        %>
        <div class="tableStore">
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
                        <%                            for (Item productos : producto) {
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
                    <a href="Controlador?accion=updateProduct&id=<%= product.getId()%>">

                        <button class="btn btn-primary">

                            Editar

                        </button>

                    </a>

                    </td>

                    <td class="text-center">

                        <a href="Controlador?accion=deleteProduct&id=<%= product.getId()%>">

                            <button class="btn btn-danger">

                                Eliminar

                            </button>

                        </a>

                    </td>

                    </tr>

                    <%}%>

                    </tbody>

                </table>

                <a href="Controlador?accion=addProducts">

                    <button class="btn btn-success">

                        Agregar

                    </button>

                </a>
                </tbody>
                </table>  
            </section>
        </div>
    </body>
</html>
</body>
</html>