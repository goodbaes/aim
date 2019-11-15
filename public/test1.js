var extrovert= new Array('Отдаю сил больше, чем сохраняю','Больше трачу энергии, чем накапливаю','Использую информации больше, чем сберегаю','вопрос 4');
var introvert= new Array('Сохраняю сил больше, чем отдаю','Больше сберегаю энергии, чем растрачиваю','Сберегаю информации больше, чем использую','вопрос 45');
var i = 0;
var b = 0;
var a = 0;

function clickButtonOne()
    {
    i++;
    
    a++;
    if (i==extrovert.length)
    	 result();
  			else	go();
  
    }
function clickButtonTwo()
    {
    i++;
    b++;
   
    if (i==extrovert.length)
    	result();
 		 	else
  				go();
    }
function alertTest(){
alert("bare");
}
function go()
{
document.getElementById('test').innerHTML=
'<p type="button" onclick="clickButtonOne()" id="text1"></p> <br><p type="button" onclick="clickButtonTwo()" id="text2"></p>';
document.getElementById('text1').innerHTML=extrovert[i];
document.getElementById('text2').innerHTML=introvert[i];
}


function result()
{
 document.getElementById('test').innerHTML = '<p class="itog">В тебе интроверта <a id="introvA"></a> штук <br><br>В тебе интроверта <a id="introvB"></a> штук</p>';
 document.getElementById('introvA').innerHTML = a;
  document.getElementById('introvB').innerHTML = b;
}
