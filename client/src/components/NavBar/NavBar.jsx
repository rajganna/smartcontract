import React from "react";
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Hidden, Button, Box } from '@mui/material';

import SectionWrapper, { FLEX_DIRECTIONS } from '../SectionWrapper';
import NevItem from './NavItem';
import { useStyles } from './stylesheet';

const menus = [ {
    label: 'Account',
    to: '/account',
    external: true,
    link: '/account',
    enabled: true,
    visible: true
},{
    label: 'Mint',
    to: '/mint',
    external: true,
    link: '/mint',
    enabled: true,
    visible: true
},{
    label: 'Send Ether',
    to: '/ether',
    external: false,
    link: '/ether',
    enabled: true,
    visible: true
}];

const NavBar = forwardRef(
    ({ showSubmitButton, limitMaxWidth, ...others }, ref) => {
        const styles = useStyles();
        const { sx } = others;

        return (
            <Box {...others} sx={{ ...styles.wrapper, ...sx }} ref={ref}>
                <SectionWrapper
                    flexDirection={FLEX_DIRECTIONS.ROW}
                    limitMaxWidth={limitMaxWidth}
                >
                    <Box component={Link} to='/' sx={styles.logo}>
                        <b>PundiX</b>
                    </Box>
                    <Box sx={styles.logoDivider} />
                    <Box sx={styles.mainMenu}>
                        {menus &&
                        Array.isArray(menus) &&
                        menus.map(
                            ({ label, to, external, link, enabled, visible }) =>
                                visible && (
                                    <NevItem
                                        key={label}
                                        label={label}
                                        to={label === 'Home' ? '/' : to}
                                        disabled={!enabled}
                                        external={external}
                                        link={link}
                                    />
                                )
                        )}
                    </Box>

                    <Box sx={styles.secondaryMenu}>
                        { showSubmitButton && (
                            <Hidden xsDown>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                >
                                    Connect to Wallet
                                </Button>
                            </Hidden>
                        )}
                    </Box>
                </SectionWrapper>
            </Box>
        );
    }
);

NavBar.propTypes = {
    showSubmitButton: PropTypes.bool,
    limitMaxWidth: PropTypes.bool,
};

NavBar.defaultProps = {
    showSubmitButton: false,
    limitMaxWidth: true,
};

export default NavBar;
