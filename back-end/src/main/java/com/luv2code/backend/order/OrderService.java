package com.luv2code.backend.order;
import com.luv2code.backend.dao.OrderRepository;
import com.luv2code.backend.user.User;
import org.springframework.stereotype.Service;
import java.util.List;
import com.luv2code.backend.entity.*;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void placeOrder(User user, Cart cart) {
        Order order = new Order();
        order.setUser(user);

        for (CartItem cartItem : cart.getCartItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setMenuItem(cartItem.getMenuItem());
            orderItem.setQuantity(cartItem.getQuantity());
            order.addOrderItem(orderItem);
        }
        orderRepository.save(order);

    }

    public Order getOrdersOfUser(User user) {

        return orderRepository.findByUserWithOrderItems(user);
    }



}
