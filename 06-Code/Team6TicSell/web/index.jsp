<%-- 
    Document   : ShowItem
    Created on : Nov 23, 2022, 1:27:20 AM
    Author     : luisy
--%>

<%@page import="ec.edu.espe.clientserver.model.Product"%>
<%@page import="ec.edu.espe.clientserver.modelDAO.ProductDAO"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>0
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"

              rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"

              crossorigin="anonymous">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Catalogo TicSell</title>
        <link href="Css/styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div style="text-align: center;">
            <img class="icon" src="IMAGES/logoTicSell.jpg" alt=""/>
        </div>

        <nav class="navegacion_principal contenedor">
            <a href="HTML/register.html">Registros</a>
            <a href="JSP/showDataSaved.jsp">Visualizar Datos</a>
        </nav>

        <div style="text-align: center;">
            <img class="IconText" src="IMAGES/FulliconTicSell.jpg" alt=""/>
        </div>
        <div class="container mt-4">

            <h1 class="text-center mt-4">Lista de Productos</h1>

            <table class="table table-dark mt-4">
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Nombre</th>
                        <th class="text-center">Precio</th>
                        <th class="text-center">Cantidad</th>
                        <th class="text-center">Ganancias</th>
                        <th class="text-center">Editar</th>
                        <th class="text-center">Eliminar</th>
                    </tr>
                </thead>
                <%

                    ProductDAO productDAO = new ProductDAO();

                    List<Product> list = productDAO.listProducts();

                    Iterator<Product> iter = list.iterator();

                    Product product = null;

                    while (iter.hasNext()) {

                        product = iter.next();

                %>
                <tbody>
                    <tr>
                        <td class="text-center"><%= product.getId()%></td>
                        <td class="text-center"><%= product.getName()%></td>
                        <td class="text-center"><%= product.getPrice()%></td>
                        <td class="text-center"><%= product.getQuantity()%></td>
                        <td class="text-center"><%= product.getProfit()%></td>
                        <td class="text-center">
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
                    <%
                        }
                    %> 
                </tbody>
            </table>
            <a href="Controlador?accion=addProducts">
                <button class="btn btn-success">
                    Agregar
                </button>
            </a>
        </div>
    </body>
</html>

