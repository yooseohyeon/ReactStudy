import React from "react";
import Profile from "./Profile";

// props로 전달받은 users 배열을 사용해 전체 프로필 목록을 렌더링
export default function ProfileList({ users }) {
    return (
        /* map 함수로 users 배열의 각 아이템을 순회하며 Profile 컴포넌트를 렌더링 */
        <ul>
            {users.map(user => (
                <Profile key={user.id}
                         name={user.name}
                         description={user.description}
                         imgUrl={user.imgUrl}
                />
            ))}
        </ul>
    );
}