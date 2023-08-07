import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src="https://static.wikia.nocookie.net/ghostbusters/images/1/1f/%D0%9B%D0%B8%D0%B7%D1%83%D0%BDRGB-S1Ep11.jpg/revision/latest?cb=20201025095725&path-prefix=ru" alt="" />
    </div>
  );
}

