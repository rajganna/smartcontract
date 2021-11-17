import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import { useStyles } from './stylesheet';
import { FLEX_DIRECTIONS, JUSTIFY_CONTENT, ALIGN_ITEMS } from './consts';

const SectionWrapper = forwardRef(
    (
        {
            flexDirection,
            justifyContent,
            alignItems,
            spacing,
            backgroundColor,
            limitMaxWidth,
            children,
            ...others
        },
        ref
    ) => {
        const styles = useStyles({
            flexDirection,
            justifyContent,
            alignItems,
            spacing,
            backgroundColor,
            limitMaxWidth,
        });
        const { sx } = others;

        return (
            <Box sx={{ ...styles.wrapper, ...sx }} ref={ref}>
                <Box sx={styles.inner}>{children}</Box>
            </Box>
        );
    }
);

SectionWrapper.propTypes = {
    flexDirection: PropTypes.oneOf(Object.values(FLEX_DIRECTIONS)),
    justifyContent: PropTypes.oneOf(Object.values(JUSTIFY_CONTENT)),
    alignItems: PropTypes.oneOf(Object.values(ALIGN_ITEMS)),
    spacing: PropTypes.number,
    backgroundColor: PropTypes.string,
    limitMaxWidth: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

SectionWrapper.defaultProps = {
    flexDirection: FLEX_DIRECTIONS.ROW,
    justifyContent: JUSTIFY_CONTENT.CENTER,
    alignItems: ALIGN_ITEMS.STRETCH,
    limitMaxWidth: true,
};

export default SectionWrapper;
