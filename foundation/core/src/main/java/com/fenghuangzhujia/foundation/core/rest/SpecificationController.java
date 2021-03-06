package com.fenghuangzhujia.foundation.core.rest;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fenghuangzhujia.foundation.core.model.PagedList;
import com.fenghuangzhujia.foundation.core.service.SpecifactionService;
import com.fenghuangzhujia.foundation.utils.Servlets;

@RestController
public abstract class SpecificationController<T,I> extends PagingController<T,I> {

	public static final String SEARCH_PREFIX="search_";
	public static final String SORT_PREFIX="sort_";
	
	@Override
	protected abstract SpecifactionService<T, I, String> getService();
	
	@Override
	public String page(@RequestParam(defaultValue="1") Integer page,@RequestParam(defaultValue="8")  Integer size, 
			HttpServletRequest request) {
		Map<String, Object> searchs=Servlets.getParametersStartingWith(request, SEARCH_PREFIX);
		Map<String, Object> sorts=Servlets.getParametersStartingWith(request, SORT_PREFIX);
		PagedList<T> result=getService().findAll(page, size, searchs, sorts);
		return RequestResult.success(result).toJson();
	}
}
