import * as React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";
import Image from "next/image";
import UserImage from "/public/main_user.png";
import styles from "@/styles/Header.module.css";

type HeaderType = {
    title: string;
};

export default function Header({ title }: HeaderType) {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.rightSection}>
                <IconButton className={styles.iconButton} color="secondary" component="label">
                    <NotificationsNoneIcon />
                </IconButton>
                <IconButton className={styles.iconButton} color="secondary" component="label">
                    <MoreVertIcon />
                </IconButton>
                <Image width={56} height={56} src={UserImage} alt="avatar" />
            </div>
        </div>
    );
};