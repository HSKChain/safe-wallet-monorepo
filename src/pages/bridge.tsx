import Head from 'next/head'
import type { NextPage } from 'next'

import { Bridge } from '@/features/bridge/components/Bridge'

const BridgePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>HSKChain Safe – Bridge</title>
      </Head>
      <Bridge />
    </>
  )
}

export default BridgePage
