package com.luv2code.backend.order;

import com.luv2code.backend.dao.CartRepository;
import com.luv2code.backend.dao.OrderRepository;
import com.luv2code.backend.dao.ShippingAddressRepository;
import com.luv2code.backend.user.User;
import org.springframework.stereotype.Service;
import com.luv2code.backend.entity.*;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    private final CartRepository cartRepository;
    private final ShippingAddressRepository shippingAddressRepository;

    public OrderService(OrderRepository orderRepository, CartRepository cartRepository, ShippingAddressRepository shippingAddressRepository) {
        this.orderRepository = orderRepository;
        this.cartRepository = cartRepository;
        this.shippingAddressRepository = shippingAddressRepository;
    }

    public void placeOrder(User user, Cart cart, ShippingAddress shippingAddress) {

        ShippingAddress savedShippingAddress = shippingAddressRepository.save(shippingAddress);

        Order order = new Order();
        order.setUser(user);
        order.setShippingAddress(savedShippingAddress);

        for (CartItem cartItem : cart.getCartItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setMenuItem(cartItem.getMenuItem());
            orderItem.setQuantity(cartItem.getQuantity());
            order.addOrderItem(orderItem);
        }

        orderRepository.save(order);
        cartRepository.delete(cart);

    }

    public Order getOrdersOfUser(User user) {
        return orderRepository.findByUserWithOrderItems(user);
    }
}
