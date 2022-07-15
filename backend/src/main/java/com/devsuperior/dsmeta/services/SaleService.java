package com.devsuperior.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;


// autowired e uma anotation que faz a importação automaticamente , obs: pesquisar sobre ela
// service e uma anotation ela registra o SaleService como um componente do sistema

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public Page<Sale> findSales(String minDate, String maxDate , Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		//a declaração acima today serve para criar uma data com o dia de hoje
		
		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		//um operador ternario para dizer se o maxDate for vazio ele coloca a data de hoje , se não a data 
		//marcada lá no sistema
		
		return repository.findSales(min , max, pageable);
		
	}
	
	
}
