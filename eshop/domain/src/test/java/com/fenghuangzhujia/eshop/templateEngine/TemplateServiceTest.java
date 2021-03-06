package com.fenghuangzhujia.eshop.templateEngine;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.fenghuangzhujia.eshop.templateEngine.template.TemplateService;
import com.fenghuangzhujia.eshop.templateEngine.template.dto.TemplateDto;
import com.fenghuangzhujia.eshop.templateEngine.template.dto.TemplateInputArgs;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:applicationContext.xml" })
public class TemplateServiceTest {

	@Autowired
	private TemplateService templateService;
	
	//@Test
	public void addCarouselTemplate() {
		String name="轮播1";
		File file=new File("C:/Users/pc/Desktop/template.xml");
		try {
			String content=FileUtils.readFileToString(file);
			addTemplate(name, content);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void updateCarouselTemplate() {
		String name="轮播1";
		File file=new File("C:/Users/pc/Desktop/template.xml");
		try {
			String content=FileUtils.readFileToString(file);
			System.out.println(content);
			updateTemplate("404040e64e9fa2a6014e9fa2b7ac0000", name, content);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//@Test
	public void add() {
		String name="test";
		String content="<div>arguments{{ test:TEXT :测试数据 }}</div>"
				+ "<div>arguments{{ test2:IMG :测试图片数据 }}</div>";
		addTemplate(name, content);		
	}
	
	//@Test
	public void update(){
		String id="404040e64e94e3ee014e94e4048a0000";
		String name="test";
		String content="<div>arguments{{ test3:TEXT :测试数据 }}</div>"
				+ "<div>arguments{{ test4:IMG :测试图片数据 }}</div>";
		updateTemplate(id, name, content);
	}
	
	private TemplateDto addTemplate(String name, String content) {
		TemplateInputArgs args=new TemplateInputArgs();
		args.setName(name);
		args.setContent(content);
		TemplateDto dto=templateService.add(args);
		return dto;
	}
	
	private TemplateDto updateTemplate(String id, String name, String content) {
		TemplateInputArgs args=new TemplateInputArgs();
		args.setId(id);
		args.setName(name);
		args.setContent(content);
		TemplateDto dto=templateService.update(args);
		return dto;
	}
}
