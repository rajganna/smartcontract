import React, {useEffect, useState} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import STYLES from './App.scss';
import NavBar from "../NavBar";
import Mint from "../Mint/Mint";
import {Box} from "@material-ui/core";
import SectionWrapper from "../SectionWrapper";
import autodeskLogo from "../../assets/logo.png";
import {useStyles} from "./stylesheet";
import Account from "../Account";
import Ether from "../Ether";

const Pages = {
    HOME: 'HOME',
    MINT: 'MINT',
    ACCOUNT: 'ACCOUNT',
    ETHER: 'ETHER'
};

const routes = [
    { page: Pages.HOME, url: '/' },
    { page: Pages.MINT, url: '/mint' },
    { page: Pages.ACCOUNT, url: '/account' },
    { page: Pages.ETHER, url: '/ether' },
];

const createRoutes = props =>
    routes.map(({ page, url }) => {
        if (page === Pages.HOME || page === Pages.ACCOUNT) {
            return (
                <Route
                    key={url}
                    path={url}
                    exact
                    render={() => <Account {...props} />}
                />
            );
        }

        if (page === Pages.MINT) {
            return (
                <Route
                    key={url}
                    path={url}
                    render={() => <Mint {...props} />}
                />
            );
        }

        if (page === Pages.ETHER) {
            return (
                <Route
                    key={url}
                    path={url}
                    render={() => <Ether {...props} />}
                />
            );
        }

        return (
            <Route
                key={url}
                path={url}
                render={() => <Mint {...props} />}
            />
        );
    });

const App = (props) => {

    const [stage, setStage] = useState(-1);
    const [bgImage, setBgImage] = useState(null);
    const [bgImage4k, setBgImage4k] = useState(null);
    const [logoImage, setLogoImage] = useState(null);
    const [bgPosition, setBgPosition] = useState(null);
    const [videoStyles, setVideoStyles] = useState(null);
    const [timelineHeight, setTimelineHeight] = useState(0);
    const [statisticsHeight, setStatisticsHeight] = useState(0);
    const styles = useStyles({
        bgImage,
        bgImage4k,
        bgPosition,
        videoStyles,
        logoImage,
        timelineHeight,
        statisticsHeight,
    });

    return (
        <div>
         <BrowserRouter>
                    <Box sx={styles.wrapper} id='poster'>
                        <NavBar limitMaxWidth={false} showLogo sx={styles.navBar} />
                        <Box sx={styles.contentsWrapper}>
                            { <Box sx={styles.backgroundLayer} />}
                            <Box sx={styles.contentsBody}>
                                <Box sx={styles.leftPanel}>
                                    <Box sx={styles.panelBlurEffectLayer} />
                                </Box>
                                <Box sx={styles.rightPanel}>
                                    {(
                                        <>
                                            <Switch>{createRoutes(props)}</Switch>

                                        </>
                                    )}

                                </Box>
                            </Box>
                       </Box>

                        {/* footer */}
                        <SectionWrapper
                            sx={styles.footer}
                            limitMaxWidth={false}
                            spacing={1.5}
                        >
                            <Box sx={styles.footerInner}>
                                <Box
                                    component='img'
                                    src={autodeskLogo}
                                    sx={styles.logo}
                                />
                                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    Copyright &copy;&nbsp;
                                    &nbsp;PundiX, Inc.&nbsp;All rights reserved.
                                </Box>
                            </Box>
                        </SectionWrapper>
                    </Box>
         </BrowserRouter>
        </div>
    )
}

export default App;
