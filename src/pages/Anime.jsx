import React from "react";
import "./main.scss";
import useStayScrolled from "react-stay-scrolled";
// import { useSpring, animated } from '@react-spring/web';

import { connect } from "react-redux";
import { addAnime, setCurrentRef } from "../store/actions";

function ShowAnimeCard(props) {
  const animeDetails = props.anime;
  const index = props.index;
  return (
    <div className="content">
      <section>
        <div className="header">
          {/* <p>{index}</p> */}
          <p className="title">{animeDetails.anime}</p>
          <p className="character">{animeDetails.character}</p>
        </div>
        <p className="quote">{animeDetails.quote}</p>
      </section>
    </div>
  );
}

const Anime = (props) => {
  const divRef = React.useRef();
  const [notifyNewMessage, setNotifyNewMessage] = React.useState(false);
  const { stayScrolled, scrollBottom, isScrolled } = useStayScrolled(divRef);

  const onScroll = React.useCallback(() => {
    if (isScrolled()) {
      setNotifyNewMessage(false);
    }
  }, []);

  React.useLayoutEffect(() => {
    setNotifyNewMessage(!stayScrolled());
  }, [props.anime, stayScrolled]);

  React.useEffect(() => {
    scrollBottom();
  }, []);

  return (
    <div ref={divRef} className="main-feed" onScroll={onScroll}>
      {props.anime.map((d, i) => (
          <div key={i}><ShowAnimeCard anime={d} index={i}></ShowAnimeCard></div>
      ))}
      {notifyNewMessage && (
        <div className="notify-content" onClick={scrollBottom}>
          <div className="notify-message">Scroll down to new message</div>
        </div>
      )}
    </div>
  );
};
// export default Anime;

const mapStateToProps = (state) => ({
  anime: state.anime,
  currentRef: state.currentRef,
});

const mapDispatchToProps = (dispatch) => ({
  addAnime: (anime) => dispatch(addAnime(anime)),
  setCurrentRef: (currentRef) => dispatch(setCurrentRef(currentRef)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Anime);
