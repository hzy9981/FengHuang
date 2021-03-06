package com.fenghuangzhujia.eshop.commerce.order;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.fenghuangzhujia.eshop.commerce.order.GoodOrder.OrderStatus;
import com.fenghuangzhujia.foundation.core.persistance.SpecificationRepository;

public interface GoodOrderRepository extends SpecificationRepository<GoodOrder, String> {
	public Page<GoodOrder> findByUserId(String userid, Pageable pageable);
	
	public Page<GoodOrder> findByStatus(OrderStatus status, Pageable pageable);
	
	public Page<GoodOrder> findByUserIdAndStatus(String userid, OrderStatus status, Pageable pageable);
	
	Long countByStatus(OrderStatus status);	
	
	Long countByUserIdAndStatus(String userId, OrderStatus status);
}
