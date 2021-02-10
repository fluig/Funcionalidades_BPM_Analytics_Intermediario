function beforeSendData(customFields,customFacts){
	log.info("beforeSendData [INIT]")
	
	var prox_atividade = getValue("WKNextState");
	log.info("prox_atividade: " + prox_atividade);
	
	var num_solic = getValue("WKNumProces");
	log.info("num_solic: " + num_solic);

	// Enviar dados para a fila de upload
	// OBS: A sincronização acontece a cada 30 minutos e envia tudo o que está parado na fila de upload
	if(prox_atividade == "19"){
		// Campos do tipo String 
	    customFields[0] = hAPI.getCardValue("txt_pais_unidade");
	    customFields[1] = hAPI.getCardValue("txt_estado_unidade");
	        
	    // Campos do tipo Double
	    customFacts[0]= java.lang.Double.parseDouble(num_solic);
	    customFacts[1]= java.lang.Double.parseDouble(hAPI.getCardValue("total_pedido"));
	}
	
    log.info("beforeSendData [FIM]")
}
