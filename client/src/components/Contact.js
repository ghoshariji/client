import React, { useState } from "react";
const baseurl="https://porfolio-cawh.onrender.com"

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    about: "",
  });

  let name, value;
  const handleInput = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const {name, phone, about} = user;

    const res = await fetch(`${baseurl}/contact`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        about,
      })
    });
    const data = await res.json();
    if(data.status === 422 || !data){

      window.alert("Not submitted");
      console.log("Not submit")

    }
    else{
      window.alert("Succesfully submitted");
    }
  };

  return (
    <div>
      <div className="container-fluid mt-5" id="form">
        <form className="row g-3" method="POST">
          <div className="row mb-3">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="col-form-label-sm"
                name="name"
                value={user.name}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              Phone no.
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="col-form-label-sm"
                name="phone"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              About:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="about"
              value={user.about}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="col-12">
            <input
              type="submit"
              name="contact"
              id="signup"
              className="form-submit"
              value="Submit"
              onClick={postData}
            />
          </div>
        </form>
      </div>
      <div className="container-fluid" id="card3">
        <div className="row">
          <div className="col-sm-6" id="card4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo temporibus voluptatibus illum soluta eaque sed, repudiandae adipisci aliquam provident unde!
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6" id="card5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
