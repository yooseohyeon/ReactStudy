import React from "react";
import styles from "./Profile.module.css";

// 전달받은 name, description, imgUrl 속성을 사용하여 개별 프로필을 렌더링
export default function Profile({ name, description, imgUrl }) {
    const defaultImg = '/defaultProfile.png';

    return (
        <li className={styles.profileContainer}>
            <div className={styles.profileInfo}>
                <div className={styles.profileHeader}>
                    <h1>{name}</h1>
                    <h3>{description}</h3>
                </div>
                <img
                    src={imgUrl !== '' ? imgUrl : defaultImg}
                    alt='profile'
                />
            </div>
            <button className={styles.profileButton}>구독하기</button>
        </li>
    );
}