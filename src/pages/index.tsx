import * as React from 'react';
import CustomMenu from "@/components/CustomMenu";
import Head from "next/head";
import ChatOptions from "@/components/ChatOptions";
import styles from "@/styles/Chats.module.css";
import Chat from "@/components/Chat";
import ChatInfo from "@/components/ChatInfo";
import EmptyChat from "@/components/EmptyChat";
import MessageTextSection from "@/components/MessageTextSection";
import { useGetUsersQuery } from "@/redux/userApi";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useAppSelector} from "@/redux/hooks";
import NotSelectedUserSection from "@/components/NotSelectedUserSection";

export default function Chats() {
    const selectedUser = useAppSelector((state) => state.selectedUser);
    const { isLoading, data = [] , isError } = useGetUsersQuery(null);

    if (isError && data.length === 0) {
        return (
            <Box sx={{
                display: 'flex',
                width: 1,
                height: 1,
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFF'
            }}>
                <h1>Something goes wrong. Please write a message to our support</h1>
            </Box>
        );
    }

    return (
        <>
            <Head>
                <title>Let&apos;s Talk</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <CustomMenu title="Chats">
                {isLoading ? (
                    <Box sx={{
                        display: 'flex',
                        width: 1,
                        height: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#FFF'
                    }}>
                        <CircularProgress />
                    </Box>
                    ) : (
                    <div className={styles.chats}>
                        <div className={styles.leftPart}>
                            <ChatOptions />
                            <div className={styles.leftPartCharts}>
                                {data.map((user, index) => (
                                    <Chat
                                        user={user}
                                        img={user?.picture?.thumbnail || ''}
                                        name={`${user.name.first} ${user.name.last}`}
                                        key={index}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={styles.rightPart}>
                            {selectedUser ? (
                                <>
                                    <ChatInfo />
                                    <EmptyChat />
                                    <MessageTextSection />
                                </>
                            ) : (<NotSelectedUserSection />)}
                        </div>
                    </div>
                )}
            </CustomMenu>
        </>
    )
}
