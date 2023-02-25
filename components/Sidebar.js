import {
  ClipboardIcon,
  CodeBracketIcon,
  DeviceTabletIcon,
  HomeIcon,
  InformationCircleIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="px-4 flex flex-col space-y-6 overflow-hidden fixed">
      <div className="menuiconmainDiv">
        <Link href="/" className="menuIconstyleforSidebar">
          <HomeIcon className="menuIconSidebarFont" />
          <p className="MenuNameSidebar">Home</p>
        </Link>
      </div>

      {/*  Project */}
      <div className="menuiconmainDiv">
        <Link href="/project" className="menuIconstyleforSidebar">
          <ClipboardIcon className="menuIconSidebarFont" />
          <p className="MenuNameSidebar">Project</p>
        </Link>
      </div>

      {/* Source Code */}
      <div className="menuiconmainDiv">
        <Link href="/sourcecode" className="menuIconstyleforSidebar">
          <CodeBracketIcon className="menuIconSidebarFont" />
          <p className="MenuNameSidebar">Source Code</p>
        </Link>
      </div>

      {/* Contact */}
      <div className="menuiconmainDiv">
        <Link href="/contact" className="menuIconstyleforSidebar">
          <InformationCircleIcon className="menuIconSidebarFont" />
          <p className="MenuNameSidebar">Contact</p>
        </Link>
      </div>

      {/* Post Article */}
      <div className="menuiconmainDiv">
        <Link href="/article" className="menuIconstyleforSidebar">
          <InformationCircleIcon className="menuIconSidebarFont" />
          <p className="MenuNameSidebar">Article</p>
        </Link>
      </div>

      {/* Visit */}
      <div className="menuiconmainDiv">
        <Link href="visit" className="menuIconstyleforSidebar">
          <TrophyIcon className="menuIconSidebarFont" />
          <p className="MenuNameSidebar">Visit</p>
        </Link>
      </div>

      {/* About */}
      <div className="menuiconmainDiv">
        <Link href="about" className="menuIconstyleforSidebar">
          <DeviceTabletIcon className="menuIconSidebarFont" />
          <p className="MenuNameSidebar">About</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
