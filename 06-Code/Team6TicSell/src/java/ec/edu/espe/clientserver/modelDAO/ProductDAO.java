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
public class ProductDAO {
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
}
