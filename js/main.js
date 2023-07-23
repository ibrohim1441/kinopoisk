let move_name = document.querySelector("#move_name") 
let add_movie = document.querySelector("#add_move")
let year = document.querySelector("#year") 
let reyting = document.querySelector("#reting") 
let kategorya = document.querySelector("#kategorya")
let add_move = document.querySelector("#add_move")  
let el = document.querySelector("#content")
let move = document.querySelector(".move")
let filter_kategoriya = document.querySelector("#filter_kategoriya")
let reyting_5 = document.querySelector("#reyting_5")
let kinosearch = document.querySelector("#kinosearch")
let forma = document.querySelector(".forma")
let Secondary = document.querySelector("#Secondary")



// console.log(movies)
function  kino (movies)  {
  let res = "";
    for(let i =0; i< movies.length; i++){

        // console.log(movies[i]);
        res +=`
        <div class="col-4">
              <div class="card">
                <img src="${movies[i].bigThumbnail}" alt="img">
                <div class="card-body">
                  <h5 class="card-title">${movies[i].title}"</h5>
                  <p class="card-text">${movies[i].year}"</p>
                  <p class="card-text">${movies[i].imdbRating}"</p>
                  <p class="card-text">${movies[i].language}"</p>
                  <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-primary">Primary</button>
                    <button type="button" class="btn btn-outline-secondary">Secondary</button> 
                  </div>
                </div>
              </div>
            </div>
         
        `
        
    }
    el.innerHTML = res
}
kino(movies);



move.addEventListener("submit", (e) => {
  const selectedOpts = [...kategorya.options]
    .filter((x) => x.selected)
    .map((item) => {
      return item.value;
    });
  e.preventDefault();
  let moviecard ={
    title: move_name.value,
    year: year.value,
    categories: selectedOpts,
    imdbId: Math.random().toFixed(2),
    imdbRating: reyting.value,
    runtime: 66,
    language: "English",
    youtubeId: "4hZi5QaMBFc",
    summary:
      "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
      bigThumbnail: "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
  };
  // console.log(moviecard);
  movies.unshift(moviecard);
  kino(movies);
});




filter_kategoriya.addEventListener("change", (e) => {
  let sun2 = movies.filter((item) => {
    if (item.categories.find((item) => item === e.target.value)){
      return true;
    }
    return false;
  })
  kino(sun2);
})


reyting_5.addEventListener("change" , (e) => {
  let optVal = e.target.value
  if(optVal === "1"){
    let run2 = movies.sort((item) => { return item.imdbRating > 7.
      
    }).sort((a,b) => b.imdbRating-a.imdbRating)
    return kino(run2)
  }else{
    let run3 = movies.sort((item) => { return item.imdbRating < 7
    }).sort((a,b) => a.imdbRating-b.imdbRating)
    return kino(run3)

  }
})


// forma.addEventListener("submit" , (e) => {
//   e.preventDefault()
//   let soon2 = 
// })


arr = moviesArr
    .filter((item) => {
      if (!movie_title.value) return true;
      return item.title
        .toLocaleLowerCase()
        .includes(movie_title.value.toLocaleLowerCase());
    })
    .filter((item) => {
      if (!year_movie.value) return true;
      return item.year === +year_movie.value;
    })
    .filter((item) => {
      if (filter_category.value === "All") return true;
      return item.categories.find((item) => item === filter_category.value);
    });

  console.log(arr);


  function renderarr2() {
    let rek = ''
    for (let i = 0; i < arr2.length; i++) {
        // console.log(movies[i].name);

        rek += `
    <div class="card float-end m-2" style="width: 12rem;">
                  <div class="card-body">
                      <h5 class="card-title">${arr2[i].title}</h5>
                      <button o class="btn btn-danger" onclick="deletCard(${arr2[i].id})">O'chirish</button>
                  </div>
    </div>
    `

    el.innerHTML = rek;
    }

}

function savedMovies(elementId) {
  let card = moviesArr.find((items) => items.imdbId === elementId)
  arr.push(card)
  savedCards()  
  // localStorage.setItem("arr", JSON.stringify(arr));
  }

  function savedCards() {
  
    let res = "";
  
    for (let i = 0; i < arr.length; i++) {
      
      res += `
      <div class="card float-end m-2" style="width: 12rem"; >
        <div class="card-body">
          <h5 class="card-title">${arr[i].title}</h5>
          <button class="btn btn-danger" onclick="deleteCard("${arr[i].imdbId}")>O'chirish</button>
        </div>
      </div>
      `
      el.innerHTML = res;
    }
  
    kino(movies)
    
  }




