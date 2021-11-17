import React from "react";
import { useEthers } from "@usedapp/core";
import BpkButton from "bpk-component-button";

const Wallet = () => {
    const { activateBrowserWallet, account, deactivate } = useEthers();
    const handleConnectWallet = () => {
        activateBrowserWallet();
    }

    return (
        <React.Fragment>
            {account === null || account === undefined  ? (
                <>

                    <BpkButton onClick={()=>handleConnectWallet()}>Connect Wallet</BpkButton>
                </>
            ) : (
                <BpkButton onClick={()=>deactivate()}>Disconnect</BpkButton>
            )}


        </React.Fragment>
    )
}

export default Wallet;
