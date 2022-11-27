/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.clientserver.interfaces;

/**
 *
 * @author luisy
 */
public class BillCrud {
    public List listBills();
    public Bill listBill(int id);
    public boolean addBill(Bill bill);
    public boolean updateBill(Bill bill);
    public boolean deleteBill(int id);

    /*Regla de negocio*/
    public float calculateProfits(float iva, float price);
}
