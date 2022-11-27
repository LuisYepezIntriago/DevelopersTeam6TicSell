/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package ec.edu.espe.clientserver.controller;

import ec.edu.espe.clientserver.model.Product;
import ec.edu.espe.clientserver.modelDAO.ProductDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author luisy
 */
public class Controlador extends HttpServlet {

    String addProduct = "jsps/addProduct.jsp";
    String updateProduct = "jsps/updateProduct.jsp";
    String listProduct = "jsps/listProduct.jsp";
    String outProduct = "index.jsp";
    int id;
    Product product = new Product();
    ProductDAO productDAO = new ProductDAO();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Controlador</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Controlador at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String access = "";
        String acction = request.getParameter("accion");
        switch (acction) {
            case "addProducts": {
                access = addProduct;
            }

            break;

            case "Agregar": {
                int identity = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                double price = Double.parseDouble(request.getParameter("price"));
                int quantity = Integer.parseInt(request.getParameter("quantity"));
                double profit = productDAO.calculateProfits(price, quantity);
                product.setName(name);
                product.setPrice(price);
                product.setQuantity(quantity);
                product.setProfit(profit);
                productDAO.addProduct(product);

            }

            break;

            case "updateProduct": {
                request.setAttribute("id", request.getParameter("id"));
                access = updateProduct;
            }

            break;
            case "Actualizar": {
                id = Integer.parseInt(request.getParameter("idProduct"));
                String name = request.getParameter("name");
                double price = Double.parseDouble(request.getParameter("price"));
                int quantity = Integer.parseInt(request.getParameter("quantity"));
                double profit = productDAO.calculateProfits(price, quantity);
                product.setId(id);
                product.setName(name);
                product.setPrice(price);
                product.setQuantity(quantity);
                product.setProfit(profit);
                productDAO.updateProduct(product);
            }

            break;
            case "deleteProduct": {
                id = Integer.parseInt(request.getParameter("id"));
                product.setId(id);
                productDAO.deleteProduct(id);
            }
            break;

        }

        RequestDispatcher view = request.getRequestDispatcher(access);
        view.forward(request, response);
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
