import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4 className="fs-2" style={{marginLeft:"20px",marginTop:"25px"}}>Support Portal</h4>
        <a href="" className="fs-3">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3" id="supportSearch">
          <h1 className="fs-3 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O,why is my order getting rejected.."
            className="mb-4"
          />
          <br />
          <a href=""className="fs-5">Track account opening</a>
          <a href=""className="fs-5">Track segment activation</a>
          <a href=""className="fs-5">Intraday margins</a><br />
          <a href=""className="fs-5">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <p className="fs-4">
            Today is a settlement holiday on account of Eid-e-Milad, your
            account balance will not include the following credits on Sept 18,
            2024:
          </p>
          <ul className="fs-4">
            <li>
                Intraday profits made in the Equity segment on Sept 17, 2024.
            </li>
            <li>
                Credits from trades made in NFO, Currency, and Commodity
                derivatives on Sept 17, 2024. This will include options premium
                credits, futures M2M profits, etc.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
