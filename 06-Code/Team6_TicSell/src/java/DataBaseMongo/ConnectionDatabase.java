/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DataBaseMongo;

import Model.ModelDatabase;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoSecurityException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

/**
 *
 * @author luisy
 */
public class ConnectionDatabase {

    ModelDatabase modelDatabase = new ModelDatabase();
    public static MongoDatabase database;

    public MongoDatabase connection() {
        String URI = "mongodb+srv://layepez3:270700@cluster0.lmgiiwp.mongodb.net/ticsell?retryWrites=true&w=majority";

        try {
            modelDatabase.setUri(new MongoClientURI(URI));
            modelDatabase.setMongoClient(new MongoClient(modelDatabase.getUri()));
            modelDatabase.setMongoDataBase(modelDatabase.getMongoClient().getDatabase("ticsell"));
            modelDatabase.setMongoCollection(modelDatabase.getMongoDataBase().getCollection((URI)));
            modelDatabase.getMongoCollection().drop();
        } catch (MongoSecurityException a) {
            modelDatabase.setMongoDataBase(null);
        }
        return modelDatabase.getMongoDataBase();
    }

    public void ConnectionMongo() {
        ConnectionDatabase connectionDatabase = new ConnectionDatabase();
        database = connectionDatabase.connection();
    }

    public void save(Document document, String collection, MongoDatabase database) {
        MongoCollection<Document> collectionDocument = database.getCollection(collection);
        collectionDocument.insertOne(document);
    }

}
