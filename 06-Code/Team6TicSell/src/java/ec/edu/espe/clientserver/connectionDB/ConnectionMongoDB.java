/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package ec.edu.espe.clientserver.connectionDB;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

/**
 *
 * @author luisy
 */
public class ConnectionMongoDB {
    private com.mongodb.client.MongoClient mongoClient = null;
    public ConnectionMongoDB() {
        try {
            String uri = "mongodb+srv://SilviaTeam6:DevelopTeam6@cluster0.jmp7qzy.mongodb.net/?retryWrites=true&w=majority";
            mongoClient = MongoClients.create(uri);
        }catch (MongoException e) {
            System.out.println(e);
        }
    }
    
    public MongoDatabase getMongoDatabase() {
        return mongoClient.getDatabase("FashionStoreDB");
    }
}
