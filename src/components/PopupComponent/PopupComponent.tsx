import { FC, useState } from "react";
import "./PopupComponent.scss";

export const PopupComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(true);
    }, 120000);
  };

  return (
    <>
      {isOpen && (
        <div className="popup" id="popup">
          <button
            onClick={closePopup}
            className="popup__close"
            id="popup__close"
          >
            <img src="./assets/images/burger_close.svg" />
          </button>
          <img src="./assets/images/popup_img.png" className="popup__img" />
        </div>
      )}
    </>
  );
};
