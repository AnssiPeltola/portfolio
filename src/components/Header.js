import React, { useState, useEffect } from "react";
import { FaArrowUp, FaBars } from "react-icons/fa";
import ContactMeModal from "./ContactMeModal";
import CVModal from "./CVModal";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCVModal = () => setIsCVModalOpen(true);
  const closeCVModal = () => setIsCVModalOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-10 transition-all duration-300 ${
          isScrolled ? "bg-ksuPurple" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center p-2 md:p-4">
          <div className="flex space-x-2 md:space-x-4">
            <div className="hidden custom-lg:flex space-x-2 md:space-x-4">
              <button
                className="bg-customOrange text-white px-2 py-1 md:px-4 md:py-2 rounded shadow-md transition-colors duration-300 hover:bg-orange-600"
                onClick={openCVModal}
              >
                View CV
              </button>
              <button
                className="bg-customOrange text-white px-2 py-1 md:px-4 md:py-2 rounded shadow-md transition-colors duration-300 hover:bg-orange-600"
                onClick={openModal}
              >
                Contact me!
              </button>
            </div>
            <div className="custom-lg:hidden">
              <PopupState variant="popover" popupId="popup-menu">
                {(popupState) => (
                  <>
                    <Button
                      variant="contained"
                      {...bindTrigger(popupState)}
                      style={{
                        backgroundColor: "#FFA500",
                        color: "black",
                        padding: "6px 12px",
                        minWidth: "auto",
                        position: "absolute",
                        right: "0",
                        marginRight: "2rem",
                      }}
                    >
                      <FaBars style={{ fontSize: "1.2rem" }} />
                    </Button>
                    <Menu
                      {...bindMenu(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      PaperProps={{
                        style: {
                          width: "120px",
                        },
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          openCVModal();
                        }}
                      >
                        View CV
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          popupState.close();
                          openModal();
                        }}
                      >
                        Contact me!
                      </MenuItem>
                    </Menu>
                  </>
                )}
              </PopupState>
            </div>
          </div>
        </div>
      </header>
      <button
        className={`fixed bottom-4 right-4 z-20 p-2 bg-customOrange text-white rounded-full shadow-md transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
      <ContactMeModal isOpen={isModalOpen} onClose={closeModal} />
      <CVModal isOpen={isCVModalOpen} onClose={closeCVModal} />
    </>
  );
};

export default Header;
