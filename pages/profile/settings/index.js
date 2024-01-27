
import Link from "next/link";

//COMPONENTS
import ProfileSettings from "@/components/Main/Settings/ProfileSettings";
import SettingsNavigation from "@/components/Main/Settings/Navigation/SettingsNavigation";

//STYLES
import styles from '../../../styles/Profile/Profile.module.css'


//FONT AWESOME
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";


//REDUX
import { useSelector } from "react-redux";


const Settings = () =>{


  const nightMode = useSelector((state) => state.toggle)

    return (
      <div
        className={
          nightMode ? styles.profileContainer_dark : styles.profileContainer
        }
      >
        <h1 className={styles.settings_title}> Nutzereinstellungen </h1>

        <SettingsNavigation />

        <div className={styles.settings_output_container}>
          <div className={styles.setting_div}> Einstellung Nr 1 </div>
          <div className={styles.setting_div}> Einstellung Nr 2 </div>
          <div className={styles.setting_div}> Einstellung Nr 3 </div>
          <div className={styles.setting_div}> Einstellung Nr 4 </div>
          <div className={styles.setting_div}> Einstellung Nr 5 </div>
          <div className={styles.setting_div}> Einstellung Nr 6 </div>
          <div className={styles.setting_div}> Einstellung Nr 7 </div>
          <div className={styles.setting_div}> Einstellung Nr 8 </div>
        </div>
      </div>
    );
}

export default Settings;