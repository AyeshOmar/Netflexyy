


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


 const originalContainer = document.getElementById('Original');

        // Adjust the scroll distance as needed
        const scrollDistance = 50;

        document.getElementById('scrollLeft').addEventListener('click', () => {
            originalContainer.scrollLeft -= scrollDistance;
        });

        document.getElementById('scrollRight').addEventListener('click', () => {
            originalContainer.scrollLeft += scrollDistance;
        });

 const Trending = document.getElementById('trending');

        // Adjust the scroll distance as needed
        const scrollDistance1 = 50;

        document.getElementById('scrollLeft2').addEventListener('click', () => {
            Trending.scrollLeft -= scrollDistance1;
        });

        document.getElementById('scrollRight2').addEventListener('click', () => {
            Trending.scrollLeft += scrollDistance1;
        });





 const Top_rated = document.getElementById('top_rated');

        // Adjust the scroll distance as needed
        const scrollDistance2 = 50;

        document.getElementById('scrollLeft3').addEventListener('click', () => {
            Top_rated.scrollLeft -= scrollDistance2;
        });

        document.getElementById('scrollRight3').addEventListener('click', () => {
            Top_rated.scrollLeft += scrollDistance2;
        });












































