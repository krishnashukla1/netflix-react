const seriesData = [
    {
      id: 1,
      name: "Lovely Runner",
      rating: 9.8,
      summary: "It's a good film.",
      genre: "Comedy",
      releaseYear: 2025,
      img: "https://i.pinimg.com/736x/0a/83/01/0a830106fb7c9631c0715a096fa157fb.jpg",
      link: "https://www.netflix.com/"
    },
    {
      id: 2,
      name: "Sholay",
      rating: 9.0,
      summary: "Two criminals are hired to capture a ruthless bandit.",
      genre: "Action, Drama",
      releaseYear: 1975,
      img: "https://c8.alamy.com/comp/K378EK/sholay-date-1975-K378EK.jpg",
      link: "https://www.netflix.com/in/title/60037184"
    },
    {
      id: 3,
      name: "Dilwale Dulhania Le Jayenge",
      rating: 8.9,
      summary: "A love story that changed Bollywood forever.",
      genre: "Romance, Drama",
      releaseYear: 1995,
      img: "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg",
      link: "https://www.netflix.com/in/title/60037187"
    },
    {
      id: 4,
      name: "3 Idiots",
      rating: 9.1,
      summary: "A journey of three engineering students navigating college life.",
      genre: "Comedy, Drama",
      releaseYear: 2009,
      img: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      link: "https://www.netflix.com/in/title/70080047"
    },
    {
      id: 5,
      name: "Zindagi Na Milegi Dobara",
      rating: 8.8,
      summary: "Three friends rediscover life on a road trip.",
      genre: "Drama, Adventure",
      releaseYear: 2011,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9COmWyy-s7ptQREEWXGL_cOZ9mHSo5ecTbMDhi83Xa9mZ4UmvdiluMTFcYqx_MUAYkvE&usqp=CAU",
      link: "https://www.netflix.com/in/title/70202345"
    },
    {
      id: 6,
      name: "Gully Boy",
      rating: 8.2,
      summary: "A young rapper rises from the streets of Mumbai.",
      genre: "Musical, Drama",
      releaseYear: 2019,
      img: "https://i.ytimg.com/vi/JfbxcD6biOk/maxresdefault.jpg",
      link: "https://www.netflix.com/in/title/81076756"
    },
    {
      id: 7,
      name: "Kabir Singh",
      rating: 7.1,
      summary: "A troubled surgeon deals with heartbreak.",
      genre: "Drama, Romance",
      releaseYear: 2019,
      img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg",
      link: "https://www.netflix.com/in/title/81021522"
    },
    {
      id: 8,
      name: "Padmaavat",
      rating: 7.4,
      summary: "A historical epic of love and war.",
      genre: "Drama, Historical",
      releaseYear: 2018,
      img: "https://bollywoodmovieposters.com/wp-content/uploads/2024/06/padmaavat-poster-deepika-padukone-movie.jpg",
      link: "https://www.netflix.com/in/title/80239644"
    },
    {
      id: 9,
      name: "Bajrangi Bhaijaan",
      rating: 8.0,
      summary: "A man helps a mute Pakistani girl reunite with her family.",
      genre: "Drama, Adventure",
      releaseYear: 2015,
      img: "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/05/429188525.jpg",
      link: "https://www.netflix.com/in/title/80083717"
    },
    {
      id: 10,
      name: "Andhadhun",
      rating: 8.2,
      summary: "A blind pianist gets caught in a crime scene.",
      genre: "Thriller, Mystery",
      releaseYear: 2018,
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/9965cb71267981.Y3JvcCwxMDgwLDg0NCwwLDI2.jpg",
      link: "https://www.netflix.com/in/title/81069353"
    },
    {
      id: 11,
      name: "Drishyam",
      rating: 8.6,
      summary: "A man goes to extreme lengths to protect his family.",
      genre: "Thriller, Drama",
      releaseYear: 2015,
      img: "https://m.media-amazon.com/images/I/714kDfwueCL._AC_UF894,1000_QL80_.jpg",
      link: "https://www.netflix.com/in/title/80093166"
    },
    {
      id: 12,
      name: "Queen",
      rating: 8.2,
      summary: "A woman goes on a solo honeymoon after being dumped.",
      genre: "Comedy, Drama",
      releaseYear: 2013,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd9DFDm2eGPUVT_XORpPBgY-bywB3ttXyJDaPFkMn4gYwnWx2t-cBpXZbKHv33ms02i0&usqp=CAU",
      link: "https://www.netflix.com/in/title/70299621"
    },
    {
      id: 13,
      name: "Mimi",
      rating: 8.1,
      summary: "A woman agrees to be a surrogate but faces unexpected challenges.",
      genre: "Drama, Comedy",
      releaseYear: 2021,
      img: "https://pbs.twimg.com/media/E6HMmfFVIAIRKvV.jpg:large",
      link: "https://www.netflix.com/in/title/81272542"
    },
    {
      id: 14,
      name: "Raazi",
      rating: 7.8,
      summary: "An Indian spy marries a Pakistani officer for a mission.",
      genre: "Thriller, Drama",
      releaseYear: 2018,
      img: "https://i.ytimg.com/vi/nDbjJVmGV98/maxresdefault.jpg",
      link: "https://www.netflix.com/in/title/81017082"
    },
    {
      id: 15,
      name: "Jeet",
      rating: 8.3,
      summary: "A horror fantasy exploring greed and mythology.",
      genre: "Romantic, Fantasy",
      releaseYear: 2018,
      img: "https://i.ytimg.com/vi/SPnQZS2YAkQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHcOKUkoQHlpFVIkoD8qVc4ZTXgw",
      link: "https://www.netflix.com/in/title/81026729"
    },
    {
      id: 16,
      name: "Gadar",
      rating: 8.1,
      summary: "An alien questions religious customs on Earth.",
      genre: "Action, Drama",
      releaseYear: 2014,
      img: "https://m.media-amazon.com/images/I/71JHVx0wVUL._AC_UF894,1000_QL80_.jpg",
      link: "https://www.netflix.com/in/title/80013596"
    },
    {
      id: 17,
      name: "Dangal",
      rating: 8.4,
      summary: "A father trains his daughters to be world-class wrestlers.",
      genre: "Sports, Drama",
      releaseYear: 2016,
      img: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
      link: "https://www.netflix.com/in/title/80166185"
    },
    {
      id: 18,
      name: "Gangs of Wasseypur",
      rating: 8.2,
      summary: "A violent saga of revenge spanning generations.",
      genre: "Crime, Thriller",
      releaseYear: 2012,
      img: "https://media5.bollywoodhungama.in/wp-content/uploads/2016/03/54812234.jpg",
      link: "https://www.netflix.com/in/title/70243243"
    },
    {
      id: 19,
      name: "Swades",
      rating: 8.3,
      summary: "An NRI returns to India and rediscovers his roots.",
      genre: "Drama",
      releaseYear: 2004,
      img: "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/Swades1.jpg",
      link: "https://www.netflix.com/in/title/70035994"
    },
    {
      id: 20,
      name: "Barfi!",
      rating: 8.1,
      summary: "A love story between a mute man and an autistic woman.",
      genre: "Romance, Drama",
      releaseYear: 2012,
      img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Barfi%21_poster.jpg",
      link: "https://www.netflix.com/in/title/70248124"
    }
  ];
  
  export default seriesData;
  