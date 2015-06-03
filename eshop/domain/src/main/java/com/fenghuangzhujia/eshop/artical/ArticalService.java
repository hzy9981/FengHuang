package com.fenghuangzhujia.eshop.artical;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fenghuangzhujia.eshop.artical.dto.ArticalDto;
import com.fenghuangzhujia.foundation.core.dto.DtoSpecificationService;

@Service
@Transactional
public class ArticalService extends DtoSpecificationService<Artical, ArticalDto, String> {

}
