const SHOW_DATA = [
  {
    "showId": 1,
    "showName": "Breaking Bad",
    "showYear": 2008,
    "showImg": "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg"
  },
  {
    "showId": 2,
    "showName": "The Office",
    "showYear": 2005,
    "showImg": "https://m.media-amazon.com/images/I/71BjvIVRnwL._AC_UF894,1000_QL80_.jpg"
  },
  {
    "showId": 3,
    "showName": "House MD",
    "showYear": 2004,
    "showImg": "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"
  },
  {
    "showId": 4,
    "showName": "New Girl",
    "showYear": 2011,
    "showImg": "https://m.media-amazon.com/images/M/MV5BMjA0MDc1NTk0Ml5BMl5BanBnXkFtZTgwMTk2ODA5NDM@._V1_.jpg"
  },
  {
    "showId": 5,
    "showName": "Grey's Anatomy",
    "showYear": 2005,
    "showImg": "https://m.media-amazon.com/images/I/71qocOs-MoL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "showId": 6,
    "showName": "Friends",
    "showYear": 1994,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0LBw3ciWLCiNXxsnBmp845aoPS2aQkJk3w&usqp=CAU"
  },
  {
    "showId": 7,
    "showName": "Black Mirror",
    "showYear": 2011,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs60IFlibKXwJtzqLOjjo6ZgL3ShYtUJng4Q&usqp=CAU"
  },
  {
    "showId": 8,
    "showName": "South Park",
    "showYear": 1997,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScL48fRHJafQCZipKOAo0BSKpJ3yb4CCdXVw&usqp=CAU"
  },
  {
    "showId": 9,
    "showName": "Peaky Blinders",
    "showYear": 2013,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbhZYpgJTumt6xVoPd5kpREPpMjBUYDMVZw&usqp=CAU"
  },
  {
    "showId": 10,
    "showName": "Stranger Things",
    "showYear": 2016,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0zwNfZ5SVzLrhXouwaYkIEE16BeeUvIJ3A&usqp=CAU"
  },
  {
    "showId": 11,
    "showName": "Parks and Recreation",
    "showYear": 2009,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXE-Q6sNaXwdyGUE7R8j_6kktANIzvJq3Yg&usqp=CAU"
  },
  {
    "showId": 12,
    "showName": "Mr. Robot",
    "showYear": 2015,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_0IgmSyTaXZh_coPo_LQiyAvgSmr-BiT-w&usqp=CAU"
  },
  {
    "showId": 13,
    "showName": "Schitt's Creek",
    "showYear": 2015,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvk_5yX-CXa3h6A43L1gEJtABtcMZS_OGYOA&usqp=CAU"
  },
  {
    "showId": 14,
    "showName": "Community",
    "showYear": 2009,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qmnZ_jxXvvv_1tqkpK94cGD-OHPqxY39lw&usqp=CAU"
  },
  {
    "showId": 15,
    "showName": "Game of Thrones",
    "showYear": 2011,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qsnvWv1_R4nRkKuntpWnQlNhS3Apx6DJHA&usqp=CAU"
  },
  {
    "showId": 16,
    "showName": "Suits",
    "showYear": 2011,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFo6MuYehYCSekDiD5D21B2Ku4M38se3-EoQ&usqp=CAU"
  },
  {
    "showId": 17,
    "showName": "Modern Family",
    "showYear": 2009,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nrkvjDOhcZBAlnNAlp1JVUTZCCSjQWsRNA&usqp=CAU"
  },
  {
    "showId": 18,
    "showName": "True Detective",
    "showYear": 2014,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65Aji1CFFgB6VJ5PVNWs9dP4Pr2icD0gagQ&usqp=CAU"
  },
  {
    "showId": 19,
    "showName": "Arrested Development",
    "showYear": 2003,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAjsoD0Np1ED5jzaPHR19wBgkjgfVOBkrlg&usqp=CAU"
  },
  {
    "showId": 20,
    "showName": "Brooklyn Nine-Nine",
    "showYear": 2013,
    "showImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNCOEaZ8AAhr7kMrcZwp2-FswVyG9-7QlhA&usqp=CAU"
  }
]

  export default SHOW_DATA;