/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;


import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

/**
 *
 * @author luisy
 */
public class ModelDatabase {

    private ModelDatabase instancia;
    private MongoClient mongoClient;
    private MongoDatabase mongoDataBase;
    private MongoClientURI uri;
    private MongoCollection<Document> mongoCollection;

    
    public ModelDatabase getInstancia() {
        return instancia;
    }

    public void setInstancia(ModelDatabase instancia) {
        this.instancia = instancia;
    }

    public MongoClient getMongoClient() {
        return mongoClient;
    }

    public void setMongoClient(MongoClient mongoClient) {
        this.mongoClient = mongoClient;
    }

    public MongoDatabase getMongoDataBase() {
        return mongoDataBase;
    }

    public void setMongoDataBase(MongoDatabase mongoDataBase) {
        this.mongoDataBase = mongoDataBase;
    }

    public MongoClientURI getUri() {
        return uri;
    }

    public void setUri(MongoClientURI uri) {
        this.uri = uri;
    }

    public MongoCollection<Document> getMongoCollection() {
        return mongoCollection;
    }

    public void setMongoCollection(MongoCollection<Document> mongoCollection) {
        this.mongoCollection = mongoCollection;
    }

}
