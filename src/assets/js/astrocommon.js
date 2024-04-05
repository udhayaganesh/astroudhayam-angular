

function numeralogycalc() {
var result ='';
 var name = document.getElementById("fname").value;

 if(name == null || name == '')
 {
	return null;
 }else{
 if(!AlphaNumericCheck(name))
 {
	 document.getElementById("lblErrorMsg").innerHTML = 'please enter only valid name(alphabets)';
	 document.getElementById("fname").value ='';
	 document.getElementById("demo").innerHTML = '';
	 return;
 }
else{  
 var numb= getNumerology(name);
 result = getNumberologyResult(numb);
 document.getElementById("demo").innerHTML = result;
 document.getElementById("lblErrorMsg").innerHTML = '';
 }
}
}

function getNumberologyResult(num)
{
	const sun = " <b> 	You are a Dominant character.  You are higher-than-average levels of aggressive, disagreeable, manipulative personality. You have many ideas and opinions, and he’s keen to share them with those around him. You are hands-on and focused on producing results. You are independence and autonomy above all.  In short , you are “get it done” type of person. </b> <br><br> Auspicious Date : 1 10 19 28 2 11 29 <br>"+
	"Auspicious Day : Sunday<br>"+
	"Auspicious Month : January February April July November October<br>"+
	
	"Auspicious Gems : Ruby" ;
	
	const moon = " <b> 	You are a Soft character, make everyone around them happy. But you are very sensitive and get hurt easily. You are offer their help to others readily.</b> <br><br> Auspicious Date : 7 16 25 "+
	"Auspicious Day : Monday Sunday Friday<br>"+
	"Auspicious Month : February July November<br>"+
	"Auspicious Gems : Pearl<br>"+
	"Auspicious Color : White " ;
	
	const guru = " <b> 	You are a highly adaptable, Clever, open-minded and skeptical. You are more self control. You are sensitive to other people's experiences. You can almost feel what someone is thinking/feeling</b> <br><br> Auspicious Date : 3 12 21 9 16 27 "+
	"Auspicious Day : Thursday<br>"+
	"Auspicious Month : February March<br>"+
		"Auspicious Gems : Gold / Yellow Sapphire<br>"+
	"Auspicious Color : Yellow orange" ;
	
	const rahu = " <b> 	You are a Rich Person. You are materialistic pleasure and worldly desire. It makes the soul surrender to materialisation. will be an outcast, have harsh speech, he will be engrossed in lies, treachery and will be suffering from thorax and abdomen infestations.You are very powerful and has the capacity of turning friends into enemies and vice versa.</b> <br><br> Auspicious Date : 1 10 19 28 2 11 29 3 16 25"+
	"Auspicious Day : Sunday<br>"+
	"Auspicious Month : January February July October Novemberz<br>"+
	"Auspicious Gems : Hessonite<br>"+
	"Auspicious Color : Grey Yellow" ;
	
	const mercury = " <b> 	You are a You are intellect of an individual. You are high intellect, sharp memory and will make correct decisions. You have ability to comprehend and process information into decisive conclusion. You are responsible for good business or a finance career too.You carrer could be a businessman, a stock broker,  a financial analyst, a banker, an accountant, a business analyst or sales professional.  </b> <br><br> Auspicious Date : 5 14 23 9 18 27 "+
	"Auspicious Day : Wednesday<br>"+
	"Auspicious Month : August September<br>"+
	"Auspicious Gems : Emerald<br>"+
	"Auspicious Color : Green" ;
	
	const venus = " <b> You are a Wealthy, luxury and enjoyable person especially the material ones. You are a significator of desire like love, romance, beauty, marriage, sex, semen, youth, fine arts, theatre, music, perfume, luxuries, luxurious vehicles and beauty. You are may be indulgent, but it isn't deceitful. You passionate romantic who simply loves to be in love. your values, including your relationship with finances and material possessions.  </b> <br><br> Auspicious Date : 6 15 24 18 27 "+
	"Auspicious Day : Tuesday Thursday<br>"+
	"Auspicious Month : June<br>"+
	"Auspicious Gems : Diamond<br>"+
	"Auspicious Color : Green Blue" ;
	
	const kethu = " <b> You are a Knowledge,fantasy, invincibility, psychic abilities and Wisdom Person.  </b> <br><br> Auspicious Date : 7 16 25 2 11 20 29 "+
	"Auspicious Day : Sunday Monday<br>"+
	"Auspicious Month : February July November<br>"+
	"Auspicious Gems :  Cats Eye" ;
	
	
	const sat = " <b> 	You are a Great Worker and natural diplomat. ou are cooperative rather than competitive and can work well with others. In most cases, you are not overly emotional. When a decision needs to be made, you weigh the pros and cons carefully. Your greatest skills include endurance, flexibility, and patience.</b> <br><br> Auspicious Date : 1 10 19 28 4 13 22 31 9 18 27"+
	"Auspicious Day : Sunday Monday <br>"+
	"Auspicious Month : January February April July October November<br>"+
	"Auspicious Gems : Blue Sapphire<br>"+
	"Auspicious Color : Yellow" ;
	
	const mars= " <b> 	You are a courage , aggressive and would be having high leadership skills. You are interested in acquisition of landed properties, acquiring of status, affluence in profession/occupation and even relieves from steep debts. You have characteristics like courage, bravery, patience, self-confidence, leadership abilities, physical strength, forcefulness, violence. You love doing yoga, meditation and ascetics</b> <br><br> Auspicious Date : 9 18 27 6 15 24 5 14 "+
	"Auspicious Day : Tuesday Thursday Friday<br>"+
	"Auspicious Month : March May June September December<br>"+
	"Auspicious Gems : 	Coral<br>"+
	"Auspicious Color : Red" ;
	
	
	const value = [sun,moon,guru,rahu,mercury,venus,kethu,sat,mars];
	return value[parseInt(num) -1];
}
function getNumerology(fname)
{
const value1 = ["A","I","J","Q","Y"];
const value2 = ["B","K","R"];
const value3 = ["C","G","L","S"];
const value4 = ["D","M","T"];
const value5 = ["E","H","N","X"];
const value6 = ["U","V","W"];
const value7 = ["O","Z"];
const value8 = ["F","P"];
 
	var str = (fname).trim().toUpperCase();
	var finalValue=0;
	 for (var i = 0; i < str.length; i++) {
	  
		if(value1.includes(str.charAt(i)))
		{
			finalValue = parseInt(finalValue) + 1;
		}
		else if(value2.includes(str.charAt(i)))
		{
			finalValue = parseInt(finalValue) + 2;
		}
		else if(value3.includes(str.charAt(i)))
		{
			finalValue = parseInt(finalValue )+ 3;
		}
		else if(value4.includes(str.charAt(i)))
		{
			finalValue = parseInt(finalValue) + 4;
		}
		else if(value5.includes(str.charAt(i)))
		{
			finalValue = parseInt(finalValue) + 5;
		}
		else if(value6.includes(str.charAt(i)))
		{
			finalValue = parseInt(finalValue) + 6;
		}
		else if(value7.includes(str.charAt(i)))
		{
			finalValue = parseInt(finalValue )+ 7;
		}
		else if(value8.includes(str.charAt(i)))
		{
			finalValue = parseInt(finalValue) + 8;
		} 
	}
	//alert('###'+finalValue);
	while(finalValue >9 )
	{
		var finalValueNew  =finalValue+'';
		//alert('$$$$$$$$$'+finalValueNew)
		finalValue = 0;
		for (var i = 0; i < finalValueNew.length; i++) {
			//alert('digit=='+finalValueNew.charAt(i));
			
			
			finalValue = parseInt(finalValue) + parseInt(finalValueNew.charAt(i));
			//alert('finalValue=='+finalValue);
		}
	}
	 
	return finalValue;
}
 	function  AlphaNumericCheck(textValue){
     var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz";
    var checkStr =  textValue;
    var allValid = true;
    for (i = 0;  i < checkStr.length;  i++){
	ch = checkStr.charAt(i);
	//alert(ch);
	   for (j = 0;  j < checkOK.length;  j++)
	  
	       if (ch == checkOK.charAt(j))
	       //alert(checkOK.charAt(j));
		   break;
	       if (j == checkOK.length){
		   allValid = false;
		   break;
	       }
    }
    if (!allValid){
         return false;
    }
    return true;

}


function myRemedyFunction() {
 /*var gender = document.getElementById("gender").value;
 if(gender == null || gender == '')
 {
	alert("select Gender first");
	return null;
 }else{*/
 
 const sym= ["If sun is weak or malefic, person will always have excess saliva in his mouth. Frequent numbness in limbs or some physical disorder is possible.He/she will feel insecure about their position and respect in society and try to praise themselves. Colorblindness(red or grey color) is possible.Eye sight will be reduced.",
" Mental illness, lack of interest in any activity, pessimism, pets will die(if more malefic), doubts or suspicion over lover or spouse, indifferences with mother, frequent quarrels between lovers, will take help of alchohol whenever depressed. Some of you will spend life in desert or draught effected areas. If badly afflicted, will cause unusual sexual thoughts like habitual masturbation, lack of control over mind, addiction to pornography, wet dreams etc. Will live more in dream world than in reality and ultimately lose golden oppurtunities. ",
"If mars is malefic or weak, frequent knee pains are possible.Anemia(blood deficiency), dark circles below eyes, eye sight or frequent headaches possible.Reproduction capacity will be reduced and progeny will be delayed.Women may have irregular menstruation and frequent abortions.Will take debts but cannot clear them for long time and will have to live secret life.If you lend money, it won’t be recovered in time.Fear of police and dreams of being chased will be common.",
"Ability to smell will be reduced.Sexual strength will also be reduced.Teeth related problems will trouble frequently.Nervous system will be weak and some skin allergies possible.Transexual or abnormal thoughts in sexual activities will increase.Few will become pornograhy writers and will write with secret names.",
"Jupiter will cause break in education. Will lose gold and money.Will make you wear cheap quality jewellery.Will be blamed for mistakes you have never committed.Hair on scalp will fall frequently.Marriage will be delayed or will remain childless for many years after marriage.Diabetes and obesity will cause problems for few.Lack of faith in religion will make them rebels in the society.",
"If venus is weak or malefic, thumb finger will become weak or it will be prone to injuries.Skin diseases are possible.Low sperm count in men and reproductory system will be weak in women.Love affairs will fail to materialise and will be insulted by opposite sex.Differences with your female kids.Lack of vigour and excess sleep during day.Diabetes is possible for few.If badly afflicted or retrograde will cause lack of faith in religion.Will be interested in pornography more than real sexual activity and cause pain to their partners.Unsual trends in sexual activities will be followed secretly.",
" If saturn is weak or malefic, Fire accidents or electric short circuits at home or at workplace. Cattle will die if you are in dairy business. Hair from eye brows and eye lashes will fall frequently.Your house will look much older than its actual age. Insects, bugs, ants, spiders will reside in your house and spoil it. Hair on scalp will fall faster. Sudden illness and weight loss possible. Will lack vigour and strength. Will become more pessimistic and also cause indifferences and insults with maids. ",
"If Rahu is malefic, Pet dog will die. Finger Nails will become weak.Will have frequent quarrels with neighbours, co-workers or lovers. Will lose peace of mind and have sleepless nights. Will have more rats in kitchen and store room. Fear of snake or frequent appearance of reptiles in dreams are possible. Will feel cheated or abused by lovers. Love-less life will divert you towards alchoholism or escapism from job",
"If ketu is malefic, children will cause problems. Foot nails will break or become weak. Arthritis, knee pains, kidney stones, infections in kidney and urinary problems possible. Prayers will not be answered and lack of faith in religion or spirituality possible. Frequent viral infections are possible for few."
  ];
 const rem= [" Before starting any new work or before leaving home, drink a glass of water mixed with sugar.Avoid meat and stick to vegetarian meal.Feed black cow and monkey whenever possible.If you cook, then put off the stove flame using milk.Pet a dog at home and take blessing of your mother everyday.Do not accept any gift for free of cost from anyone, except from parents.Donate dark red or ruby colored clothes.",
"Never argue with your mother or do anything against her wish. Feed birds and never cage them at home.Never do diary business and buy sweets for young kids(female).If you are having frequent nightmares, keep a glass filled with milk on a table besides your head before sleeping and next morning pour it on roots of any huge tree(preferably holy fig tree).Alternate method is to keep a crystal below your pillow while sleeping and switch off television, mobile phone and computer atleast one hour before sleep.Offer white color flowers at graveyards.Feed milk to pets regularly.Always try to meditate for few minutes everyday and never spend time alone.Never donate to any educational insitution or never give free education to anyone, nor buy gift books to anyone.Do not own any religious place on your name. ",
 "Donate sweets to temple nearby. Grow a neem tree in your backyard.Feed cows when possible. Always carry a red color handkerchief or napkin. Try to live in joint or big family. Stay away from physically handicapped people. Try to visit holy places freququently. Try to buy an elephant’s tusk and store it in your bedroom. Do not take anything for free of cost from anyone(including family members, especially siblings). Always buy gifts for female siblings on their anniversaries or festivals. Donate blood occassionally but also take dry fruits regularly to produce new blood. Gayatri Mantra recitation will help. Donate any useful tool to a farmer or donate to police fund or military funds.Gift any pottery item or something made of copper to friends.",
"Clean your teeth and tongue atleast twice a day.Wash new clothes before wearing them for first time.Donate milk and rice to any temple.Grow pet dogs at home.Become a strict vegetarian and quit alchohol.Try to feed crows everyday before you eat.Drink water through silver glass everyday.Feed wet green grams to birds. ", 
"Always wear yellow color cap or turban.Keep your nose clean always and especially starting any new work.Apply turmeric or sandalwood paste on forehead.Donate bananas or sweets to old persons and orphans.Try to wear more gold jewellery.Help your siblings and cousins whenever possible.Never bath or swim in open air , rivers or in oceans.Stay away from non-vegetarian food and alchohol.Take blessings of your parents before starting any new work and donate turmeric to any temple, 8 days in a row.If you have jupiter troubling you in 11th house, use your father’s items like pens, vehicles.If you are constantly cheated by astrologers, spiritual or religious gurus, then stop consulting them and start meditating by yourself.  ",
"Always wear clothes that are washed. Never wear clothes worn from last night. Never accept free gifts. Always keep a silver piece(square shaped) in your wallet. Buy sweets for widows and old people.Feed black color cow when possible.Donate cow ghee to any temple and also use it at home.Take blessings of your mother regularly.Be loyal to your spouse or lover.  ",  
"Clean your teeth with neem based or any ayurvedic toothpaste. Do not cut down trees.   Feed monkeys when possible and never kill snakes or any reptiles. Donate footwear to homeless people. Do not drink milk during nights. Try to avoid buffallo milk and stick to cow milk. Buy small silver balls and keep them in your pocket or handbag always. Become strict vegetarian and quit alchohol. Always avoid litigations, court cases and matters where you are forced to lie. Wear more dark green color clothes. Stay away from flirting with opposite sex and adultery. Help blind people. If you cook, put off stove flame with milk during nights only. Stuff a flute made of bamboo with sugar or jaggery and bury it in a secluded place during nights. If you are facing a long time court case or some litigation and if saturn dasa is operating or saturn is transiting in your moon sign, then fill a pot made of clay with honey and cover its lid and bury it under flowing water.",
" Always wear a cap or turban(preferably dark blue color).Try to live in joint family with parents.Feed birds.Gift anything made of copper to lover.If Rahu is causing trouble in marital life, keep 5 radish besides pillow of your spouse before sleeping and next morning throw them in any river or flowing water.Always drink water from silver glass.Store water in south-west corner inside your house.Add jaggery and wheat in any copper vessel and throw it in river to avoid any litigations caused by Rahu.Wear more dark blue color shirts.Add a cup of milk to a bucket of water and wash your head and body for 43 days without break to get relief from rahu.",
" Donate sweet food to orphans.If male kid is causing trouble, dip your right thumb in warm milk and suck it for few times in a day.Never wear red color clothes or red coral based ornaments.Throw yellow colored lemons in river.Always keep a silver pot filled with honey in your kitchen.Keep a silver ball in your pocket or handbag and carry it to work.Donate black and white checkered texture blanket to homeless people.If you are facing viral infections, weak kidney and knee pains, dip a heated golden string in hot milk for few minutes and then drink that milk when it is luke warm."
  
  ];
    var x = parseInt(document.getElementById("mySelect").value)-1;

 document.getElementById("demo").innerHTML =' <b> <u>Malefic planet  </b></u>:  ' +sym[x];
 
 
 document.getElementById("demo1").innerHTML = '  <b><u>Remedy  </b></u>:  '+rem[x];
 
 
 
 
}


function myOmenFunction() {
  
 
 const dream= ["While going out, seeing dead body coming in opposite direction is good sign",
"Good Sign",
"Bad Sign",
"Not Bad Sign",
"Auspciuous sign ",
"Be cautious before contruction, better get near by god blessing.",
"Good sign Boy not for girl",
"Be cautious in family health",
"bad sign with lot of hindarance",
"Able to finish the work with little hindrance "
];
 
 var x = parseInt(document.getElementById("mySelect").value)-1;
 document.getElementById("demo").innerHTML = dream[x];
 
 
 
 
 
}
 

	
	function myFavNoFunction() {
      var x = document.getElementById("date").value;
var dateParts = x.split("/");

// month is 0-based, that's why we need dataParts[1] - 1
var dt = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
 
	var val = parseInt(dt.getDate())+parseInt(dt.getMonth())+parseInt(dt.getFullYear()) + 1;
 	var finalValue = 0;
	 while(val >9 )
	{
		
		var finalValueNew  =val+'';
		finalValue =0;
		 
		for (var i = 0; i < finalValueNew.length; i++) {
			 
			
			finalValue = parseInt(finalValue) + parseInt(finalValueNew.charAt(i));
			 
		}
		val = finalValue;
	  }
    document.getElementById("demo").innerHTML = 'Your Auspicious Number : '+val + '<br/>' +  getNumberologyResult(val);
}

function flamescalc() {
  
        
	 
	   var flames = ['Friends','Love','Affair','Marriage','Enemy','Sister'];
    
 var inputOne = document.getElementById("bname").value;
 var inputTwo = document.getElementById("gname").value;
 
 if(inputTwo == '' || inputOne == '')
 {
	alert("Please enter name ");
	return null;
 }else{
 
		var lengthInput = inputOne.length+inputTwo.length;
 
	 	while(flames.length != 1)
      {
        flames = flames.splice(lengthInput%6,1);
      }
	 
	 document.getElementById("demo").innerHTML = "Result:   "+flames;
 }
}	 
 
 
 
  
 
 
 
 
 
 
 
function myDreamFunction() {
 /*var gender = document.getElementById("gender").value;
 if(gender == null || gender == '')
 {
	alert("select Gender first");
	return null;
 }else{*/
 
 const dream= ["You can expect Lucky or even lottery in future",
"Life will be miserable in future, be cautious",
"More chance to buy New Property",
"Strong determination to acheive dream",
"Steady Business or Finance in future",
"Business or Finance Loss in future",
"You can expect Marriage soon",
"Soon bad evil go away around you",
"Pride momment will happen soon",
"More health issue or down with some Disease ",
"Good sign in personal Life",
"Expect Good future",
"Love to stay with Joined family",
"Gain more friends",
"Expect theif in your my house, be cautious",
"Victory in Life ",
"Wealth begins",
"Expect New baby in your family ",
"New try is always good",
"Good sign in life",
"Good sign in Business",
"Loss in Business",
"Plan to start New business ",
"Down with Some Disease. be cautious in health",
"be causious on Hospital or medical",
"New business in foriegn countries",
"Business Loss, be cautious",
"Loss in personal life",
"Good Financial in future"
];
 
 var x = parseInt(document.getElementById("mySelect").value)-1;
 document.getElementById("demo").innerHTML = dream[x];
 
 
 
 
 
}



function matchcalc() {
  
 var inputOne = document.getElementById("bname").value;
 var inputTwo = document.getElementById("gname").value;
  
 if(inputTwo == '' || inputOne == '')
 {
	alert("Please enter name ");
	return null;
 }else{
 
 var result ='Match';
var chart = new Map([
			["1", [9 ,10 ,18 ,19,27]],
            ["2" , [8, 11, 17, 20,26]],
            ["3", [7, 12, 16, 21,25]],
			["4", [6 ,13 ,15 ,22,24]],
            ["5" , [  14,23]],
            ["6", [4, 13,15, 22,24]],
			["7", [3 ,12 ,16 ,21,25]],
            ["8" , [2, 11, 17, 20,26]],
            ["9", [1, 10, 18,19,27]],
			["10", [1 ,9 ,18,19,27]],
            ["11" , [2,8,17,20,26]],
            ["12", [3 ,7,16,21,25]],
			["13", [4,6,15,22,24 ]],
            ["14" , [5,23 ]],
            ["15", [4,6,13,22,24	]],
			["16", [ 3,7,12,21,25]],
            ["17" , [2, 8,11,20,26 ]],
            ["18", [1,9,10.19,27]],
			["19", [1 ,9,10,18,27 ]],
            ["20" , [ 2,8,11,17,26]],
            ["21", [ 3,7,12,16,25]],
			["22", [4,6,13,15,24 ]],
            ["23" , [5,14]],
            ["24", [ 4,6,13,15,22]],
			["25", [3 ,7,12,16,21]],
            ["26" , [2,8,11,17,20]],
            ["27", [1,9,10,18,19]]
			]);
     const girlsNumber = chart.get(inputOne);
	  for(var i=0;i<girlsNumber.length;i++)
	 {
		if(girlsNumber[i] == inputTwo)
		{
			result ='Not Match';
			break;
		}
	 }
	 
	 document.getElementById("demo").innerHTML = result;
 }
}	 
 
 
 
 
 
function checkRadio(name){
 

 if(name == "male"){
 
        document.getElementById("maleDiv").style.visibility = "visible";
        document.getElementById("femaleDiv").style.visibility = "hidden";
		 

    } else if (name == "female"){
        document.getElementById("maleDiv").style.visibility = "hidden";
        document.getElementById("femaleDiv").style.visibility = "visible";
		
    }
}
function myFunction1() {

const maleMole =[
"Wealthy Person",
"Ruler Character",
"Money expected suddenly",
"Soft and happy with what they have",
"Wealthy Person",
"Always Sad & un wealthy",
"Attractive person",
"Problem with water",
"Loss wealth in bad ways",
"Always poor though they work hard",
"losser",
"Victory",
"Powerful Speacher",
"Knowledge Person",
"Rich Person",
"Poor Person",
"bad habit",
"Good habit",
"Richest person by Ancestor Property",
"Apprecitable Person",
"Ease character, make friends",
"Rubbish Talk and un healthy",
"Long travel",
"Artist & happiest Person"
];
 var gender = document.getElementById("gender").value;
 if(gender == null || gender == '')
 {
	alert("Please select the Gender ");
	return null;
 }else{
	    var x = parseInt(document.getElementById("maleOption").value)+1;

	 document.getElementById("demo").innerHTML = maleMole[parseInt(x)-1];
 }
}	 
 
function myFunction2() {
const femaleMole =[
"bad habit",
"lazy",
"soft,obey husband",
"poor",
"rich and wealthy girl",
"poor background but good character",
"Wealthy Girl",
"Singer/Loyal to Husband",
"Soft Talk/Devotional",
"Healthy/energitic",
"beautiful/Talent"
];
 var gender = document.getElementById("gender").value;
 if(gender == null || gender == '')
 {
	alert("Please select the Gender ");
	return null;
 }else{
 
	  var x = parseInt(document.getElementById("femaleOption").value)+1;

	 document.getElementById("demo").innerHTML = femaleMole[parseInt(x)-1];
 }
}	 
 
 



 function ShowDesc(num)
 {
 //alert(num);

 const p =['Your <b>Life Line</b> is easy to spot on palm. This life line tell you general well being, your passion, appearance and mind.<br/>Long line: You’re a rock whom people count on to stay strong in difficult times and trust in others.<br/>Short line: When the going gets tough, keeping busy helps you feel safe and secure.<br/>Faint line: You may need to chill out now and then. Yoga, meditation, walking, or taking time to play could do you good.<br/>Broken line: Each break in the line represents a traumatic experience that has had an impact on your life choices.<br/>',
 
'The <b>head line </b> This line represents your learning style, how well you communicate, and your desire for knowledge. <br>Short line (ending near the center of your palm, as shown here): You’re a fast thinker who reaches conclusions without any hemming and having.<br>Long, straight line (extending across the palm, toward the pinkie): Analyze much? You often find yourself mulling things over (and over) before coming to a decision.<br>Line that splits in two: Sensitive to others, you can easily see someone else’s perspective. This means you may change your opinion now and then.<br>Long, curved line (running down toward the bottom corner of the palm): You’re a creative thinker who can imagine many possible outcomes or approaches to any situation.<br>Deep head line represents being clear, focused and wise—you might be someone who is good at giving advice and should offer it more often.  ',

'The heart line  will tell you about your emotional stability, romantic life,state of happiness, and the health of your heart. ILong, straight line :You’re a rational, analytical thinker who always considers others’ feelings, and people appreciate that about you.<br/>Short, straight line : You need your freedom. You show your love through actions more than words.<br/>Long, curved line : Your passions and desires drive you, and you don’t care who knows it.<br/>Short, curved line : You are reserved and prefer small groups to big ones. You open up in one-on-one settings.<br/>Line with two or more X’s at the outer palm: You’ve experienced a deep personal betrayal.<br/>Line that splits in two: You have a habit of putting your emotions on the back burner to meet others’ needs.',

'The fate line indicates  destiny. And this is your career line, your interest.<br/> Deep fate line indicates a life that will follow a strong path determined by destiny, which means you might have a strong desire to pursue one career and find success in doing so. This might mean you have a strong ability to start your own business. <br/>If your fate line begins joined to your life line, it means you have had a strong path from birth, and that you will continue to follow your interests and possibly pursue a very successful career based on those early interests. You are self-made and have big aspirations early on. <br/>If your fate line has a break at one point then continues on, it means you will have a change of career and then continue on with a different career path. Several intermittent breaks mean you will have twists and turns in your career. <br/>Absence of a fate line means you might change your career often, or have many different interests you pursue throughout your life.',

'This sun line indicates your talent, popularity and success.<br>If this line is  deep, you will be very successful person and that may even gain fame through your success. <br> if this line is faint, you are refining your skills and will work hard for the success you want in career and marriage. <br>A very clear sun line indicates good taste in art and literature. <br>A sun line that breaks then resumes its course may mean that you will have great success and recognition after overcoming past experiences. <br>If your sun line is parallel to your fate line, it is a very good sign and means that you could gain huge success and gain a great reputation throughout your life. <br> If you have an no or short sun line, it means you are a hard worker, but should stop and enjoy life every once in a while to take some time for yourself.'];	
 
 document.getElementById("demo").innerHTML =p[parseInt(num)-1];
  
 
 }