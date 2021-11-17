import { useMemo } from 'react';

const useStyles = props =>
    useMemo(
        () => ({
            wrapper: {
                position: 'relative',
                width: '100%',
                py: props.spacing || 0,
                px: { xs: 1, sm: 2, md: 3 },
                boxSizing: 'border-box',
                bgcolor: props.backgroundColor || 'transparent',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'center',
            },
            inner: {
                display: 'flex',
                position: 'relative',
                margin: 0,
                padding: '0',
                width: '100%',
                maxWidth: props.limitMaxWidth ? '1400px' : '100%',
                boxSizing: 'border-box',
                flexDirection: props.flexDirection || 'row',
                justifyContent: props.justifyContent || 'center',
                alignItems: props.alignItems || 'stretch',

                '& h2': {
                    fontSize: '22px',
                    fontWeight: 500,
                    mt: 0,
                    mb: 2,
                },
                '& h1': {
                    fontSize: '28px',
                    fontWeight: 300,
                    mt: 0,
                    mb: 3,
                },
            },
        }),
        [props]
    );

export { useStyles };
