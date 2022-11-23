/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ModelDAO;

import DataBaseMongo.ConnectionDatabase;
import Interface.CRUDS;
import Model.Item;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import org.bson.Document;

/**
 *
 * @author luisy
 */

public class ModelsDAO implements CRUDS {

    public ArrayList <Item> getItems() throws ParseException, IOException {
       
       ConnectionDatabase mongoDBConnection = new ConnectionDatabase();
       ArrayList<Item> item = new ArrayList<>();
       MongoDatabase database = mongoDBConnection.connection();
       MongoCollection collection = database.getCollection("items");
       MongoCursor<Document> cursor = collection.find().iterator();     
        try {
            
            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Item producUnit = new Item();
                producUnit.setNombre(jsonObject.get("nombre").getAsString());
                producUnit.setDescripcion(jsonObject.get("descripcion").getAsString());
                producUnit.setCantidad(jsonObject.get("cantidad").getAsInt());
                producUnit.setPrecio(jsonObject.get("precio").getAsDouble());
                producUnit.setTotal(jsonObject.get("total").getAsDouble());
                producUnit.setGanancia(jsonObject.get("ganancia").getAsDouble());
                item.add(producUnit);
          }
           
       } finally {
           cursor.close();
       }
        return item;   
           
}

    @Override
    public boolean addItem(Item item) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

}


