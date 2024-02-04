import React, { useState, useRef } from "react";
import CommentedImage from "../components/commentedImage";
import {
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "./home.css";
import RandomButton from "./randomButton";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const ticketRef = useRef(null); // Create a ref for the ticket section

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirmation = () => {
    handleClose();
    setConfirmed(true);

    // Delay the scroll by a short duration to ensure the component has rendered
    setTimeout(() => {
      ticketRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Hi Beautiful</h1>
        </div>
      </div>

      <div className="content">
        <div className="item">
          <CommentedImage src="/shru.jpeg" text="wow so pretty" />
        </div>
        <div className="item">
          <CommentedImage src="/Us5.jpeg" text="omg we're so cute" />
        </div>
        <div className="item">
          <CommentedImage src="/Us.jpeg" text="we should kiss?" />
        </div>
      </div>

      <div className="container">
        <div className="header">
          <h1>SO I HEARD...</h1>
        </div>
      </div>

      <div className="prom-container">
        <div className="inner-container">
          <div className="text">You Need</div>
          <img
            className="image"
            src="https://sweezy-cursors.com/wp-content/uploads/cursor/milk-amp-mocha-bear-love/milk-mocha-bear-love-custom-cursor.png"
            width="600"
            alt="valentine"
          />
          <div className="text">Someone For</div>
        </div>
        <div className="valentine">Valentine</div>
      </div>

      <div className="container">
        <div className="header">
          <h1>SO...</h1>
        </div>
      </div>

      <div className="puzzleLove-content">
        <div className="puzzleLove">
          <img
            src="/puzzleLove.jpg"
            alt="puzzle-love"
            className="puzzleLove-image"
          />
        </div>
        <div className="puzzleLoveText">
          <div className="question1">
            Would you be the puzzle piece to my heart, completing me in every
            way?
          </div>
        </div>
      </div>

      <div className="container">
        <div className="header">
          <h1>Would you</h1>
        </div>
      </div>

      <div className="uhh-content">
        <div className="uhh-header">
          <h1 style={{ color: "#ff69b4" }}>Uhh</h1>
        </div>
      </div>

      <div className="spotifyLove-content">
        <div className="spotifyLoveText">
          <div className="question2">
            Would you be the Spotify to my playlist, adding rhythm and harmony
            to our love story?
          </div>
        </div>
        <div className="spotifyLove">
          <img
            src="/Us4000.png"
            alt="spotify-love"
            className="spotifyLove-image"
          />
        </div>
      </div>

      <div className="puzzleLove-content">
        <div className="puzzleLove">
          <img
            src="/phoneLove.webp"
            alt="puzzle-love"
            className="puzzleLove-image"
          />
        </div>
        <div className="puzzleLoveText">
          <div className="question1">
            Would you be the charger to my phone, always there to keep me
            energized and connected throughout the day?
          </div>
        </div>
      </div>

      <div className="coffeeLove-content">
        <div className="coffeeLoveText">
          <div className="question2">
            Would you be the coffee to my mornings, waking me up with your
            warmth and energy?
          </div>
        </div>
        <div className="coffeeLove">
          <img
            src="/coffeeLove.jpg"
            alt="coffee-love"
            className="coffeeLove-image"
          />
        </div>
      </div>

      <div className="puzzleLove-content">
        <div className="puzzleLoveText">
          <div className="question1">Will you be my Shru?</div>
        </div>
      </div>

      <div className="buttons-div">
        <button onClick={handleOpen} className="yes-button">
          YES
        </button>
        <RandomButton text="No" onClick={handleClose} />

        <Dialog open={isOpen} onClose={handleClose}>
          <DialogContent>
            <div className="alert-text" style={{ marginBottom: "10px" }}>
              OMG.
            </div>
            <div className="alert-text">NO WAY SHE JUST SAID YES?</div>
            {/* <div className="alert-text">
              CLICK ON CONFIRM TO GET A VALENTINE PASS.
            </div> */}
          </DialogContent>
          <DialogActions>
            <button onClick={handleConfirmation} className="yes-button2">
              Confirm
            </button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="ticket" ref={ticketRef}>
        {confirmed ? (
          <div className="ticket-content">
            <h1 className="ticket-title">Valentine Confirmation Ticket / Review</h1>
            <div className="ticket-info">
              <img
                src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png"
                alt=""
              />
              <h1>Thank You For Your Confirmation!</h1>
              <h2>Name of Partner :-</h2>
              <h3>Shruti Parmar</h3>
              <h2>Location :-</h2>
              <h3>In my Heart❤</h3>
              <h2>Time :-</h2>
              <h3>Whatever Shru decide😊</h3>
              <h2>Dress Code :-</h2>
              <h3>
                • Casual • Formal •
                <br />
                (No matter what you wear, you always look beautiful.) 😉
              </h3>
              <img
                src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png"
                alt=""
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Home;
