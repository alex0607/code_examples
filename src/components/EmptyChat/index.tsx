import Image from "next/image";
import Button from '@mui/material/Button';
import styles from "@/styles/EmptyChat.module.css";
import {useAppSelector} from "@/redux/hooks";

export default function EmptyChat() {
    const selectedUser = useAppSelector((state) => state.selectedUser);

    return (
        <div className={styles.main}>
            <Image src={selectedUser?.picture?.large || ''} alt="user-avatar" width={175} height={175} className={styles.avatar} />
            <div className={styles.userName}>{`${selectedUser?.name?.first} ${selectedUser?.name?.last}`}</div>
            <div className={styles.nickname}>@{selectedUser?.login?.username || ''}</div>
            <div className={styles.helper}>{`There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, or randomised words which
                don't look even.`}
            </div>
            <div className={styles.actions}>
                <Button className={styles.firstAction}>👋 Hello!</Button>
                <Button className={styles.secondAction}>😉 Wink</Button>
                <Button className={styles.thirdAction}>💬 {`Let's talk`}</Button>
            </div>
        </div>
    )
}