import { useState, useEffect } from "react";
import { getDataImage } from "../services/getDataImage";

const HeaderImage = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    const data = getDataImage();
    data
      .then((res) => {
        return res;
      })
      .then((response) => {
        setImage(response.data.icon_url);
      });
  }, []);

  return (
    <>
      <img className="imageLogo" src={image} alt="logo" />
      <div className="imageName">Chuck Norris</div>
    </>
  );
};

export default HeaderImage;
