import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardHeader, CardBody } from 'uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import Page from 'components/layout/Page'
import ReferralLink from './components/ReferralLink'
import TotalReferralCount from './components/TotalReferralCount'

const Con = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Actions = styled.div`
  margin-top: 24px;
`

const StyleHeading = styled(Heading)`
    margin-top: 15px
`

const Referral: React.FC = () => {
    // const TranslateString = useI18n()
    const { account } = useWallet()

    return (
        <Page>
          <Con>
              <Heading size="xl" mb="24px">Pearl DeFi Referral Program</Heading>
              <StyledCard>
                  <CardHeader>
                      <Heading size="md">Share the referral link below to invite your friends and earn 1% of your friends earnings FOREVER!</Heading>
                  </CardHeader>
                  <CardBody>
                      <Actions>
                          {account ? (
                              <div>
                                  <ReferralLink />
                                  <TotalReferralCount />
                              </div>
                          ) : (
                              <div>
                                  <UnlockButton />
                                  <StyleHeading size="md">Unlock wallet to get your unique referral link</StyleHeading>
                              </div>
                          )}
                      </Actions>
                  </CardBody>
              </StyledCard>
          </Con>
        </Page>
    )

}

export default Referral
