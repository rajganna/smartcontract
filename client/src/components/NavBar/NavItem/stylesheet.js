const useStyles = props => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: props.disabled ? 'rgba(255, 255, 255, .5)' : '#fff',
        textDecoration: 'none',
        mb: 0,
        ml: props.active && !props.vertical ? '-1px' : 0,
        bgcolor: props.active ? 'rgba(255,255,255,0.1)' : 'transparent',
        boxShadow: props.active ? 'rgba(10, 10, 10, 0.1) 0px 1px 6px 0px' : 'none',
        borderBottom: props.vertical
            ? 0
            : props.active
                ? `3px solid rgba(255,255,255,0.5)`
                : '3px solid transparent',
        transition: '.2s',
        cursor: props.active || props.disabled ? 'default' : 'pointer',
        '&:hover': {
            bgcolor: props.active
                ? 'rgba(255,255,255,0.1)'
                : props.disabled
                    ? 'none'
                    : 'rgba(255,255,255,0.05)',
        },
    },
    label: {
        py: props.vertical ? 2 : 0,
        px: 2,
        lineHeight: 1,
        boxSizing: 'border-box',
        borderRight:
            props.active || props.vertical ? 0 : '1px solid rgba(255, 255, 255, .2)',
        fontWeight: props.active ? 700 : 400,
    },
    tooltip: {
        color: 'red',
        '& .MuiTooltip-tooltip': { backgroundColor: '#fff' },
    },
});

export { useStyles };
