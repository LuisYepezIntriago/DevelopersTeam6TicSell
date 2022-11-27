/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.clientserver.model;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

/**
 *
 * @author luisy
 */

public class DataBase {

    private DataBase instancia;
    private MongoClient mongoClient;
    private MongoDatabase mongoDataBase;
    private MongoClientURI uri;
    private MongoCollection<Document> mongoCollection;
    private MongoDatabase DataBase;

    
    public DataBase getInstancia() {
        return instancia;
    }

    public void setInstancia(DataBase instancia) {
        this.instancia = instancia;
    }

    public MongoClient getMongoClient() {
        return mongoClient;
    }

    public void setMongoClient(MongoClient mongoClient) {
        this.mongoClient = mongoClient;
    }

    public MongoDatabase getoDataBase() {
        return mongoDataBase;
    }

    public void setDataBase(Database DataBase) {
        this.DataBase = DataBase;
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
