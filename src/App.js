import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useInterval from "use-interval";
import AppLayout from "./components/layout/AppLayout";
import Anime from "./pages/Anime";
import Dogs from "./pages/Dogs";
import React from "react";

import { connect } from "react-redux";
import { addAnime, addDogs } from "./store/actions";

// const dogsMessage = {
//   facts: ["Dogs normally have between one to sixteen or even more puppies."],
//   success: true,
// };

// const animeMessage = {
//     anime: "Attack on Titan",
//     character: "Mikasa Ackerman",
//     quote: "Believe in your own power.",
//   };

function App(props) {
  useInterval(async () => {
    fetch("https://animechan.vercel.app/api/random")
      .then((results) => results.json())
      .then((data) => {
        props.addAnime(data);
      });

    fetch("https://dog-api.kinduff.com/api/facts")
      .then((results) => results.json())
      .then((data) => {
        props.addDogs(data);
      });

    // props.addAnime(animeMessage);
    // props.addDogs(dogsMessage);
  }, 3000);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Anime />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/dogs" element={<Dogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  anime: state.anime,
  dogs: state.dogs,
});

const mapDispatchToProps = (dispatch) => ({
  addAnime: (anime) => dispatch(addAnime(anime)),
  addDogs: (dogs) => dispatch(addDogs(dogs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
