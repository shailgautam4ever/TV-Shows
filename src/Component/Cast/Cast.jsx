import React from "react";
const Cast = (props) => {
  const { cast } = props;
  return (
    <div className="cast-data">
      {cast.map((v) => (
        <div className="dfc">
          <img className="cast-image" src={v.character.image?.medium}></img>
          <div className="cast-name">
            {/* <span className="cast-name" >
            higgjghjgh gfhgfh hgfhgfhg gdjgfdg gfgf
          </span> */}
            <span className=" cast-data name-font">{v.person?.name}</span>
            <span className="cast-data">as</span>
            <span className="cast-data">{v.character?.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
