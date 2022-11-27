/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.clientserver.modelDAO;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import ec.edu.espe.clientserver.connectionDB.ConnectionMongoDB;
import ec.edu.espe.clientserver.model.Product;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import org.bson.Document;

/**
 *
 * @author luisy
 */
public class ProductDAO implements ProductCRUD{
        public ArrayList<Product> getProduct() throws ParseException, IOException {

        ConnectionMongoDB mongoDBConnection = new ConnectionMongoDB();
        ArrayList<Product> product = new ArrayList<>();
        MongoDatabase database = mongoDBConnection.connection();
        MongoCollection collection = database.getCollection("products");
        MongoCursor<Document> cursor = collection.find().iterator();
        try {

            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Product producUnit = new Product();
                producUnit.setId(jsonObject.get("id").getAsInt());
                producUnit.setName(jsonObject.get("nombre").getAsString());
                producUnit.setPrice(jsonObject.get("precio").getAsFloat());
                producUnit.setQuantity(jsonObject.get("cantidad").getAsInt());
                producUnit.setProfit(jsonObject.get("ganancia").getAsFloat());
                product.add(producUnit);
            }

        } finally {
            cursor.close();
        }
        return product;
    }
     @Override
    public Product listProduct(int id) {
        String query = "SELECT * FROM `productos` WHERE id=" + id;
        try {
            ConnectionMongoDB= connectionMongoDB.g();
            preparedStatement = connection.prepareStatement(query);
            resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                product.setId(resultSet.getInt("id"));
                product.setName(resultSet.getString("name"));
                product.setPrice(resultSet.getFloat("price"));
                product.setQuantity(resultSet.getInt("quantity"));
                product.setProfit(resultSet.getFloat("profit"));
            }

        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return product;

    }

 

    @Override

    public boolean addProduct(Product product) {

        String query = "INSERT INTO `productos`(`name`, `price`, `quantity`, `profit`) "

                + "VALUES ('"
                + product.getName()
                + "','"
                + product.getPrice()
                + "','"
                + product.getQuantity()
                + "','"
                + product.getProfit()
                + "')";

        try {

            connection = connectionMySQL.getConnection();
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error " + e);
        }

        return false;

    }

    @Override
    public boolean updateProduct(Product product) {
        String query = "UPDATE productos SET name='"
                + product.getName() + "', price = '"
                + product.getPrice() + "', quantity = '"
                + product.getQuantity() + "', profit = "
                + product.getProfit() + " WHERE id = " + product.getId();

        try {

            connection = connectionMySQL.getConnection();
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error " + e);
        }

        return false;

    }

 

    @Override

    public boolean deleteProduct(int id) {

        String query = "DELETE FROM productos WHERE id = " + id;

        try {

            connection = connectionMySQL.getConnection();

            preparedStatement = connection.prepareStatement(query);

            preparedStatement.executeUpdate();

        } catch (Exception e) {

            System.out.println("Error " + e);

        }

        return false;

    }

 

    /*Regla de negocio*/

    @Override
    public float calculateProfits(int quantity, float price) {
        float profit;
        float IVA = (float) 0.12;
        profit = (quantity * price) * IVA;
        return profit;

    }   
        
       
        
}
