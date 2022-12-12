/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.clientserver.modelDAO;

import ec.edu.espe.clientserver.connectionDB.ConnectionMongoDB;
import ec.edu.espe.clientserver.interfaces.ProductCrud;
import ec.edu.espe.clientserver.model.Product;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author luisy
 */
public class ProductDAO implements ProductCrud {

    ConnectionMongoDB mongoDBConnection = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    ResultSet resultSet;
    Product product;
    @Override
    public List listProducts() {
        ArrayList<Product> productList = new ArrayList<>();

        try {
            mongoDatabase = mongoDBConnection.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            FindIterable<Document> findIterable = collection.find(new Document());
            MongoCursor<Document> mongoCursor = findIterable.iterator();
            int counter = 0;
            while (mongoCursor.hasNext()) {
                Document docObject = mongoCursor.next();
                product = new Product();
                counter = counter + 1;

                product.setId(docObject.getInteger("id"));
                product.setName(docObject.getString("name"));
                product.setPrice(docObject.getDouble("price"));
                product.setQuantity(docObject.getInteger("quantity"));
                product.setProfit(docObject.getDouble("profit"));

                productList.add(product);

            }

        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return productList;
    }

    public double calculateProfits(double price, int quantity) {
        double profit;
        double IVA = (float) 0.12;
        profit = (quantity * price) * IVA;
        return profit;
    }

    @Override
    public boolean addProduct(Product product) {
        String query = "{"
                + "id: " + product.getId() + ","
                + "name: " + "'" + product.getName() + "'" + ","
                + "price: " + product.getPrice() + ","
                + "quantity: " + product.getQuantity() + ","
                + "profit: " + product.getProfit() + ","
                + "}";
        try {
            mongoDatabase = mongoDBConnection.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            collection.insertOne(Document.parse(query));
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return false;
    }

    @Override
    public boolean updateProduct(Product product) {
        String query = "UPDATE productos SET name='"
                + product.getName() + "', description ='"
                + product.getQuantity() + "',profile  ="
                + product.getPrice() + "',quantity  ='"
                + product.getProfit() + "',WHERE id   =" + product.getId();
        try {
            mongoDatabase = mongoDBConnection.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            collection.insertOne(Document.parse(query));
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return false;
    }

    @Override
    public boolean deleteProduct(int id) {
        mongoDatabase = mongoDBConnection.getMongoDatabase();
        MongoCollection collection = mongoDatabase.getCollection("Products");
        collection.deleteOne(Filters.eq("id", id));

        return false;
    }

    @Override
    public double calculateProfits(int quantity, double price) {
        double profit;
        double IVA = (float) 0.12;
        profit = (quantity * price) * IVA;
        return profit;
    }

    @Override
    public Product listProduct(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public double calculateProfits(double price) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
