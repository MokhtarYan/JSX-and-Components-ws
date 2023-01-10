import React from "react";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { HiDownload } from "react-icons/hi";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const video = {
  vidURL: "https://www.youtube.com/embed/RzClCJFpSoM",
  title: "Naruto and Sasuke vs Momoshiki | Boruto: Naruto Next Generations",
};

const feedbacks = [
  {
    id: Math.random(),
    name: "Emna",
    comment: "c'est très interessant",
  },
  {
    id: Math.random(),
    name: "Aymen",
    comment: "Merci",
  },
  {
    id: Math.random(),
    name: "Sawssen",
    comment: "Trop contente de trouver ta formation REACT ! Un grand merci",
  },
  {
    id: Math.random(),
    name: "Amir",
    comment:
      "J'attaque React et je suis tout heureuse de réentendre cette voix qui m'a appris le HTML, le CSS et le JS. Que de souvenirs! Merci again !!!",
  },
  {
    id: Math.random(),
    name: "Ahmed",
    comment:
      "Toujours aussi bien foutu et pédagogique ! Mec t'es ma rockstar :-)",
  },
  {
    id: Math.random(),
    name: "Nizar",
    comment:
      "Ça tombe à pique, nous abordons React en ce moment même dans ma formation 😅",
  },
];

const LeftSide = () => {
  return (
    <div className="leftside">
      <iframe
        className="vid"
        src={video.vidURL}
        title={video.title}
        autoplay
      ></iframe>
      <h1>{video.title}</h1>
      <div className="buttons">
        <div className="jkdk">
          <RxAvatar style={{ height: "40", width: "40" }} />
          <div className="chn">
            <h5>Sogovegeta CKRAS</h5>
            <h6>739 abonnés</h6>
          </div>
          <button className="sabonner">S'abonner</button>
        </div>

        <div>
          <button className="like">
            <BsHandThumbsUp /> 17k
          </button>
          <button className="dislike">
            <BsHandThumbsDown />
          </button>
          <button className="down">
            <HiDownload /> Download
          </button>
        </div>
      </div>
      <div>
        <Accordion
          defaultActiveKey="0"
          style={{ width: "727px", marginTop: "20px" }}
        >
          <Accordion.Item eventKey="1" style={{ width: "727px" }}>
            <Accordion.Header>Description</Accordion.Header>
            <Accordion.Body
              style={{ width: "727px", backgroundColor: "#606060" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <input
          style={{
            width: "727px",
            border: "none",
            outline: "none",
            borderBottom: "1px solid black",
          }}
          type="text"
          placeholder="Ajoutez un commentaire"
        />
      </div>
      {feedbacks.map((el) => (
        <div key={el.id} style={{ display: "flex", margin: "20px 15px" }}>
          <img
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="photo"
          />
          <div style={{ width: "700px", margin: "0px 20px" }}>
            <h4 style={{ fontSize: "13px", fontWeight: "bold" }}>{el.name}</h4>
            <p style={{ fontSize: "12px", marginTop: "-5px" }}> {el.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
