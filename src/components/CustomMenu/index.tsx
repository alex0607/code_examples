import * as React from "react";
import CustomVerticalMenu from "@/components/CustomVerticalMenu";
import Header from "@/components/Header";
import styles from "@/styles/CustomMenu.module.css";

type CustomMenu = {
  children?: React.ReactNode;
  title: string;
};

export default function CustomMenu({ children, title = '' }: CustomMenu) {
    return (
        <div className={styles.wrapper}>
            <CustomVerticalMenu />
            <div className={styles.rightSection}>
                <Header title={title} />
                {children}
            </div>
        </div>
    );
}