import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { id:1, name: "Home", icon: <AiFillHome />, type: "home" },
    { id:2, name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { id:3, name: "Music", icon: <CgMusicNote />, type: "category" },
    { id:4, name: "Films", icon: <FiFilm />, type: "category" },
    { id:5, name: "Live", icon: <MdLiveTv />, type: "category" },
    { id:6, name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { id:7, name: "News", icon: <ImNewspaper />, type: "category" },
    { id:8, name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { id:9, name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
        id:10, 
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { id:11, name: "Settings", icon: <FiSettings />, type: "menu" },
    { id:12, name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { id:13, name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { id:14, name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];