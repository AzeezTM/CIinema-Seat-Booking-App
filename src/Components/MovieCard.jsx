import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

function MovieCard({movie, selectMovie}) {
    

const Image_path = "https://image.tmdb.org/t/p/w500/"

     return (
         <div onClick={() => selectMovie(movie)} className={"movie"}>
           
             <div className='movie-card'>
                 {movie.poster_path &&
                 <img className='image'  src={Image_path + movie.poster_path}/>
                 }
                 <div className={"flex between movie-infos"}>
                     <h5 className={"movie-title text-center mt-3"}>{movie.title}</h5>
              
                 </div>
                 
             </div>
         </div>
     );
 



//  return (
//     <div>
//         <div className="container my-5 py-5 ">
//             <div className="row">
//                 <div className="col-12 mb-5">
//                     <h1 className="display-6 fw-bolder text-center"></h1>
//                     <hr />
//                 </div>

//             </div>

//             <div className="row justify-content-center">
//                 {loading ? <Loading /> : <showVid />}
//             </div>
//         </div>
//     </div>


}



//}

export default MovieCard;