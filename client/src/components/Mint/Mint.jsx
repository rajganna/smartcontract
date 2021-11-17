import React, {useEffect, useState} from 'react';
import {Container, ContentBlock, Label, MainContent, Section, SectionRow, Title} from "../Common/Common";
import BpkGridContainer from "bpk-component-grid/src/BpkGridContainer";
import BpkGridRow from "bpk-component-grid/src/BpkGridRow";
import BpkGridColumn from "bpk-component-grid/src/BpkGridColumn";
import BpkInput, {INPUT_TYPES} from "bpk-component-input";
import BpkButton from "bpk-component-button";
import getWeb3 from "../utils/getWeb3";
import Token from "../../Token.json";

class Mint extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            web3: undefined,
        }
    }

    async componentDidMount() {
        const web3 = await getWeb3();
        this.setState({
            web3: web3
        })
    }

    handleSend = async () => {
        const web3 = this.state.web3;
        const networkId = await web3.eth.net.getId();
        const accounts = await web3.eth.getAccounts();
        const deployedNetwork = Token.networks[networkId];
        const instance = new web3.eth.Contract(
            Token.abi,
            deployedNetwork && deployedNetwork.address,
        );
        console.log(accounts);
        await instance.methods.mint(this.state.amount).send({
            from: accounts[0],
            value : web3.utils.toWei(this.state.amount, 'ether')
        });
    }

    render() {
        return (
            <MainContent>
                <Container>
                    <Section>
                        <SectionRow>
                            <Title>Mint Token</Title>
                        </SectionRow>
                        <ContentBlock style={{padding: 0}}>
                            <div>
                                <BpkGridContainer fullWidth>
                                    <BpkGridRow>
                                        <BpkGridColumn width={2}>
                                            <Label> How much?</Label>
                                        </BpkGridColumn>
                                        <BpkGridColumn width={6}>
                                            <BpkInput type={INPUT_TYPES.NUMBER} id={"homuch"} name={"howmuch"} onChange={(e) => this.setState( { amount: e.currentTarget.value })} />
                                        </BpkGridColumn>
                                    </BpkGridRow>
                                    <BpkGridRow>
                                        <BpkGridColumn width={12}>
                                            <BpkButton onClick={this.handleSend}>Mint</BpkButton>
                                        </BpkGridColumn>
                                    </BpkGridRow>
                                </BpkGridContainer>

                            </div>
                        </ContentBlock>
                    </Section>
                </Container>
            </MainContent>
        )
    }


}

export default Mint;
