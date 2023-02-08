import React from "react";
import { connect } from "react-redux";
import useStayScrolled from "react-stay-scrolled";
import { addDogs } from "../store/actions";

function ShowCard(props) {
  const content = props.dogs;
  const index = props.index;
  return (
    <div className="content">
      <section>
      {/* <p>{index}</p> */}
        <p className="quote">{content.facts[0]}</p>
      </section>
    </div>
  );
}

const Dogs = (props) => {
  const divRef1 = React.useRef();
  const [notifyNewMessage, setNotifyNewMessage] = React.useState(false);
  const { stayScrolled, scrollBottom, isScrolled } = useStayScrolled(divRef1);

  const onScroll = React.useCallback(() => {
      if (isScrolled()) {
      setNotifyNewMessage(false);
    }
  }, []);

  React.useLayoutEffect(() => {
    setNotifyNewMessage(!stayScrolled());
  }, [props.dogs, stayScrolled]);

  React.useEffect(() => {
    scrollBottom();
  }, []);

  return (
    <div ref={divRef1} className="main-feed" onScroll={onScroll}>
      {props.dogs.map((d, i) => (
        <div key={i}><ShowCard dogs={d} index={i}></ShowCard></div>
      ))}
      {notifyNewMessage && (
        <div className="notify-content" onClick={scrollBottom}>
          <div className="notify-message">Scroll down to new message</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  dogs: state.dogs,
});

const mapDispatchToProps = (dispatch) => ({
  addDogs: (dogs) => dispatch(addDogs(dogs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);
