import React from "react";

export default function Card({ details, index }) {
  return (
    <div className={`card-container card${index + 1}`}>
      <div className="card-details">
        {details.img ? (
          <div className="img-cont">
            <img src={details?.img} />
          </div>
        ) : null}

        <div className="article-cont">
          <div className="article">
            <h3>{details?.header}</h3>
            <h2>{details?.title}</h2>
            <p>{details?.text}</p>
          </div>

          <hr />

          <div className="footer">
            <div className="flex-left">
              {details.logo ? <img src={details?.logo} /> : null}

              <p>{details?.footerTxt}</p>
            </div>

            <div className="flex-right">
              <img src={details?.viewIcon} />
              <p>{details?.totalViews}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
