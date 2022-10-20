import React from "react";
import { useState,  useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
// import "./booking.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Booking() {
  const MOVIE_API = "https://api.themoviedb.org/3/";

  // const SEARCH_API = MOVIE_API + "search/movie"
  // const DISCOVER_API = MOVIE_API + "discover/movie"
  const API_KEY = "3b3721af4d70c58a7f3b856193fd49d7"
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"
  // const Image_path = "https://image.tmdb.org/t/p/w500/"

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");

  function onChangeFirstname(e) {
    setFirstname(e.target.value);
  }
  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("email", email);
  }

  function getData() {
    console.log(localStorage.getItem("firstname"));
    console.log(localStorage.getItem("email"));
  }

  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovies()
}, [])

const fetchMovies = async () => {

    const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
        params: {
            api_key: API_KEY,

        }
    })



    setMovie(data)
    console.log(data);


}
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };

  const decrementCount = () => {
    // Update state with incremented value
    setCount(count - 1);
  };

  //   const handleClick = (product = {}) => {
  //     // update quantity
  //     const newProducts = [
  //         ...products,
  //         {...product,
  //         quantity: product.quantity+1}
  //     ];
  //     // update total
  //     setTotal(total+product.price)
  // }

  return (
    <>
      <div className="less">
        
        <div className="more">
          <div>
            <div className="mor">
              <br />
              {/* <p>Rating {movie.vote_average && movie.vote_count}</p>
              <div className="col">
                <p>{movie.overview}</p>
              </div> */}
              <div className="les">
                <h2>₦3,000 / Ticket</h2>
              </div>
              <div className="ico">
                <button
                  className="ic"
                  disabled={count <= 1}
                  onClick={decrementCount}
                >
                  {" "}
                  {/* <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>{" "} */}
                </button>
                {count}
                <button
                  className="ic"
                  disabled={count >= 50}
                  onClick={incrementCount}
                >
                  {" "}
                  {/* <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>{" "} */}
                </button>
              </div>
              <h3 className="oyekan text-light">₦{3 * count},000 </h3>
         
            </div>
            
          </div>
          
          <div className="box">
            {movie.backdrop_path && (
              <img
                className="backpath"
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
        <div >
          <form onSubmit={onSubmit} className="form">
            <div>
              <input 

                type="text"
                placeholder="Username"
                value={firstname}
                onChange={onChangeFirstname}
              />
            </div>
            <div>
              <input
                type="text"
                value={email}
                placeholder="Enter Email"
                onChange={onChangeEmail}
              />
            </div>
            {/* <button type="submit">
              book now
            </button> */}
            <Link to={`/lexy`} type="submit" className="btn">
               Book Now
            </Link>
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Booking;