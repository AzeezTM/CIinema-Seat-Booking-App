import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function Tickets() {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  // const SEARCH_API = MOVIE_API + "search/movie"
  // const DISCOVER_API = MOVIE_API + "discover/movie"
  const API_KEY = "3b3721af4d70c58a7f3b856193fd49d7";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";
  // const Image_path = "https://image.tmdb.org/t/p/w500/"

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const [location, setLocation] = useState("");
  const [data, setData] = useState("");
  const [time, setTime] = useState("");

  const current = new Date();
  const tomorrow = `${current.getDate() + 1} ${current.toLocaleString(
    "default",
    { month: "long" }
  )}`;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    setMovie(data);
    console.log(data);
    setLoading(false);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>

        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={50} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        {/* <div className="col-md-1"></div> */}
        <div className="movie-title col-md-6">
          {movie.backdrop_path && (
            <img
              className="backpath"
              src={BACKDROP_PATH + movie.backdrop_path}
              alt={movie.title}
            />
          )}
        </div>

        <div className="col-md-6">
          <div className={"flex between movie-infos"}>
            <h3 className={"movie-title"}>{movie.title}</h3>
            <br />
            <p className="lead fw-bolder text-info">
              Rating {movie.vote_average && movie.vote_count}
              <i className="fa fa-star"></i>
            </p>
            <p className="lead fw-bolder">
              {" "}
              Date Released: {movie.release_date}
            </p>
            <div className="text-align-center">
              <p className="lead">{movie.overview}</p>
            </div>

            <div className="selectorrs">
              <div className="align-tickets">
                <div className="d-flex flex-wrap ">
                  <div className="indi-selctors mx-2 my-2">
                    <select
                      onChange={(event) => setLocation(event.target.value)}
                      value={location}
                      className="form-select mx-2 my-2 bg-dark text-light"
                    >
                      <option value="1">Lagos</option>
                      <option value="2">Ibadan</option>
                      <option value="3">Abuja</option>
                      <option value="4">Abeokuta</option>
                    </select>
                  </div>

                  <div className="indi-selctors mx-2 my-2">
                    <select
                      onChange={(event) => setData(event.target.value)}
                      value={data}
                      className="form-select mx-2 my-2 bg-dark text-light"
                    >
                      <option selected>Date</option>
                      <option value="1">{tomorrow}</option>
                    </select>
                  </div>

                  <div className="indi-selctors  mx-2 my-2">
                    <select
                      onChange={(event) => setTime(event.target.value)}
                      value={time}
                      className="form-select mx-2 my-2 bg-dark text-light"
                    >
                      <option value="1">16:00</option>
                      <option value="2">19:00</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-center ">
              <Link to={`/seat/${movie.id}`} className="btn btb">
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </>
    );
  };

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Tickets;
