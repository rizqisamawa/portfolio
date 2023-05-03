/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faArrowUpLong);

const scrollingButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handlerScroll = () => {
            if (window.scrollY > 20) {
                setShowButton(true);
            }else{
                setShowButton(false);
            }
        };
        
        window.addEventListener("scroll", handlerScroll);
    },[]);


    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div
      className={`${
        showButton ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 fixed bottom-8 right-8 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faArrowUpLong} />
    </div>
  );
};

export default scrollingButton;
