import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HERO_IMG from "../assets/hero-image.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuth, setOpenAuth] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div>
      <img src={HERO_IMG} alt="" />
    </div>
  );
};

export default LandingPage;
