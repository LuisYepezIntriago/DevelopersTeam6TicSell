/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.clientserver.interfaces;

/**
 *
 * @author luisy
 */
public class CustomerCrud {

    public List listCutomers();
    public Customer listCustomer(int id);
    public boolean addCustomer(Customer customer);
    public boolean updateCustomer(Customer customer);
    public boolean deleteCustomer(int id);
        
}
