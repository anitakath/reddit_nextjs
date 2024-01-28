



import { useContext, useState } from "react";

//CONTEXT
import { RedditContext } from "@/context/RedditContext";



//COMPONENTS
import WebUser from '../WebUser';


//STYLES
import styles from '../../../styles/Profile/AccountSettings.module.css'

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { gender } from "@/store/authSlice";

const AccountSettings = () => {

  const { currentUser } = useContext(RedditContext);

  //console.log(currentUser.user);

  let userEmail;
  let userName;

  if (currentUser) {
    userEmail = currentUser.user?.email;
    userName = currentUser.user?.identities[0]?.identity_data?.full_name;
  }

  const dispatch = useDispatch(); 
  const currGender = useSelector((state) => state.auth.gender);
  const darkMode = useSelector((state) => state.toggle)

  console.log(darkMode)


   const handleGenderChange = (event) => {
     dispatch(gender(event.target.value))
    };






  return (
    <div className={styles.container}>
      <div className={styles.settings_wrapper}>
        <h1 className={styles.title}> Kontoeinstellungen </h1>

        <div className={styles.accountSettings_div}>
          <h3 className={styles.subTitle}> KONTOEINSTELLUNGEN - {userName} </h3>

          <div className={styles.setting_div}>
            <div>
              <h2 className={styles.setting_title}> Mailadresse </h2>
              {currentUser && (
                <p
                  className={`${
                    darkMode
                      ? styles.settings_paragraph_dark
                      : styles.settings_paragraph
                  } `}
                >
                  {" "}
                  {userEmail}
                </p>
              )}
            </div>
            <button className={styles.change_btn}> ändern </button>
          </div>

          <div className={styles.setting_div}>
            <div>
              <h2 className={styles.setting_title}> Passwort </h2>
              <p
                className={` ${
                  darkMode
                    ? styles.settings_paragraph_dark
                    : styles.settings_paragraph
                } `}
              >
                {" "}
                ***********{" "}
              </p>
            </div>

            <button className={styles.change_btn}> ändern </button>
          </div>

          <div className={styles.setting_div}>
            <div>
              <h2 className={styles.setting_title}> Geschlecht </h2>
              <p
                className={` ${
                  darkMode
                    ? styles.settings_paragraph_dark
                    : styles.settings_paragraph
                } `}
              >
                {currGender}
              </p>
            </div>

            <select
              value={currGender}
              onChange={handleGenderChange}
              className={styles.select_input}
            >
              <option> Frau </option>
              <option> Mann </option>
              <option> Nicht-Binär </option>
              <option> Keine Angabe </option>
            </select>
          </div>

          <button
            type="submit"
            className={`${styles.submit_button} ${
              darkMode ? styles.submit_button_dark : styles.submit_button_light
            }`}
          >
            speichern
          </button>
        </div>
        <div className={styles.accountSettings_div}>
          <h3 className={styles.subTitle}> KONTOEINSTELLUNGEN - {userName} </h3>

          <div className={styles.setting_div}>
            <div>
              <h2 className={styles.setting_title}> Mailadresse </h2>
              {currentUser && (
                <p
                  className={`${
                    darkMode
                      ? styles.settings_paragraph_dark
                      : styles.settings_paragraph
                  } `}
                >
                  {" "}
                  {userEmail}
                </p>
              )}
            </div>
            <button className={styles.change_btn}> ändern </button>
          </div>

          <div className={styles.setting_div}>
            <div>
              <h2 className={styles.setting_title}> Passwort </h2>
              <p
                className={` ${
                  darkMode
                    ? styles.settings_paragraph_dark
                    : styles.settings_paragraph
                } `}
              >
                {" "}
                ***********{" "}
              </p>
            </div>

            <button className={styles.change_btn}> ändern </button>
          </div>

          <div className={styles.setting_div}>
            <div>
              <h2 className={styles.setting_title}> Geschlecht </h2>
              <p
                className={` ${
                  darkMode
                    ? styles.settings_paragraph_dark
                    : styles.settings_paragraph
                } `}
              >
                {currGender}
              </p>
            </div>

            <select
              value={currGender}
              onChange={handleGenderChange}
              className={styles.select_input}
            >
              <option> Frau </option>
              <option> Mann </option>
              <option> Nicht-Binär </option>
              <option> Keine Angabe </option>
            </select>
          </div>

          <button
            type="submit"
            className={`${styles.submit_button} ${
              darkMode ? styles.submit_button_dark : styles.submit_button_light
            }`}
          >
            {" "}
            speichern{" "}
          </button>
        </div>

        <div className={styles.accountSettings_div}>
          <h3 className={styles.subTitle}> KONTOEINSTELLUNGEN - {userName} </h3>

          <div className={styles.setting_div}>
            <div>
              <h2 className={styles.setting_title}> Mailadresse </h2>
              {currentUser && (
                <p
                  className={`${
                    darkMode
                      ? styles.settings_paragraph_dark
                      : styles.settings_paragraph
                  } `}
                >
                  {" "}
                  {userEmail}
                </p>
              )}
            </div>
            <button className={styles.change_btn}> ändern </button>
          </div>

          <div className={styles.setting_div}>
            <div>
              <h2 className={styles.setting_title}> Passwort </h2>
              <p
                className={` ${
                  darkMode
                    ? styles.settings_paragraph_dark
                    : styles.settings_paragraph
                } `}
              >
                {" "}
                ***********{" "}
              </p>
            </div>

            <button className={styles.change_btn}> ändern </button>
          </div>

          <div className={styles.setting_div}>
            <div>
              <h2 className={styles.setting_title}> Geschlecht </h2>
              <p
                className={` ${
                  darkMode
                    ? styles.settings_paragraph_dark
                    : styles.settings_paragraph
                } `}
              >
                {currGender}
              </p>
            </div>

            <select
              value={currGender}
              onChange={handleGenderChange}
              className={styles.select_input}
            >
              <option> Frau </option>
              <option> Mann </option>
              <option> Nicht-Binär </option>
              <option> Keine Angabe </option>
            </select>
          </div>

          <button
            type="submit"
            className={`${styles.submit_button} ${
              darkMode ? styles.submit_button_dark : styles.submit_button_light
            }`}
          >
            {" "}
            speichern{" "}
          </button>
        </div>
      </div>
      <WebUser />
    </div>
  );
};

export default AccountSettings;