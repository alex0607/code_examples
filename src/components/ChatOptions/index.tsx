import * as React from "react";
import CustomButton from "@/components/CustomButton";
import {IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { AddMultiUsersIcon, SortIcon, TuneVariantIcon } from "@/components/SVGS";
import styles from "@/styles/ChatOptions.module.css";

export default function ChatOptions() {
    return (
        <div className={styles.main}>
            <CustomButton><AddMultiUsersIcon /> New</CustomButton>
            <div className={styles.rightSection}>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <TuneVariantIcon />
                </IconButton>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <SortIcon />
                </IconButton>
                <IconButton color="secondary" className={styles.icon} component="label">
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    )
}