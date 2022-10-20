import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Seat() {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  // const SEARCH_API = MOVIE_API + "search/movie"
  // const DISCOVER_API = MOVIE_API + "discover/movie"
  const API_KEY = "3b3721af4d70c58a7f3b856193fd49d7";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";
  // const Image_path = "https://image.tmdb.org/t/p/w500/"

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);

  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    setMovie(data);
    console.log(data);
  };
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };

  const decrementCount = () => {
    // Update state with incremented value
    setCount(count - 1);
  };

  return (
    <>
      <div className=" row container-fluid">
        {/* <ul className='showcase'>
                    <li>
                        <div className="seat"></div>
                        <small>Available</small>
                    </li>

                    <li>
                        <div className="seat selected"></div>
                        <small>Selected</small>
                    </li>

                    <li>
                        <div className="seat sold"></div>
                        <small>Sold</small>
                    </li>
                </ul>
                <div className="seat-container">
                    <div className="screen"> </div>
                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat sold"></div>
                        <div className="seat sold"></div>
                        <div className="seat sold"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>


                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat sold"></div>
                        <div className="seat"></div>
                        <div className="seat sold"></div>
                        <div className="seat sold"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>


                    <div className="row">
                        <div className="seat sold"></div>
                        <div className="seat sold"></div>
                        <div className="seat"></div>
                        <div className="seat "></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>


                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat sold"></div>
                        <div className="seat sold"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>


                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat sold"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat sold"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>


                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat sold"></div>
                        <div className="seat sold"></div>
                        <div className="seat"></div>
                    </div>
                </div>

                <p className='text'>
                    You have selected <span className='select text-info'>{numSeat}</span> seat for a price of # <span className='total text-info'>{seatPrice}</span>
                </p>

                <Link to={`/paystack`}
                    className="btn" >
                    Make Payment

                </Link> */}
        <h2 className="text-center m-2">Book Tickets</h2>

        <div className="more col-sm-6 mb-3">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <div className="les text ">
                <h2>₦3,000 / Ticket</h2>
              </div>
              <div className="ico">
                <button
                  className="ic"
                  disabled={count <= 1}
                  onClick={decrementCount}
                >
                  <i className="fa fa-minus"></i>{" "}
                </button>
                {count}
                <button
                  className="ic"
                  disabled={count >= 100}
                  onClick={incrementCount}
                >
                  <i className="fa fa-plus"></i>{" "}
                </button>
              </div>
              <h3 className="oyekan text-center">₦{3 * count},000 </h3>
              <Link
                to={`/paystack`}
                className="btn btn-info d-flex justify-content-center mt-2 mb-3"
              >
                Make Payment
              </Link>
            </div>
          </div>
        </div>

        <div className="box col-sm-6">
          {movie.backdrop_path && (
            <img
              className="seatpic d-flex justify-content-center"
              src={BACKDROP_PATH + movie.backdrop_path}
              alt={movie.title}
              width="400"
              height={300}
            />
          )}
          <div className="text">
            <h3 className={"bookingtitle"}>{movie.title}</h3>
            <h4> {count} Guests</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seat;
