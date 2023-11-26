const SHOW_DATA = [
  {
    "showId": 1,
    "showName": "Breaking Bad",
    "showYear": 2008,
    "showImg": "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg",
    "showGenre": "Crime, Drama, Thriller",
    "showCast": "Bryan Cranston, Aaron Paul",
    "showSeasonsNum": 5,
    "showDescription": "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    "slug": "breaking-bad"
  },
  {
    "showId": 2,
    "showName": "The Office",
    "showYear": 2005,
    "showImg": "https://m.media-amazon.com/images/I/71BjvIVRnwL._AC_UF894,1000_QL80_.jpg",
    "showGenre": "Comedy",
    "showCast": "Steve Carell, John Krasinski",
    "showSeasonsNum": 9,
    "showDescription": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    "slug": "the-office"
  },
  {
    "showId": 3,
    "showName": "House MD",
    "showYear": 2004,
    "showImg": "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    "showGenre": "Drama, Mystery",
    "showCast": "Hugh Laurie",
    "showSeasonsNum": 8,
    "showDescription": "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.",
    "slug": "house-md"
  },
  {
    "showId": 4,
    "showName": "New Girl",
    "showYear": 2011,
    "showImg": "https://m.media-amazon.com/images/M/MV5BMjA0MDc1NTk0Ml5BMl5BanBnXkFtZTgwMTk2ODA5NDM@._V1_.jpg",
    "showGenre": "Comedy, Romance",
    "showCast": "Joey Deschanel, Jake Johnson",
    "showSeasonsNum": 7,
    "showDescription": "After a bad break-up, Jess, an offbeat young woman, moves into an apartment loft with three single men. Although they find her behavior very unusual, the men support her - most of the time.",
    "slug": "new-girl"
  },
  {
    "showId": 5,
    "showName": "Grey's Anatomy",
    "showYear": 2005,
    "showImg": "https://m.media-amazon.com/images/I/71qocOs-MoL._AC_UF1000,1000_QL80_.jpg",
    "showGenre": "Drama, Romance",
    "showCast": "Ellen Pompeo, Justin Chambers",
    "showSeasonsNum": 20,
    "showDescription": "A drama centered on the personal and professional lives of five surgical interns and their supervisors.",
    "slug": "greys-anatomy"
  },
  {
    "showId": 6,
    "showName": "Friends",
    "showYear": 1994,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0LBw3ciWLCiNXxsnBmp845aoPS2aQkJk3w&usqp=CAU",
    "showGenre": "Comedy, Romance",
    "showCast": "Jennifer Aniston, Courteney Cox",
    "showSeasonsNum": 10,
    "showDescription": "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
    "slug": "friends"
  },
  {
    "showId": 7,
    "showName": "Black Mirror",
    "showYear": 2011,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs60IFlibKXwJtzqLOjjo6ZgL3ShYtUJng4Q&usqp=CAU",
    "showGenre": "Drama, Mystery, Sci-Fi",
    "showCast": "Wunmi Mosaku, Monica Dolan",
    "showSeasonsNum": 7,
    "showDescription": "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    "slug": "black-mirror"
  },
  {
    "showId": 8,
    "showName": "South Park",
    "showYear": 1997,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScL48fRHJafQCZipKOAo0BSKpJ3yb4CCdXVw&usqp=CAU",
    "showGenre": "Animation, Comedy",
    "showCast": "Trey Parker, Matt Stone",
    "showSeasonsNum": 30,
    "showDescription": "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
    "slug": "south-park"
  },
  {
    "showId": 9,
    "showName": "Peaky Blinders",
    "showYear": 2013,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbhZYpgJTumt6xVoPd5kpREPpMjBUYDMVZw&usqp=CAU",
    "showGenre": "Comedy, Drama",
    "showCast": "Cillian Murphy, Paul Anderson",
    "showSeasonsNum": 6,
    "showDescription": "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    "slug": "peaky-blinders"
  },
  {
    "showId": 10,
    "showName": "Stranger Things",
    "showYear": 2016,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0zwNfZ5SVzLrhXouwaYkIEE16BeeUvIJ3A&usqp=CAU",
    "showGenre": "Drama, Fantady, Horror",
    "showCast": "Millie Bobby Brown, Finn Wolfhard",
    "showSeasonsNum": 5,
    "showDescription": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    "slug": "stranger-things"
  },
  {
    "showId": 11,
    "showName": "Parks and Recreation",
    "showYear": 2009,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXE-Q6sNaXwdyGUE7R8j_6kktANIzvJq3Yg&usqp=CAU",
    "showGenre": "Comedy",
    "showCast": "Amy Poehler, Nick Offerman",
    "showSeasonsNum": 7,
    "showDescription": "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place.",
    "slug": "parks-and-recreation"
  },
  {
    "showId": 12,
    "showName": "Mr. Robot",
    "showYear": 2015,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_0IgmSyTaXZh_coPo_LQiyAvgSmr-BiT-w&usqp=CAU",
    "showGenre": "Crime, Drama, Thriller",
    "showCast": "Rami Malek, Christian Slater",
    "showSeasonsNum": 4,
    "showDescription": "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
    "slug": "mr-robot"
  },
  {
    "showId": 13,
    "showName": "Schitt's Creek",
    "showYear": 2015,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvk_5yX-CXa3h6A43L1gEJtABtcMZS_OGYOA&usqp=CAU",
    "showGenre": "Comedy",
    "showCast": "Eugene Levy, Catherine O'Hara",
    "showSeasonsNum": 6,
    "showDescription": "After being a victim of fraud, Johnny Rose and his family go from extremely wealthy to penniless overnight. The only asset left to them is a small, unsophisticated town: Schitt's Creek. They relocate there. Culture shock ensues.",
    "slug": "shitts-creek"
  },
  {
    "showId": 14,
    "showName": "Community",
    "showYear": 2009,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qmnZ_jxXvvv_1tqkpK94cGD-OHPqxY39lw&usqp=CAU",
    "showGenre": "Comedy",
    "showCast": "Joel McHale, Danny Pudi",
    "showSeasonsNum": 6,
    "showDescription": "A suspended lawyer is forced to enroll in a community college with an eccentric staff and student body.",
    "slug": "community"
  },
  {
    "showId": 15,
    "showName": "Game of Thrones",
    "showYear": 2011,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qsnvWv1_R4nRkKuntpWnQlNhS3Apx6DJHA&usqp=CAU",
    "showGenre": "Action, Adventure, Drama",
    "showCast": "Emilia Clarke, Kit Harrington",
    "showSeasonsNum": 8,
    "showDescription": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.",
    "slug": "game-of-thrones"
  },
  {
    "showId": 16,
    "showName": "Suits",
    "showYear": 2011,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFo6MuYehYCSekDiD5D21B2Ku4M38se3-EoQ&usqp=CAU",
    "showGenre": "Comedy, Drama",
    "showCast": "Gabriel Macht, Patrick J. Adams",
    "showSeasonsNum": 9,
    "showDescription": "On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers.",
    "slug": "suits"
  },
  {
    "showId": 17,
    "showName": "Modern Family",
    "showYear": 2009,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nrkvjDOhcZBAlnNAlp1JVUTZCCSjQWsRNA&usqp=CAU",
    "showGenre": "Comedy, Drama, Romance",
    "showCast": "Ed O'Neil, Sofia Vergara",
    "showSeasonsNum": 11,
    "showDescription": "Three different but related families face trials and tribulations in their own uniquely comedic ways.",
    "slug": "modern-family"
  },
  {
    "showId": 18,
    "showName": "True Detective",
    "showYear": 2014,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65Aji1CFFgB6VJ5PVNWs9dP4Pr2icD0gagQ&usqp=CAU",
    "showGenre": "Crime, Drama, Mystery",
    "showCast": "Vince Vaughn, Colin Farrell",
    "showSeasonsNum": 4,
    "showDescription": "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
    "slug": "true-detective"
  },
  {
    "showId": 19,
    "showName": "Arrested Development",
    "showYear": 2003,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAjsoD0Np1ED5jzaPHR19wBgkjgfVOBkrlg&usqp=CAU",
    "showGenre": "Comedy",
    "showCast": "Jason Bateman, Michael Cera",
    "showSeasonsNum": 5,
    "showDescription": "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.",
    "slug": "arrested-development"
  },
  {
    "showId": 20,
    "showName": "Brooklyn Nine-Nine",
    "showYear": 2013,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNCOEaZ8AAhr7kMrcZwp2-FswVyG9-7QlhA&usqp=CAU",
    "showGenre": "Comedy, Crime",
    "showCast": "Andy Samberg, Stephanie Beatriz",
    "showSeasonsNum": 8,
    "showDescription": "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
    "slug": "brooklyn-nine-nine"
  }
]

  export default SHOW_DATA;