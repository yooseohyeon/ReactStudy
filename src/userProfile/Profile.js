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
                    /* 사용자가 프로필 이미지를 설정하지 않은 경우 (그래서 imgUrl가 빈 문자열인 경우) 기본 이미지를 넣도록 설정함 */
                    src={imgUrl !== '' ? imgUrl : defaultImg}
                    alt='profile'
                />
            </div>
            <button className={styles.profileButton}>구독하기</button>
        </li>
    );
}