/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

/**
 *
 * @author luisy
 */
public class Bill {
    private String Id;
    private String name;
    private String lastName;
    private String address;
    private double phone;
    private String Item;
    private double amount;
    private double cost;

    public Bill(String Id, String name, String lastName, String address, double phone, String Item, double amount, double cost) {
        this.Id = Id;
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.Item = Item;
        this.amount = amount;
        this.cost = cost;
    }
    
    public Bill(){
    
}

    public String getId() {
        return Id;
    }

    public void setId(String Id) {
        this.Id = Id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getPhone() {
        return phone;
    }

    public void setPhone(double phone) {
        this.phone = phone;
    }

    public String getItem() {
        return Item;
    }

    public void setItem(String Item) {
        this.Item = Item;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

     

}


