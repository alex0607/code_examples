import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LogoSVG from "@/components/LogoSVG";
import { useRouter } from 'next/router'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NumbersIcon from '@mui/icons-material/Numbers';

function a11yProps(currentUrl: string, url: string) {
    return {
        id: `vertical-tab-${url}`,
        'aria-controls': `vertical-tabpanel-${url}`,
        sx: {
            padding: 0,
            maxWidth: 88,
            maxHeight: 88,
            height: 88,
            color: 'rgba(255, 255, 255, 0.54)',
            fontWeight: 400,
            fontSize: 14,
            textTransform: 'none',
            minWidth: 88,
        },
        className: currentUrl === url ? 'tab-selected' : ''
    };
}

export default function CustomVerticalMenu() {
    const [value, setValue] = React.useState(0);
    const router = useRouter();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleClickOnTabs = (href: string) => () => {
        router.push(href);
    }

    return (
        <Tabs
            orientation="vertical"
            variant="standard"
            value={value}
            onChange={handleChange}
            aria-label="Vertical menu"
            sx={{ borderRight: 1, borderColor: 'divider', bgcolor: '#212121', width: 88, border: 'none' }}
            TabIndicatorProps={{sx: { display: 'none' }}}
        >
            <Tab
                icon={<LogoSVG />}
                {...a11yProps('/logo', router.asPath)}
                onClick={handleClickOnTabs('/')}
            />
            <Tab
                label="Dashboard"
                icon={<DashboardIcon />}
                {...a11yProps('/dashboard', router.asPath)}
                onClick={handleClickOnTabs('/dashboard')}
            />
            <Tab
                label="Chats"
                icon={<ChatIcon />}
                {...a11yProps('/', router.asPath)}
                onClick={handleClickOnTabs('/')}
            />
            <Tab
                label="Community"
                icon={<PeopleAltIcon />}
                {...a11yProps('/community', router.asPath)}
                onClick={handleClickOnTabs('/community')}
            />
            <Tab
                label="Channels"
                icon={<NumbersIcon />}
                {...a11yProps('/channels', router.asPath)}
                onClick={handleClickOnTabs('/channels')}
            />
        </Tabs>
    );
}