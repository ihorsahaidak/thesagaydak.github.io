var langs = {
	'en' : {
		'name' : 'Name',
		'email' : 'Email',
		'message' : 'Message',
		'follow_me' : 'Follow me',


		'about' : 'About me',
		'experience' : 'Experience',
		'work' : 'Work',
		'connect' : 'Connect',
		'who_am_i' : 'My Name is Igor, and I am a PHP developer',
		'about_me' : "Hi everyone, thanks for click on my personal website)) I'm the student of CHNU on computer system analysis faculty. Badly love with the web developing and the mobiles and computers technologies. I work for some web company in Chernivtsi as PHP developer from October 2016. I have a knowledge in next technologies: PHP 5.6+, laravel framework 5.3+, SQL, MySql, JS, JQuery, HTML, CSS, Bootstrap, TypeScript, Git, Bash. More info in my LinkedIn account."
	},
	'uk' : {
		'name' : "Ім'я",
		'email' : 'Емейл',
		'message' : 'Повідомлення',
		'follow_me' : 'Підписатися',

		'about' : 'Про мене',
		'experience' : 'Досвід',
		'work' : 'Роботи',
		'connect' : "Зв'язок",
		'who_am_i' : 'Мене звати Ігор і я PHP програміст',
		'about_me' : "Привіт всім, дякую що зайшли на мій сайт)) Я студент ЧНУ ім. Юрія Федьковича кафедри системного аналізу. Цікавлюсь веб-програмуванням та мобільними і компютерними технологіями. Працюю в компанії в місті Чернівці як PHP програміст з жовтня 2016. Працював з такими технологіями як: PHP 5.6+, laravel framework 5.3+, SQL, MySql, JS, JQuery, HTML, CSS, Bootstrap, TypeScript, Git, Bash. Більше інформації в моєму LinkedIn акаунті."
	}
};

$(function(){
	$(".translate").click(function(){
		var lang = $(this).attr('id');

		$('.lang').each(function(index, element){
			$(this).text(langs[lang][$(this).attr('key')])
		});
	});
});
