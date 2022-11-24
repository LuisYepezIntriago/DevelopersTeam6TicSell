/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ModelDAO;

import DataBaseMongo.ConnectionDatabase;
import Interface.CRUDS;
import Model.Customers;
import Model.Item;
import Model.Bill;
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

    public ArrayList<Item> getItems() throws ParseException, IOException {

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

    public ArrayList<Customers> getCustomers() throws ParseException, IOException {

        ConnectionDatabase mongoDBConnection = new ConnectionDatabase();
        ArrayList<Customers> customers = new ArrayList<>();
        MongoDatabase database = mongoDBConnection.connection();
        MongoCollection collection = database.getCollection("customers");
        MongoCursor<Document> cursor = collection.find().iterator();
        try {

            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Customers users = new Customers();
                users.setId(jsonObject.get("id").getAsString());
                users.setName(jsonObject.get("name").getAsString());
                users.setAddress(jsonObject.get("address").getAsString());
                users.setPhone(jsonObject.get("phone").getAsString());
                customers.add(users);
            }

        } finally {
            cursor.close();
        }
        return customers;

    }

    public ArrayList<Bill> getBills() throws ParseException, IOException {

        ConnectionDatabase mongoDBConnection = new ConnectionDatabase();
        ArrayList<Bill> bill = new ArrayList<>();
        MongoDatabase database = mongoDBConnection.connection();
        MongoCollection collection = database.getCollection("bill");
        MongoCursor<Document> cursor = collection.find().iterator();
        try {

            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Bill sellBill = new Bill();
                sellBill.setId(jsonObject.get("id").getAsString());
                sellBill.setName(jsonObject.get("name").getAsString());
                sellBill.setLastName(jsonObject.get("lastname").getAsString());
                sellBill.setAddress(jsonObject.get("address").getAsString());
                sellBill.setPhone(jsonObject.get("phone").getAsDouble());
                sellBill.setItem(jsonObject.get("item").getAsString());
                sellBill.setAmount(jsonObject.get("amount").getAsDouble());
                sellBill.setCost(jsonObject.get("cost").getAsDouble());
                bill.add(sellBill);
            }

        } finally {
            cursor.close();
        }
        return bill;

    }

    @Override
    public boolean addItem(Item item) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean addCustomer(Customers customers) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean addBill(Bill bill) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}
