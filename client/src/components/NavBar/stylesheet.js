import { useMemo } from 'react';

const useStyles = props =>
    useMemo(
        () => ({
            wrapper: {
                position: 'relative',
                bgcolor: 'primary.main',
                height: theme => ({ xs: theme.spacing(6), sm: theme.spacing(6.5) }),
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'space-between',
            },
            logo: {
                flexShrink: 0,
                flexGrow: 0,
                alignSelf: 'center',
                color: '#fff',
                fontSize: { xs: '26px', sm: '30px' },
                textDecoration: 'none',
                fontWeight: 200,
                lineHeight: 1,
                '& b': {
                    fontWeight: 500,
                },
            },
            logoDivider: {
                display: { xs: 'none', lg: 'block' },
                width: theme => theme.spacing(0.5),
                height: theme => theme.spacing(3),
                bgcolor: 'rgba(255, 255, 255, .3)',
                alignSelf: 'center',
                transform: 'skewX(-20deg)',
                ml: 2.5,
                mr: 1.5,
            },
            mainMenu: {
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'row',
                flexGrow: 1,
                flexShrink: 1,
                alignItems: 'stretch',
            },
            mobileMenuButtonWrapper: {
                display: { xs: 'flex', lg: 'none' },
                flexGrow: 1,
                alignItems: 'center',
                flexDirection: 'row',
                color: '#fff',
                ml: 1,
            },
            secondaryMenu: {
                alignSelf: 'center',
                flexGrow: 0,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            userMenuButton: {
                ml: 2,
                overflow: 'hidden',
                width: '40px',
            },
            avatar: {
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                boxShadow: 2,
            },
            drawerMenusWrapper: {
                bgcolor: 'primary.main',
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                height: '100%',
            },
        }),
        []
    );

export { useStyles };
