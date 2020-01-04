export const UNISWAP_MARKET = `{ exchanges(where: {tokenSymbol: "VLDY" }, first: 1) { tokenLiquidity ethLiquidity tradeVolumeUSD lastPriceUSD lastPrice } }`;
export const UNISWAP_LIQUIDITY = `{ exchangeDayDatas(where: { exchangeAddress: \"0xd01590bf566d070d4ce04743705e835f81ff77ca\"}) { ethBalance date } }`;
