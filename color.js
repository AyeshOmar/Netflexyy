

// const fruits=['🍒','🌶','🍉','🍓','🍌'];
// const number=[1,2,3,4,5,6];

// let result=[];
// for(const num of number){
// 	result.push(num*2)
// }
// // console.log(result)


// const double=(number)=>{

// let res=[];
// for(const num of number){

// 	res.push(num*2)
// }
// return res

// }
// console.log(double([2,4,5]))


// const howManyLetters=(phrase)=>{
	
// let cpt=0;
// let somme=0;
// for( x in phrase){
// 	console.log(x)
// 		somme=somme+1;
// }
// return somme

// }
// console.log(howManyLetters('hi my name omar'))


// const numbers=[1,2,3,4,5,12]


// const FindMax=(numbers)=>{

// let max=numbers[0];
// for(const x of numbers){
// 	if(x>max){
// 		max=x
// 	}
// }
// return max



// }
// const result=FindMax(numbers);
// console.log(result)




// const letterFrequency=(phrase)=>{



// let freq={};
// for(const letter of phrase){

// if(letter in freq){ 
// 	 freq[letter]=freq[letter]+1
// }else{
// 	freq[letter]=1
// }


// }
// return freq




// }



// const wordFrequency=(phrase)=>{

// words=phrase.split(' ')
// console.log(words);
// let frequency={};


// frequency = letterFrequency(words)
// return frequency
// }




// console.log(wordFrequency('haha my name haha')) 



// let numbers=[2,2,3,4];


// const double=(numbers)=>{



// let res=numbers.reduce((a,b)=> a+b)
// return res


// }
// console.log(double(numbers))

// let nameElement = document.getElementById('cle');
// console.log(nameElement.innerHTML);








// let SearchInput=document.getElementById('inputSearch');

// let btnsearch=document.getElementById('Searchbtn');
// let btnRandomSearch=document.getElementById('Randombtn');





// const superHeroToken='3467271800151628'
// const url =`https://superheroapi.com/api.php/3467271800151628/`


// const RandomHeroNumber=()=>{

// 	let res = Math.floor(Math.random()* 731)
// 	return res ;
// }

// const GetRandomHero=(id)=>{


// fetch(`${url}/${id}`)
// .then(response => response.json())
// .then(json =>{

// 	console.log(json)
// let divimg=document.getElementById('divimg');
// let name=`<p style="font-size:30px;font_weight:bold">${json.name}</p>`;
// let inteligence =`<p>🧠Intelligence :${json.powerstats.intelligence}</p>`;
// let Combat =`<p>🐱‍👤 Combat :${json.powerstats.combat}</p>`;
// let durability =`<p>🐱‍ durability :${json.powerstats.durability}</p>`;

// divimg.innerHTML=`${name} <img src="${json.image.url}" heigth=300 width=300/>${inteligence} ${Combat} ${durability}`;



// })

// }

// btnRandomSearch.onclick = ()=>GetRandomHero(RandomHeroNumber())








// let redy=document.getElementById('red');

// let yelwy=document.getElementById('yellow');
// let greny=document.getElementById('green');

// // redy.onclick=()=>console.log(redy.innerText)
// // yelwy.onclick=()=>console.log(yelwy.innerText)
// // greny.onclick=()=>console.log(greny.innerText)

// // const squareColor = document.querySelectorAll('.squareColor');
// // //console.log(squareColor[0].value);

// // squareColor.forEach(square =>{

// // square.onclick=()=>console.log(square.value)

// // })


// let hetDiv1=document.getElementById('redy')
// let hetDiv2=document.getElementById('redy')
// let hetDiv3=document.getElementById('redy')




// let timeCliked={red:0,yellow:0,green:0};



// const squareColor=document.querySelectorAll('.squareColor');

// squareColor.forEach(square => {

// 	square.onclick=()=>{
// 		timeCliked[square.value]=timeCliked[square.value]+1;
// square.innerText=timeCliked[square.value]

// 	}
// })




// let clear=document.getElementById('clear');


// const clearGame=()=>{

// clear.onclick=()=>{
// squareColor.forEach(square =>{
// 	timeCliked[square.value]=0;
// square.innerText=timeCliked[square.value];
// })




  
// }


// }

// clearGame()


// let plusbtn=document.getElementById('plusbtn');

// let moinsbtn=document.getElementById('Moinsbtn');

// let DivNombrePeople=document.getElementById('numberPeople');


// let cpt=0;
// const accrement=()=>{
// let DivNombrePeople=document.getElementById('numberPeople');

// cpt=cpt+1
// DivNombrePeople.innerText=cpt
// calcul()
// }


// const deccrement=()=>{
// let DivNombrePeople=document.getElementById('numberPeople');
// if(cpt>1)
// cpt=cpt-1;
// DivNombrePeople.innerText=cpt;
// calcul()
// }



// plusbtn.onclick=()=>accrement();

// moinsbtn.onclick=()=>deccrement();


// let refrech=document.getElementById('refrech');
// const refrechFunction=()=>{
	

// 	document.location.reload();
// }





// const calcul=()=>{


// let inputbill=document.getElementById('inputBill1');
// let inputtip=document.getElementById('inputtip');
// let resultDiv=document.getElementById('result');
// let DivNombrePeople=document.getElementById('numberPeople');
// let nombre=Number(DivNombrePeople.innerText)
// let bill=Number(inputbill.value);
// let tip=Number(inputtip.value);
// console.log(nombre)
// let resultOne=bill+(bill*tip)/100;
// let resultFin=resultOne/nombre;
// resultDiv.innerText=`$${resultFin.toFixed(2).toLocaleString('en-US')}`



// }



// const fruit=['🍓','🍌','🍍'];


// const randomFruits=(fruit)=>{


// let res=Math.floor(Math.random() *fruit.length);
// return fruit[res];
// }

// console.log(randomFruits(fruit))






// let DivScore=document.getElementById('Playerscore');
// let DivVS=document.getElementById('hands');
// let result=document.getElementById('result');



// let btnPaper=document.getElementById('btnPaper');
// let btnScissors=document.getElementById('btnScissors');
// let btnRock=document.getElementById('btnRock');
// let btnReset=document.getElementById('btnReset');



// const choix=['Paper','Rock','Scissors'];

// const getComputerChoice=()=>{


// let res=Math.floor(Math.random() * choix.length);
// return choix[res];

// }



// const getResult=(playerChoice,computerChoice)=>{

// let score;
// if (
//     (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
//     (playerChoice === 'Paper' && computerChoice === 'Rock') ||
//     (playerChoice === 'Scissors' && computerChoice === 'Paper')
//   ) {


// 	score=1;
// }else if(playerChoice==computerChoice){
// 	score=0;
// }else{
// 	score=-1
// }


// return score
// }

// const ShowResult=(score,playerChoice,computerChoice)=>{

// let DivScore=document.getElementById('Playerscore');
// let DivVS=document.getElementById('hands');
// let result=document.getElementById('result');


// DivScore.innerText=Number(score);

// DivVS.innerText=`😋${playerChoice}  VS  🤖 ${computerChoice}`;
// ScoreResultRalenti(score)


// }


// const ScoreResultRalenti=(score)=>{

// setTimeout(()=>{


// if(score==1){
// 	result.innerText='You Wins !!';
// }else if(score== -1){
// result.innerText='You Lose!!';
// }else{
// 	result.innerText="it's Draw !";
// }




// },1000)

// }




// function onClickRPS(playerChoice) {
  
// let computerChoice=getComputerChoice();

// let score=getResult(playerChoice.value,computerChoice);
// ShowResult(score,playerChoice.value,computerChoice)

// }
	


// 	const playGame=()=>{



// let rpsbtn=document.querySelectorAll('.rpsBtn');


// rpsbtn.forEach(rps =>{
// 	rps.onclick=()=>{
// 		onClickRPS(rps)
	
// }})




// 	}


// playGame()







// const endGame=()=>{


// document.location.reload()

// }



// btnReset.onclick=()=>endGame()





// let url='https://superheroapi.com/api.php/3467271800151628/512';


// const promise1=new Promise((resolve,reject)=>{

// setTimeout(()=>{
// 	isReady=[true,false][Math.floor(Math.random()*2)]
// 	isReady ?resolve('soup is ready😋'): reject('😡No soup Todays')
// },2000)

// })


// const getSoup=async()=>{
// 	let data={rating:0,tip:0,pay:0};
// 	try{

// let result= await promise1;


// console.log(result)
// data.rating=80;
// data.tip=50;
// data.pay=200;
// return data;
// 	}catch(e){
// 		console.log(e)
// 		data.rating=0;
// data.tip=2;
// data.pay=50;
// return data;
// 	}


// }


// //getSoup().then(value =>console.log(value.rating))
// const sum=async(a,b)=>a+b;

// console.log(sum(2,3))







// let div=document.getElementById('divy');


// div.addEventListener('click',()=>{

// div.classList.toggle('hedhi');
// if(div.classList.contains('hedhi')){
// 	div.textContent='hi omar'
// }else{
// 	div.textContent='click me'
// }

// })

// const toggleBtn = document.getElementById('toggleBtn');
// const internalContainer = document.querySelector('.internal-container');

// toggleBtn.addEventListener('click', () => {
//   internalContainer.style.display = 'block';
// });





// const toggleBtn = document.getElementById('toggleBtn');
// const Erreur = document.querySelector('.Error');
// const internalContainer = document.querySelector('.internal-container');


// let himiditeeDiv=document.getElementById('himiditee');

// let speedDIV=document.getElementById('speed');
// let div2=document.getElementById('div2');
// let inputsearch=document.getElementById('searchInput');

// const apiKey=`38421cc0f26681880fb7766c5d03668d`;

// const getData=(inputsearch)=>{



// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputsearch.value}&appid=${apiKey}`)
// 	.then(response=> response.json())
// 	.then(json=>{

// 		console.log(json);
// 		himiditeeDiv.innerText=json.main.humidity;
// 		speedDIV.innerText=json.wind.speed;
// 		div2.innerHTML=`<p style="font-size:35px; font-weight:bold;">${json.weather[0].main}</p>`;
// 	} )


// }






// let divsVisible = false; // Variable pour suivre l'état des divs

// toggleBtn.addEventListener('click', () => {
//   // Utilisez la variable divsVisible pour basculer entre l'affichage et la masquage
//   divsVisible = !divsVisible;

//   if (divsVisible) {
//   	getData(inputsearch);
//     internalContainer.style.display = 'block';
//      // Affiche les divs

//   } else {
//     internalContainer.style.display = 'none'; // Masque les divs
//   }
// });


// const containerr = document.getElementById('containerr');


// toggleBtn.addEventListener('click',()=>{

// 	containerr.classList.toggle('hedhi');
	
// })






// const  Verifier=()=>{

// let x =getData(inputsearch)

// console.log(x)

// }




// Verifier()




// class Car {
	
// 	constructor(name,color,speed){

// this.name=name;
// this.color=color;
// this.speed=speed;


// 	}




// }
// const marcedes=new Car('Marcedes Benz','rouge','500')



// console.log(marcedes.name);


// let playDiv=document.getElementById('btn');

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'a') {
//     console.log('You pressed "a".');
//     const musicElement = document.getElementById('music');
//     if (musicElement) {
//       musicElement.play();
//     }
//   } else {
//     console.log('Not "a".');
//   }
// });
// let NameP1 = document.getElementById('DivPlayer1');
// let NameP2 = document.getElementById('DivPlayer2');

// let btnAttackP1 = document.getElementById('btnAttackP1');
// let btnHealP1 = document.getElementById('btnHealP1');

// let btnAttackP2 = document.getElementById('btnAttackP2');
// let btnHealP2 = document.getElementById('btnHealP2');

// let ScorePlayer1 = document.getElementById('ScorePlayer1');
// let ScorePlayer2 = document.getElementById('ScorePlayer2');

// let resultDiv = document.getElementById('resultDiv');

// let btnReset = document.getElementById('btnReset');
// let btnSimulate = document.getElementById('btnSimulate');

// const updateGame = (p1, p2) => {
//   NameP1.innerText = p1.name;
//   NameP2.innerText = p2.name;
//   ScorePlayer1.innerText = p1.health;
//   ScorePlayer2.innerText = p2.health;
// const game=new Game();
//   if (p1.health <= 0 || p2.health <= 0) {
  	
//     resultDiv.innerText = game.declareWinner(p1,p2);
//     document.getElementById('victory').play();

//   setTimeout(()=>{
//   	game.reset(p1,p2)
//   },3000)
//   }
// };

// class Player {
//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }

//   strike(player, enemy) {
//     let attackDamage = Math.floor(Math.random() * 10);
//     enemy.health -= attackDamage;
//     updateGame(p1, p2);
//   }

//   heal(player) {
//     let hpamount = Math.floor(Math.random() * 5);
//     player.health += hpamount;
//     updateGame(p1, p2);
//   }
// }

// class Game {
//   declareWinner(p1, p2) {
//     let result;

//     if (p1.health <= 0) {
//       result = `${p2.name} WINS !!`;
//     } else if (p2.health <= 0) {
//       result = `${p1.name} WINS !!`;
//     }

//     document.getElementById('victory').play();

//     return result;
//   }

//   reset(p1, p2) {
//     p1.health = 100;
//     p2.health = 100;
//     resultDiv.innerText = '';
//     updateGame(p1, p2);
//   }


// Simulate(p1,p2){

// let randomDamage=Math.floor(Math.random()*100);
// let randomDamage2=Math.floor(Math.random()*100);

// p1.health-=randomDamage
// p2.health-=randomDamage2

// updateGame(p1,p2)

// }


// keyboard(p1,p2){

// document.addEventListener('keydown',function(e){

// if(e.key=='q'){
// 	 p1.strike(p1, p2);
//       document.getElementById('fastpunch').play();
//   }else if(e.key=='p'){

//   	 p2.strike(p2, p1);
//       document.getElementById('punch').play();
//   }else if(e.key=='a'){
//   	p1.heal(p1);
//       document.getElementById('fastheal').play();
//   }else if(e.key=='l'){
//   	  p2.heal(p2);
//       document.getElementById('quick').play();
//   }

// })

// }


//   play(p1, p2) {
//     this.reset(p1, p2);


// this.keyboard(p1,p2)

//     btnAttackP1.onclick = () => {
//       p1.strike(p1, p2);
//       document.getElementById('fastpunch').play();
//     };

//     btnAttackP2.onclick = () => {
//       p2.strike(p2, p1);
//       document.getElementById('punch').play();
//     };

//     btnHealP1.onclick = () => {
//       p1.heal(p1);
//       document.getElementById('fastheal').play();
//     };

//     btnHealP2.onclick = () => {
//       p2.heal(p2);
//       document.getElementById('quick').play();
//     };
//   }
// }

// const player1 = new Player('omar', 100);
// const player2 = new Player('motez', 100);

// let p1 = player1;
// let p2 = player2;

// const game = new Game();

// updateGame(p1, p2);

// game.play(p1, p2);


// btnReset.onclick=()=>game.reset(p1,p2)


// btnSimulate.onclick=()=>game.Simulate(p1,p2)



let DivOriginal=document.getElementById('Original');

let trending=document.getElementById('trending');

let top_rated=document.getElementById('top_rated');


  let URLOriginal='https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213';


  let URLTrending='https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';


  let URLTopRated='https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';



function fetchMovies(url, dom_element, path_type) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
    	//console.log(data)
      showMovie(data, dom_element, path_type);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données :', error);
    });
}

function showMovie(data, dom_element, path_type) {
  let DivImage = document.getElementById(dom_element);

  for (var x of data.results) {

    let imageElement = document.createElement('img');

    imageElement.setAttribute('data-id', x.id);
    imageElement.setAttribute('titre',x.title);
    imageElement.src = `https://image.tmdb.org/t/p/original${x[path_type]}`;
    imageElement.addEventListener('click', e => {
      handleMovieSelection(e)
    })

    DivImage.appendChild(imageElement);
  }
}



function getOriginals() {
fetchMovies(URLOriginal, 'Original', 'poster_path');
}

function getTrendingNow() {
fetchMovies(URLTrending, 'trending', 'backdrop_path');
}

function getTopRated() {
fetchMovies(URLTopRated, 'top_rated', 'backdrop_path');
}

function Verify(){


}


getOriginals()

getTrendingNow()

getTopRated()




async function getMovieTrailer(id) {
  var url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  return await fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {

        ShowVideoNotFound()
      throw new Error('something went wrong')
    }
  })
}






function showVideo(trailers) {
    const videoContainer = document.getElementById("videoContainer");
    const videoIframe = document.getElementById("videoIframe");
if (trailers.length > 0){

console.log(trailers.title)
     videoIframe.src = `https://www.youtube.com/embed/${trailers[0].key}`

    
    videoContainer.style.display = "block";

    }else{

        ShowVideoNotFound()
    }
}





function hideVideo() {
    const videoContainer = document.getElementById("videoContainer");
    const videoIframe = document.getElementById("videoIframe");

    videoIframe.src = "";
    videoContainer.style.display = "none";
}


function hideVideoNotFound() {
    const videoContainer = document.getElementById("videoContainerNotFound");
    videoContainer.style.display = "none";
}



function ShowVideoNotFound() {
    const videoContainer = document.getElementById("videoContainerNotFound");

    	 videoContainer.style.display = "block";
    	
}



const handleMovieSelection = e => {
  const id = e.target.getAttribute('data-id');
const name=e.target.getAttribute('titre');
  const titreMovierDiv = document.getElementById('titreMovier');

titreMovierDiv.innerText=name;
  const iframe = document.getElementById('videoIframe');
  // here we need the id of the movie
  getMovieTrailer(id).then(data => {
    const results = data.results
    const youtubeTrailers = results.filter(result => {
      if (result.site == 'YouTube' && result.type == 'Trailer') {
       hideVideoNotFound()
        return true
      } else {
 hideVideoNotFound()
        ShowVideoNotFound()
      	
     
      }
    })

   showVideo(youtubeTrailers)
  })

}




async function fetchMoviesByName(url1, url2, url3, path_type, Name) {
  let id;

  try {
    const [data1, data2, data3] = await Promise.all([
      fetch(url1).then(response => response.json()),
      fetch(url2).then(response => response.json()),
      fetch(url3).then(response => response.json())
    ]);

    const nameMinis = Name.toLowerCase();

    if (data1 && data1.results) {
      for (const x of data1.results) {
        const majus = x.title ? x.title.toLowerCase() : '';
        if (nameMinis === majus) {
          id = x.id;
          return id; // Terminer la recherche si trouvé
        }
      }
    }

    if (data2 && data2.results) {
      for (const a of data2.results) {
        const majus = a.title ? a.title.toLowerCase() : '';
        if (nameMinis === majus) {
          id = a.id;
          return id; // Terminer la recherche si trouvé
        }
      }
    }

    if (data3 && data3.results) {
      for (const b of data3.results) {
        const majus = b.title ? b.title.toLowerCase() : '';
        if (nameMinis === majus) {
          id = b.id;
          return id; // Terminer la recherche si trouvé
        }
      }
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }

  // Retourne undefined si aucun résultat n'a été trouvé
  return id;
}

async function GetId(NameMovie) {
  const id = await fetchMoviesByName(URLOriginal, URLTrending, URLTopRated, 'backdrop_path', NameMovie);
  return id;
}

async function getMovieTrailer(id) {
  var url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  return await fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Something went wrong');
    }
  });
}

searchbtn.onclick = async () => {
  const inputSearch = document.getElementById('inputSearch');
  const id = await GetId(inputSearch.value);




  if (id) {
    const iframe = document.getElementById('videoIframe');
    const data = await getMovieTrailer(id);

    const results = data.results;

    const youtubeTrailers = results.filter(result => {
      if (result.site == 'YouTube' && result.type == 'Trailer') {
        hideVideoNotFound();
        return true;
      } else {
        hideVideoNotFound();
        ShowVideoNotFound();
        return false;
      }
    });

    showVideo(youtubeTrailers);
  } else {
    // Gérer le cas où aucun ID n'a été trouvé
    console.log('Aucun film trouvé avec ce nom.');
     ShowVideoNotFound()
   // hideVideoNotFound();
  }

setTimeout(()=>{

	inputSearch.value='';
},1000)
  
}















































