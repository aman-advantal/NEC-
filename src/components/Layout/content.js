import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Content = ({ children }) => {
  const loc = useLocation();
  const [ContentPage, setContentPage] = useState("content-page");
  const PW = process.env.PUBLIC_URL;
  useEffect(() => {
    if (
      loc.pathname === `${PW}` ||
      loc.pathname === `${PW}/` ||
      loc.pathname === `${PW}/login`
    ) {
      setContentPage("");
    } else {
      console.log("dashboard");
      setContentPage("content-page");
    }
  }, [loc]);

  return (
    <>
      <div className={ContentPage}>
        <div className="content"></div>
        {children}
      </div>
    </>
  );
};
