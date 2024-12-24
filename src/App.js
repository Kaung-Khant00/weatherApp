import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Input from "./components/Input";
import { api } from "./api";
export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const [inputValue, setInputValue] = useState("Yangon");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  function hundleInput(value) {
    setInputValue(value);
    console.log(value, "hundleInput");
  }
  async function fetchWeatherData() {
    try {
      if (inputValue === "") return;
      setLoading(true);
      setError(null);
      const res = await api.get("/weather", { params: { q: inputValue } });
      console.log(res.data, "fetching");
      setWeatherData({ ...res.data });
      setError(null);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchWeatherData();
  }, [inputValue]);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="p-4 shadow bg-body-tertiary container"
        style={{ width: "fit-content" }}
      >
        <div className="fs-3 mb-2 text-primary text-center">Weather forcast web</div>
        <Input hundleInput={hundleInput} />
        {loading && (
          <div className="spinner-border text-primary" role="status"></div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            <div>Something went wrong !</div>
            <div>Check your spelling</div>
            {error}
          </div>
        )}
        {!error && <Form {...weatherData} />}
      </div>
    </div>
  );
}
