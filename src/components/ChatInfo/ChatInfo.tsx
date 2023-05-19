import * as React from "react";
import Image from "next/image";
import styles from "@/styles/ChatInfo.module.css";
import {IconButton} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from '@mui/icons-material/Videocam';
import TranslateIcon from '@mui/icons-material/Translate';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useAppSelector } from "@/redux/hooks";

export default function ChatInfo() {
    const selectedUser = useAppSelector((state) => state.selectedUser);

    let statusClassName = styles.status;

    switch (selectedUser?.status) {
        case 1:
            statusClassName = `${statusClassName} ${styles.statusAway}`;
            break;
        case 2:
            statusClassName = `${statusClassName} ${styles.statusActive}`;
            break;
        default:
            statusClassName = `${statusClassName} ${styles.statusAbsent}`;
            break;
    }

    return (
        <div className={styles.main}>
            <div className={styles.avatarContainer}>
                <Image
                    src={selectedUser?.picture?.medium || ''}
                    alt={`${selectedUser?.name?.first} ${selectedUser?.name?.last}`}
                    width={54}
                    height={54}
                    className={styles.avatar}
                />
                <div className={statusClassName} />
            </div>
            <div className={styles.informationSection}>
                <div className={styles.userName}>{`${selectedUser?.name?.first} ${selectedUser?.name?.last}`}</div>
            </div>
            <div className={styles.actions}>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <SearchIcon />
                </IconButton>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <PhoneIcon />
                </IconButton>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <VideocamIcon />
                </IconButton>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <TranslateIcon />
                </IconButton>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    );
};
