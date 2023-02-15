import BigNumber from 'bignumber.js/bignumber.mjs'

declare global {
  interface Window {
    ethereum?: any
    twttr?: {
      ready: () => Promise
    }
  }
}

export type Bignumberish = BigNumber | string | number
