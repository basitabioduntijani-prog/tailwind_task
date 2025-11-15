import React from "react";
import { ProfileHeader } from "./ProfileHeader";
import { Avatar } from "./Avatar";
import { UserInfo } from "./UserInfo";
import { StatsSection } from "./StatsSection";
import { Bio } from "./Bio";
import { FollowButton } from "./FollowButton";


function ProfileCard() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl overflow-hidden border">
        <ProfileHeader />
        <Avatar />
        <UserInfo />
        <StatsSection />
        <Bio />
        <FollowButton />
        </div>
        </div>
);
}

export default ProfileCard;