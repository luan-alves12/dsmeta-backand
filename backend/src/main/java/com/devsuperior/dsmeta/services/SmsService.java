package com.devsuperior.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	//essas 4 variáveis de ambiente tem como função trazer do ambiente de execução os dados como chave , telefone
	//
	
	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;
	
	@Autowired
	private SaleRepository salerepository;

	public void sendSms(Long SaleId) {

		//esse método sendSms foi pego lá na doc do twillio , na parte de Sms Quickstart guides ao clicar vai ser
		//redirecionado para a etapa com as linguagens , e lá tem : java quickstart
		
		Sale sale = salerepository.findById(SaleId).get();
		//esse sale ta pegando o id lá da tabela
		
		String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
		//esse date e um tratamento para eu pegar o mes e o ano que ta la na tabela
		
		String msg = "O Vendedor "+sale.getSellerName() + " foi destaque em "+ date + " com um total de R$ "+
		String.format("%.2f", sale.getAmount());
		// e aqui e a mensagem que vai ser enviada para o celular
		
		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
