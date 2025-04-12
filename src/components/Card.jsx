// import React from "react";

// const Card = ({ name, rating, summary, genre, releaseYear, img, link }) => {
//   return (
//     <div className="card">
//       <img src={img} alt={name} />
//       <h2>{name}</h2>
//       <p><strong>Rating:</strong> ⭐ {rating}</p>
//       <p><strong>Summary:</strong> {summary}</p>
//       <p><strong>Genre:</strong> {genre}</p>
//       <p><strong>Release Year:</strong> {releaseYear}</p>
//       <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
//         Watch Now
//       </a>
//     </div>
//   );
// };

// export default Card;



import React from "react";

const Card = ({ name, rating, summary, genre, releaseYear, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card-content">
        <h2>{name}</h2>
        <p><strong>Rating:</strong> ⭐ {rating}</p>
        <p><strong>Summary:</strong> {summary}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <a href="https://www.netflix.com/" target="_blank" rel="noopener noreferrer" className="btn">
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default Card;
