import React from "react";

const newsletter = () => {
  return (
    <div className="w-screen">
      <div className="flex flex-col items-center justify-center">
        <h2>Participe de nossas news com promoções e novidades!</h2>
        <div className="flex">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder=" Digite seu nome"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder=" Digite seu Email"
            />
          </label>
          <button className="btn">Eu quero!</button>
        </div>
      </div>
    </div>
  );
};

export default newsletter;
