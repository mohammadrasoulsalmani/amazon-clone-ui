import React, { useState, useEffect } from "react";

const Location = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getCountryLocation = () => {
      fetch("http://ip-api.com/json/")
        .then((res) => res.json())
        .then((response) => {
          setCountry(response.country);
        })
        .catch((data, status) => {
          console.log("Request failed");
        });
    };

    getCountryLocation();
  });
  return country;
};

export default Location;
