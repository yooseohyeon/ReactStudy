import './App.css';
import React from "react";
import { users } from "./userProfile/user.js";
import ProfileList from "./userProfile/ProfileList.js";

// ProfileList 컴포넌트에 user 배열을 props로 전달
export default function App() {
    return (
        <React.StrictMode>
            <ProfileList users={users} />
        </React.StrictMode>
    );
}
