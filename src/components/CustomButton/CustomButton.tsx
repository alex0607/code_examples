import * as React from "react";
import Button from "@mui/material/Button";
import styles from '@/styles/CustomButton.module.css';

type CustomButtonType = {
    children: string | React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export default function CustomButton({ className, children, onClick }: CustomButtonType) {
    return (
        <Button onClick={onClick} className={`${styles.customButton} ${className}`} variant="contained">
            {children}
        </Button>
    );
}
