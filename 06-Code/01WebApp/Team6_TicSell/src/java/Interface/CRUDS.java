/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Interface;

import Model.Bill;
import Model.Customers;
import Model.Item;

/**
 *
 * @author luisy
 */
public interface CRUDS {
    public boolean addItem(Item item);
    public boolean addCustomer(Customers customers);
    public boolean addBill(Bill bill);
}
