import { useMemo } from 'react';
import { alpha } from '@mui/material/styles';
import { VIEWS, ORIENTATIONS } from '../../hooks/useLayout';

const leftPanelWidth = {
  lg: 220,
  sm: 320,
};

const getRightPanelMargins = view =>
  view === VIEWS.MOBILE ? 0 : view === VIEWS.SMALL_DESKTOP ? 1 : 2;

const backgroundStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'transparent',
};

const useStyles = props =>
  useMemo(
    () => ({
      wrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#F1F2F8'
      },
      navBar: {
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'visible',
        zIndex: 'appBar',
      },
      timeline: {
        position: 'relative',
        bgcolor: 'rgba(255, 255, 255, 0.3)',
        flexGrow: 0,
        flexShrink: 0,
        boxSizing: 'border-box',
        zIndex: 30,
        display:
          props.view === VIEWS.MOBILE && !props.isHomePage ? 'none' : 'flex',
      },
      contentsWrapper: {
        position: 'relative',
        flexGrow: 1,
        flexShrink: 1,
        overflow: 'hidden',
        backgroundImage: props.bgImage ? `url(${props.bgImage})` : 'none',
        ...backgroundStyle,
        backgroundPosition: props.bgPosition || 'center center',
        bgcolor: 'lightSlate.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        zIndex: 20,
      },
      backgroundLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100vw',
        bottom: 0,
        backgroundImage: props.bgImage4k ? `url(${props.bgImage4k})` : 'none',
        ...backgroundStyle,
        backgroundPosition: props.bgPosition || 'center center',
      },
      videoBackgroundLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100vw',
        bottom: 0,
        overflow: 'hidden',

        '& > video': {
          position: 'absolute',
        },
      },
      contentsBody: {
        position: 'relative',
        flexGrow: 1,
        flexShrink: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        zIndex: 30,
      },
      leftPanel: {
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'hidden',
        position: 'relative',
        transition: '0.2s',
        width:
          props.view === VIEWS.MOBILE
            ? props.isHomePage
              ? '100vw'
              : 0
            : props.view === VIEWS.SMALL_DESKTOP
            ? props.isHomePage
              ? `${leftPanelWidth.sm}px`
              : 0
            : `${leftPanelWidth.lg}px`,
      },
      panelBlurEffectLayer: {
        position: 'absolute',
        top: `-${props.timelineHeight || '1px'}`,
        bottom: `-${props.statisticsHeight || '1px'}`,
        left: 0,
        width: '100vw',
        overflow: 'hidden',
        backgroundImage: props.bgImage ? `url(${props.bgImage})` : 'none',
        ...backgroundStyle,
        backgroundPosition: props.bgPosition || 'center center',
        filter: 'blur(4px)',
        opacity: 0.6,
      },
      leftPanelInner: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width:
          props.view === VIEWS.MOBILE
            ? '100vw'
            : props.view === VIEWS.SMALL_DESKTOP
            ? `${leftPanelWidth.sm}px`
            : `${leftPanelWidth.lg}px`,
        height: '100%',
        background: 'rgba(255, 255, 255, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
      },
      navButtonsWrapper: {
        pt:
          props.view === VIEWS.MOBILE
            ? props.orientation === ORIENTATIONS.LANDSCAPE
              ? 1.5
              : 3
            : props.view === VIEWS.SMALL_DESKTOP
            ? 5
            : 8,

        display: 'flex',
        flexDirection:
          props.view === VIEWS.MOBILE &&
          props.orientation === ORIENTATIONS.LANDSCAPE
            ? 'row'
            : 'column',
      },
      navButton: {
        mt:
          props.view !== VIEWS.MOBILE
            ? 2
            : props.orientation === ORIENTATIONS.PORTRAIT
            ? 1.5
            : 0,
        ml:
          props.view === VIEWS.MOBILE &&
          props.orientation === ORIENTATIONS.LANDSCAPE
            ? 1
            : 0,
      },
      procedureActionWrapper: {
        position: 'relative',
        pb:
          props.view === VIEWS.MOBILE
            ? props.orientation === ORIENTATIONS.LANDSCAPE
              ? 1.5
              : 3
            : 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      rightPanel: {
        flexGrow: 1,
        flexShrink: 1,
        position: 'relative',
        overflow: 'hidden',
      },
      rightPanelInner: {
        position: 'absolute',
        overflow: 'hidden',
        top: theme => theme.spacing(getRightPanelMargins(props.view)),
        bottom: theme => theme.spacing(getRightPanelMargins(props.view)),
        left: theme => theme.spacing(getRightPanelMargins(props.view)),
        right: theme => theme.spacing(getRightPanelMargins(props.view)),
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        flexDirection: 'column',
      },
      locationLink: {
        position: 'absolute',
        bottom: theme => theme.spacing(3.5),
        right: theme => theme.spacing(3.5),
        boxSizing: 'border-box',
        px: 2,
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '13px',
        transition: '0.3s',
        zIndex: 99,
        cursor: 'pointer',
        borderRadius: theme => theme.spacing(2),
        lineHeight: theme => theme.spacing(4),
        textDecoration: 'none',
        bgcolor: theme => alpha(theme.palette.lightSlate.main, 0.5),
        '&:hover': {
          bgcolor: theme => alpha(theme.palette.lightSlate.main, 0.6),
        },
      },
      locationIcon: {
        fontSize: '18px',
        mr: 1,
      },
      statistics: {
        position: 'relative',
        bgcolor: 'rgba(255, 255, 255, 0.3)',
        color: '#fff',
        flexGrow: 0,
        flexShrink: 0,
        zIndex: 30,
        display:
          props.view === VIEWS.MOBILE &&
          props.orientation === ORIENTATIONS.LANDSCAPE
            ? 'none'
            : 'flex',
      },
      footer: {
        bgcolor: 'primary.main',
        flexGrow: 0,
        flexShrink: 0,
      },
      footerInner: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white',
        '& a': {
          color: 'white',
        },
      },
      logo: {
        height: props.view === VIEWS.NORMAL ? '14px' : '12px',
      },
      soundTrackPlayer: {
        position: 'absolute',
        bottom: theme => theme.spacing(3),
        left: theme => theme.spacing(3),
        zIndex: 'modal',
      },
      logoLayer: {
        position: 'absolute',
        width: '100vw',
        right: props.orientation === ORIENTATIONS.PORTRAIT ? '-10vw' : 0,
        top: props.orientation === ORIENTATIONS.PORTRAIT ? '25%' : 0,
        bottom: props.orientation === ORIENTATIONS.PORTRAIT ? '25%' : 0,
        backgroundImage: props.logoImage ? `url(${props.logoImage})` : 'none',
        ...backgroundStyle,
        backgroundPosition: props.bgPosition || 'center center',
        backgroundSize:
          props.orientation === ORIENTATIONS.PORTRAIT ? '100% auto' : 'cover',
        zIndex: 21,
        transition: '0.1s',
        opacity: props.isHomePage ? 1 : 0,
      },
    }),
    [props]
  );

export { useStyles };
