import React from "react";

export default function Show(props) {
  

  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.show.name}
          <span class="badge bg-secondary"> ₹{props.show.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={()=>{props.decrementQty(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.show.seats}
          </button>
          <button type="button" class="btn btn-success" onClick={()=>{props.incrementQty(props.index)}}>
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        Reamaining Seats:
        {props.show.seats}
      </div>
    </div>
  );
}
