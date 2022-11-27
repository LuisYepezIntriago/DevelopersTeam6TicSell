/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package ec.edu.espe.clientserver.connectionDB;

import ec.edu.espe.clientserver.model.DataBase;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoSecurityException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
import org.bson.Document;
import org.bson.conversions.Bson;

/**
 *
 * @author luisy
 */
public class ConnectionMongoDB {

    ConnectionMongoDB modelDatabase = new ConnectionMongoDB();
    public static MongoDatabase database;

    
    public MongoDatabase connection() {
        String URI = "mongodb+srv://SilviaTeam6:DevelopTeam6@cluster0.jmp7qzy.mongodb.net/?retryWrites=true&w=majority";

        try {
            modelDatabase.set(new MongoClientURI(URI));
            modelDatabase.setMongoClient(new MongoClient(modelDatabase.getUri()));
            modelDatabase.setDataBase(modelDatabase.getMongoClient().getDatabase("ticsell"));
            modelDatabase.setMongoCollection(modelDatabase.getoDataBase().getCollection((URI)));
            modelDatabase.getMongoCollection().drop();
        } catch (MongoSecurityException a) {
            modelDatabase.setDataBase(null);
        }
        return modelDatabase.getoDataBase();
    }

    public void ConnectionMongo() {
        ConnectionMongoDB connectionDatabase = new ConnectionMongoDB();
        database = connectionDatabase.connection();
    }

    public void save(Document document, String collection, MongoDatabase database) {
        MongoCollection<Document> collectionDocument = database.getCollection(collection);
        collectionDocument.insertOne(document);
    }
    
    public void delete(String col, String key, Object value, MongoDatabase database) {
        MongoCollection<Document> collection = database.getCollection(col);
        Bson filter = eq(key, value);
        collection.findOneAndDelete(filter);
    }

}

