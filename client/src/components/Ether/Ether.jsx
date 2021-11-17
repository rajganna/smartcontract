import React, {useState} from "react";
import {
    Container,
    ContentBlock,
    Label,
    MainContent,
    Section,
    SectionRow, SmallButton,
    Title, TitleRow
} from "../Common/Common";
import {useSendTransaction} from "@usedapp/core";
import { utils } from 'ethers';
import BpkInput, {INPUT_TYPES} from "bpk-component-input";
import BpkGridContainer from "bpk-component-grid/src/BpkGridContainer";
import BpkGridRow from "bpk-component-grid/src/BpkGridRow";
import BpkGridColumn from "bpk-component-grid/src/BpkGridColumn";
import BpkButton from "bpk-component-button";


const Ether = () => {


    const [amount, setAmount] = useState('0')
    const [address, setAddress] = useState('')

    const { sendTransaction, state } = useSendTransaction({ transactionName: 'Send Ethereum' })

    const handleSend = async () => {
      await sendTransaction({ to: address, value: utils.parseEther(amount) })
    }

    return (
    <MainContent>
        <Container>
            <Section>
                <SectionRow>
                    <Title>Send Ether</Title>
                </SectionRow>
                <ContentBlock style={{ padding: 0 }}>

                <div>
                    <BpkGridContainer fullWidth>
                        <BpkGridRow>
                            <BpkGridColumn width={2}>
                               <Label> How much?</Label>
                            </BpkGridColumn>
                            <BpkGridColumn width={6}>
                                <BpkInput type={INPUT_TYPES.NUMBER} id={"homuch"} name={"howmuch"} onChange={(e) => setAmount(e.currentTarget.value)} />
                            </BpkGridColumn>
                        </BpkGridRow>
                        <BpkGridRow>
                            <BpkGridColumn width={2}>
                                <Label> To whom?</Label>
                            </BpkGridColumn>
                            <BpkGridColumn width={6}>
                                <BpkInput type={INPUT_TYPES.TEXT} id={"whom"} name={"whom"} onChange={(e) => setAddress(e.currentTarget.value)} />
                            </BpkGridColumn>
                        </BpkGridRow>
                        <BpkGridRow>
                            <BpkGridColumn width={12}>
                                <BpkButton onClick={handleSend}>Send</BpkButton>
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

export default Ether;
