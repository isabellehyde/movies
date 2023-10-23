const ol =  document.querySelector("ol");

const favMovies = [ {
    name: "Fantastic Mr Fox",
    year: 2009,
    director: "Wes Anderson",
    picture: "https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
},
{  name: "Fargo",
    year: 1996,
    director: "Joel Coen",
    picture: "https://static.wikia.nocookie.net/fargo/images/d/d7/Fargo_movieposter.jpg/revision/latest?cb=20140226224031"
},
{   name: "Freaky Friday",
    year: 2003,
    director: "Mark Waters",
    picture: "https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"

}];


const template = favMovies.map(favMovies => `
<li>
    <p>Name: ${favMovies.name}</p>
    <p>Year: ${favMovies.year}</p>
    <p>Director: ${favMovies.director}</p>
    <img src = ${favMovies.picture} height = 400>
</li>
`);

ol.innerHTML = template.join('')