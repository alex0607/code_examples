import * as React from "react";
import Image from "next/image";
import styles from "@/styles/Chat.module.css";
import { User } from "@/redux/userApi"
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import { selectedUserActions } from "@/redux/selectedUser";

type ChatType = {
    img: any;
    lastTimeMessageSent?: string;
    name: string;
    lastMessage?: string;
    newMessages?: number;
    user: User,
};

export default function Chat({
    img,
    lastTimeMessageSent,
    name,
    lastMessage,
    newMessages,
    user,
}: ChatType) {
    const selectedUser = useAppSelector((state) => state.selectedUser);

    const selected = selectedUser?.login?.uuid === user?.login?.uuid;

    const mainClassName = styles.main;
    let statusClassName = styles.status;
    const status = user?.status;
    switch (status) {
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
    const dispatch = useAppDispatch();

    const handleChatClick = () => {
        dispatch(selectedUserActions.selectUser({ status, ...user }));
    };

    return (
        <div className={selected ? `${mainClassName} ${styles.selected}` : mainClassName} onClick={handleChatClick}>
            <div className={styles.avatarContainer}>
                <Image src={img} alt={name} width={54} height={54} className={styles.avatar}/>
                <div className={statusClassName} />
            </div>
            <div className={styles.informationSection}>
                <div className={styles.userName}>{name}</div>
                {lastMessage && <div className={styles.chatDescription}>{lastMessage}</div>}
            </div>
            {lastTimeMessageSent && <div className={styles.lastMessageTime}>{lastTimeMessageSent}</div>}
            {newMessages && <div className={styles.newMessagesCount}>{newMessages}</div>}
        </div>
    );
};
