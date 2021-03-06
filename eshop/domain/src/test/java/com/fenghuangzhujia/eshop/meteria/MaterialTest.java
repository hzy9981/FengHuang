package com.fenghuangzhujia.eshop.meteria;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.fenghuangzhujia.eshop.materialManage.material.MaterialService;
import com.fenghuangzhujia.eshop.materialManage.material.dto.MaterialDto;
import com.fenghuangzhujia.eshop.materialManage.material.dto.MaterialInputArgs;
import com.fenghuangzhujia.foundation.core.model.PagedList;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:applicationContext.xml" })
public class MaterialTest {

	@Autowired
	private MaterialService materialService;
	
	//@Test
	public void getMaterials() {
		PagedList<MaterialDto> materials=materialService.findPage(1, 8);
		System.out.println(materials);
	}
	
	@Test
	public void addMaterial() {
		MaterialInputArgs args=new MaterialInputArgs();
		args.setOrdernum(0);
		args.setProductId("404040e64e76be8e014e76bea29d0002");
		args.setTypeName("家具");
		String[] ids={"8aac48364e2a3809014e2b0e49b20003"};
		args.setPackageIds(ids);
		materialService.add(args);
	}
}
