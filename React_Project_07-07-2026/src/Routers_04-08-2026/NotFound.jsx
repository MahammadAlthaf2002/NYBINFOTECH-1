import { Link } from "react-router-dom";

function NotFound() {

  return (
    <div>

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <Link to="/">
        Go Home
      </Link>

    </div>
  );

}

export default NotFound;
npm install --save-dev webpack-dev-server
npm install --save-dev html-webpack-plugin
npm install --save-dev babel-loader @babel/core @babel/preset-env
npm install --save-dev style-loader css-loader
