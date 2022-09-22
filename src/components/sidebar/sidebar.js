import React from "react";
import "./sidebar.css";
import SidebarBtn from "./sidebarBtn/sidebarBtn";

// import icons
import { SiBuzzfeed } from "react-icons/si";

import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineTrendingUp } from "react-icons/md";

import { MdLibraryMusic } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import { TbPlayerPlay } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://img.lovepik.com/element/45006/0870.png_860.png"
        alt="profile"
        className="profile-img"
      />
      <div>
        <SidebarBtn title="Feed" to="/feed" icon={<SiBuzzfeed />} />
        <SidebarBtn
          title="Trending"
          to="/trending"
          icon={<MdOutlineTrendingUp />}
        />

        <SidebarBtn title="Player" to="/player" icon={<TbPlayerPlay />} />

        <SidebarBtn
          title="Favorites"
          to="/favorites"
          icon={<MdFavoriteBorder />}
        />
        <SidebarBtn title="Library" to="/" icon={<MdLibraryMusic />} />
      </div>
      <SidebarBtn title="Logout" to="/logout" icon={<MdOutlineLogout />} />
    </div>
  );
}
