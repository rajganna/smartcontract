import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Tooltip } from '@mui/material';

import { useStyles } from './stylesheet';

export default function NavItem({
                                    label,
                                    to,
                                    disabled,
                                    vertical,
                                    external,
                                    link,
                                    ...others
                                }) {
    const match = useRouteMatch(to);
    const styles = useStyles({
        active: match && (match.isExact || to !== '/'),
        disabled,
        vertical,
    });
    const { sx } = others;

    let Wrapper = 'div';
    let wrapperProps = {};
    if (!disabled) {
        Wrapper = external ? 'a' : Link;
        wrapperProps = external ? { href: link } : { to };
    }

    return (
        <Tooltip
            title={disabled && !vertical ? 'Coming soon' : ''}
            placement='bottom'
            arrow
            sx={styles.tooltip}
        >
            <Box
                component={Wrapper}
                sx={{ ...styles.wrapper, ...sx }}
                {...wrapperProps}
            >
                <Box sx={styles.label}>{label}</Box>
            </Box>
        </Tooltip>
    );
}

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    vertical: PropTypes.bool,
    external: PropTypes.bool,
    link: PropTypes.string,
};

NavItem.defaultProps = {
    disabled: false,
    vertical: false,
    external: false,
};
