function successButton(){
	const newline = "\r\n";
	const name = document.querySelector('#name');
	const email = document.querySelector('#email');
	const gender= document.querySelector('#gender')
	const dropdown = document.querySelectorAll('#dropdown');
	const plantspec = document.querySelector('#plantSpec')
	const comments = document.querySelector('#comment-box');
	const msg=document.querySelector('.msg');



	if( name.value === ''|| email.value === '' || dropdown.value ===''){
		msg.classList.add('error');
		msg.innerHTML="Enter Required Parameters";
		}
		else{
			alert( `Name: ${name.value} ${newline}
			Email: ${email.value} ${newline}
			Gender: ${gender.value} ${newline}
			Dropdown: ${dropdown.value} ${newline}`)
		}
	}
