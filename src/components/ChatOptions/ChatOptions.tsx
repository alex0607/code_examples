import * as React from "react";
import CustomButton from "@/components/CustomButton";
import {IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SVGS from "@/components/SVGS";
import styles from "@/styles/ChatOptions.module.css";

export default function ChatOptions() {
    return (
        <div className={styles.main}>
            <CustomButton><SVGS.AddMultiUsersIcon /> New</CustomButton>
            <div className={styles.rightSection}>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <SVGS.TuneVariantIcon />
                </IconButton>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <SVGS.SortIcon />
                </IconButton>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    )
}