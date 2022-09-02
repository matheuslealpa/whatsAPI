/*Populando select-box do DDD*/

let options =
[
	{
		"text": "011",
	    "value": "11",
	},
	{
	    "text": "021",
	    "value": "21",
	},
	{
	    "text": "031",
	    "value": "31",
	},
	{
		"text": "041",
	    "value": "41",
	},
	{
	    "text": "051",
	    "value": "51",
	},
	{
	    "text": "061",
	    "value": "61",
	},
	{
	    "text": "071",
	    "value": "71",
	},
	{
	    "text": "081",
	    "value": "81",
	},
	{
	    "text": "091",
	    "value": "91",
	    selected: true
	  },
	];

let inputSelectBox = document.getElementById('ddd-itens');

options.forEach(option => inputSelectBox.add(
    new Option(option.text, option.value, option.selected)
  ));

function sendMessage(){
	let inputPhone = document.getElementById('exampleFormControlInput1');
	let inputMessage = document.getElementById('exampleFormControlTextarea1');
	
	const URL = 'https://api.whatsapp.com/send?phone=';
	
	let ddd = inputSelectBox.value;
	let phone = inputPhone.value;
	let message = inputMessage.value;

	if (phone == "") alert('O CAMPO TELEFONE NÃO PODE SER NULLO!');
	else{
		let http = URL+"55"+ddd+phone+'&text='+message;
		if (window.confirm('Enviar mensagem para: '+ '('+ddd+') '+ phone)) 
		{
			window.open(http, '_blank');
		}

		}
}


