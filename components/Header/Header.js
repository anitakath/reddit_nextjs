



import { useState, useEffect, useContext } from "react";


//CONTEXT
import { RedditContext } from "@/context/RedditContext";


//REDUX
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/store/authSlice";

//COMPONENTS
import LoggedInMenu from "./LoggedInMenu";

//STYLES
import styles from '../../styles/Header/Header.module.css'

//FONT AWESOME
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";




const Header = () => {

  
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentFilter = useSelector((state) => state.filter);
  const nightMode = useSelector((state) => state.toggle)


  const {currentUser} = useContext(RedditContext)

  



  let userName; 
  if(currentUser){
    userName = currentUser.user.identities[0].identity_data.full_name;
    dispatch(login())

  }
  


  const [menuIsOpen, setMenuIsOpen] = useState(false);



 


  const menuHandler = () => {
    if (menuIsOpen === true) {
      setMenuIsOpen(false);
    } else if (menuIsOpen === false) {
      setMenuIsOpen(true);
    }
  };

  
  const reloadPage = () => {
    window.location.reload();
  };



  return (
    <div className={styles.container}>
      {isLoggedIn && (
        <div className={nightMode ? styles.container_dark : styles.container}>
          <h1 className={styles.title}>
            <FontAwesomeIcon
              icon={faRedditAlien}
              className={styles.icon}
              onClick={reloadPage}
            />
          </h1>
          <div className={styles.search_container}>
            <input
              type="search"
              placeholder="SEARCH"
              className={styles.searchInput}
            ></input>

            <button className={styles.search_btn}> 🚀 </button>
          </div>

          <div className={styles.login_container}>
            <div className={styles.loginWrapper}>
              {isLoggedIn && (
                <div className={styles.loggedIn_wrapper}>
                  <button
                    className={styles.loggedInMenu_btn}
                    onClick={menuHandler}
                  >
                    <FontAwesomeIcon icon={faUser} className={styles.user} />
                    <p> menu </p>
                  </button>
                </div>
              )}
            </div>
          </div>

          {menuIsOpen && (
            <div
              className={
                nightMode ? styles.menu_backdrop_dark : styles.menu_backdrop
              }
              onClick={menuHandler}
            ></div>
          )}

          {menuIsOpen && (
            <div
              className={
                nightMode ? styles.menu_container_dark : styles.menu_container
              }
              id="menu"
            >
              <LoggedInMenu />
            </div>
          )}
        </div>
      )}

      {!isLoggedIn && <h1 className={styles.login_callToAction}> LOG IN ! </h1>}
    </div>
  );
};

export default Header;