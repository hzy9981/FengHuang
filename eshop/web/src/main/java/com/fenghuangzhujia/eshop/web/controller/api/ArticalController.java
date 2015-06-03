package com.fenghuangzhujia.eshop.web.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fenghuangzhujia.eshop.artical.ArticalService;
import com.fenghuangzhujia.eshop.artical.dto.ArticalDto;
import com.fenghuangzhujia.foundation.core.model.PagedList;
import com.fenghuangzhujia.foundation.core.rest.RequestResult;

@RestController
public class ArticalController {

	@Autowired
	private ArticalService service;
	
	@RequestMapping("articals")
	public String list(@RequestParam(defaultValue="1") int page, @RequestParam(defaultValue="8") int size) {
		PagedList<ArticalDto> result=service.findPage(page, size);
		return RequestResult.success(result).toJson();
	}
	
	@RequestMapping("artical/{id}")
	public String getOne(@PathVariable String id) {
		ArticalDto result=service.findOne(id);
		return RequestResult.success(result).toJson();
	}
}
