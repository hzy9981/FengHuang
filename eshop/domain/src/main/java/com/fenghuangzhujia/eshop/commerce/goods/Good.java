package com.fenghuangzhujia.eshop.commerce.goods;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fenghuangzhujia.foundation.core.entity.UUIDBaseModel;
import com.fenghuangzhujia.foundation.media.MediaContent;

/**
 * 商品
 * @author pc
 *
 */
@Entity
@Table(name="fhzj_good")
@Inheritance(strategy=InheritanceType.JOINED)
@DiscriminatorColumn(name="good_type")
public abstract class Good extends UUIDBaseModel {
	private String name;
	private double price;
	private double realPrice;
	private String type;
	
	/**
	 * 商品名称
	 * @return
	 */
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * 商品吊盘价格
	 * @return
	 */
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	/**
	 * 商品实际销售价格
	 * @return
	 */
	public double getRealPrice() {
		return realPrice;
	}
	public void setRealPrice(double realPrice) {
		this.realPrice = realPrice;
	}

	/**
	 * 商品类型导览属性
	 * @return
	 */
	@Column(insertable=false,updatable=false,name="good_type")
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	/**
	 * 商品主图
	 * @return
	 */
	@Transient
	public abstract MediaContent getMainPic();
}
