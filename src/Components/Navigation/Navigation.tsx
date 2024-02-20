import React from "react";
import styles from "./Navigation.module.css"    ;

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://res.cloudinary.com/dfeyofjln/image/upload/v1705255997/COLLEGE_QUARTERS_LOGO-removebg-preview_1_uxu3ds.png"
          alt="Logo" width={"80px"}
        />
        <div className={styles.line}></div>
        <i><h5>Student <br/> Quarters</h5></i>
      </div>
      <div className={styles.nav}>
         <li>Residences</li>
         <div className={styles.line2}></div>
         <li>Book Now</li>
         <div className={styles.line2}></div>
         <li>Refer & Earn</li>
         <div className={styles.line2}></div>
         <li>Testimonials</li>
         <div className={styles.line2}></div>
         <li>Universities</li>
         <div className={styles.line2}></div>
         <li>LOGIN</li>

      </div>
    </div>
  );
};

export default Navigation;
