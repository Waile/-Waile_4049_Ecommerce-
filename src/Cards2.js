import React from "react";

const Cards2 = ({ data }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {data.map((item) => {
            let { title, description, price, image } = item;
            return (
              <div className="col-md-4 mb-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={image}
                    className="card-img-top"
                    alt="..."
                    width={200}
                    height={200}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 20)}</h5>
                    <p className="card-text">{description.slice(0, 80)}</p>
                    <a href="#" className="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards2;
