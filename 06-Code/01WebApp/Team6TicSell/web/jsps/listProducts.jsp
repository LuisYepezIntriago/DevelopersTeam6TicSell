<%-- 
    Document   : ShowItem
    Created on : Nov 23, 2022, 1:27:20 AM
    Author     : luisy
--%>

<%@page import="ec.edu.espe.clientserver.connectionDB.ConnectionMongoDB"%>
<%@page import="com.mongodb.client.MongoCursor"%>
<%@page import="org.bson.Document"%>
<%@page import="com.mongodb.client.MongoCollection"%>
<%@page import="com.mongodb.MongoException"%>
<%@page import="com.mongodb.client.MongoClients"%>
<%@page import="com.mongodb.client.MongoDatabase"%>
<%@page import="com.mongodb.client.MongoClient"%>
<%@page import="ec.edu.espe.clientserver.model.Product"%>
<%@page import="ec.edu.espe.clientserver.modelDAO.ProductDAO"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Mostrar Productos</title>
        <link href="../Css/styles.css" rel="stylesheet" type="text/css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossorigin="anonymous">

    </head>
    <body>
        <div style="text-align: center;">
            <img class="icon" src="../IMAGES/logoTicSell.jpg" alt=""/>
        </div>

        <nav class="navegacion_principal contenedor">
            <a href="../index.jsp">Regresar</a>
        </nav>

        <div style="text-align: center;">
            <img class="IconText" src="IMAGES/FulliconTicSell.jpg" alt=""/>
        </div>
        <div class="container mt-4">

            <h1 class="text-center mt-4">Lista de Productos</h1>

            <table class="table table-dark mt-4">
                <thead>
                    <tr>
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
                    String uri = null;
                    MongoClient mongoClient = null;
                    MongoDatabase MongoDB = null;

                    try {
                        uri = "mongodb+srv://SilviaTeam6:DevelopTeam6@cluster0.jmp7qzy.mongodb.net/?retryWrites=true&w=majority";
                        mongoClient = MongoClients.create(uri);
                    } catch (MongoException e) {
                        System.out.println(e);
                    }

                    /* if (mongoClient != null) {
                        MongoDB = mongoClient.getDatabase("ticsell");
                    }

                    if (MongoDB != null) {
                        String nt = "Productos";
    
                        MongoCollection<Document> collection = new ConnectionMongoDB().getMongoDatabase().getCollection(nt);
                        MongoCursor<Document> cursor = collection.find().iterator();

                        Document result = null;
                        try {
                            while (cursor.hasNext()) {
                                result = (Document) cursor.next();
                                //Mostrar elementos
                                System.out.println(result.getString("Columna1") + " / " + result.getInteger("Columna2") + " / " + result.getString("Columna3"));
                            }
                        } finally {
                            cursor.close();
                        }
                    }*/
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
                        </td>
                        <td class="text-center">
                        <td class="text-center">
                            <a href="../Controller?accion=deleteProduct&id=<%= product.getId()%>">
                                <button class="btn btn-danger">
                                    Eliminar
                                </button>
                            </a> 
                        </td>
                    </tr>
                    <%}%>
                </tbody>

            </table>
            <a href="addProducts.jsp">
                <button class="btn btn-success">
                    Agregar
                </button>
            </a>
            <a href="../index.jsp">
                <button type="submit" class="btn btn-primary">
                    Salir
                </button>
            </a>
    </body>
</html>
