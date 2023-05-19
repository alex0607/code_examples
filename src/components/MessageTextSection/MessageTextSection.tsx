import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SVGS from "@/components/SVGS";
import MicIcon from '@mui/icons-material/Mic';
import styles from '@/styles/MessageTextSection.module.css';

export default function MessageTextSection() {
    return (
        <div className={`${styles.main} message-text-section`}>
            <IconButton color="primary" className={styles.iconButton} aria-label="upload picture" component="label">
                <SVGS.AddAttachmentIcon />
            </IconButton>
            <TextField
                fullWidth
                id="input-with-icon-textfield"
                variant="standard"
                placeholder="Write a message..."
            />
            <IconButton color="primary" aria-label="upload picture" component="label">
                <SVGS.SmileWinkIcon />
            </IconButton>
            <IconButton className={styles.icon} color="primary" aria-label="upload picture" component="label">
                <MicIcon />
            </IconButton>
        </div>
    );
};

