function sendMessage(){
	let inputPhone = document.getElementById('exampleFormControlInput1');
	let inputMessage = document.getElementById('exampleFormControlTextarea1');
	
	const URL = 'https://api.whatsapp.com/send?phone=';
	
	let phone = inputPhone.value;
	let message = inputMessage.value;

	if (phone == "") alert('O CAMPO TELEFONE NÃO PODE SER NULLO!');
	else{
		let http = URL+phone+'&text='+message;
		if (window.confirm('Enviar mensagem para: '+ phone)) 
		{
			window.open(http, '_blank');
		}

		}
}


