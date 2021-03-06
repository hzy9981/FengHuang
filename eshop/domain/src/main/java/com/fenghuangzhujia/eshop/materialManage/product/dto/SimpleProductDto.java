package com.fenghuangzhujia.eshop.materialManage.product.dto;

import com.fenghuangzhujia.eshop.materialManage.brand.dto.SimpleBrandDto;
import com.fenghuangzhujia.foundation.core.dto.DtoBaseModel;

/**
 * 用户下级关联实体获取上级信息
 * @author pc
 *
 */
public class SimpleProductDto extends DtoBaseModel {

	/**产品名称*/
	private String name;
	/**排序序号*/
	private int ordernum;
	/**品牌*/
	private SimpleBrandDto brand;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getOrdernum() {
		return ordernum;
	}
	public void setOrdernum(int ordernum) {
		this.ordernum = ordernum;
	}
	public SimpleBrandDto getBrand() {
		return brand;
	}
	public void setBrand(SimpleBrandDto brand) {
		this.brand = brand;
	}
}
