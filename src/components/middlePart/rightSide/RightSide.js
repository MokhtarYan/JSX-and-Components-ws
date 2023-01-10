import React from "react";

const videos = [
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/ltn2YITCdFw",
    title: "Rock Lee vs Gaara | Naruto",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/FfQ1g0e61JA",
    title: "Sasuke vs Killer Bee | Naruto Shippuden",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/r2vDD9FFCVE",
    title: "Kakashi vs Obito | Naruto Shippuden",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/zp6xM6Aezmg",
    title: "Madara vs Shinobi Alliance | Naruto Shippuden",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/Llr2dcd-VBo",
    title: "Minato vs Obito | Naruto Shippuden",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/r2vDD9FFCVE",
    title: "Kakashi vs Obito | Naruto Shippuden",
  },
];

const RightSide = () => {
  return (
    <div className="rightside">
      <div className="videoscontainer">
        {videos.map((el) => (
          <div className="littlevid" key={el.id}>
            <iframe src={el.vid} frameborder="0"></iframe>
            <h4>{el.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
