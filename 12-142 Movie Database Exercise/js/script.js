var movies = [
  {
    title: "In Bruges",
    rating: "5 stars",
    seen: true
  },
  {
    title: "Frozen",
    rating: "4.5 stars",
    seen: false
  },
  {
    title: "Mad Max Fury Road",
    rating: "5 stars",
    seen: true
  },
  {
    title: "Les Miserables",
    rating: "3.5 stars",
    seen: false
  }
];

var message;

for(var i = 0; i < movies.length; i++) {
  if(movies[i].seen) message = "You have watched \"" + movies[i].title + "\" - " + movies[i].rating;
  else message = "You have not seen \"" + movies[i].title + "\" - " + movies[i].rating;
  console.log(message);
}
