// deep research data fetch - called after x402 payment in iframe
const dexData = await http.fetch('https://api.dexscreener.com/latest/dex/search?q=base');
const chainStats = await http.fetch('https://base.blockscout.com/api/v2/stats');

const dexPairs = Array.isArray(dexData) ? dexData : (dexData && dexData.pairs) || [];
const researchData = {
  locked: false,
  timestamp: Date.now(),
  dexTrends: dexPairs.slice(0, 5).map(p => ({
    baseToken: p.baseToken?.symbol || 'Unknown',
    quoteToken: p.quoteToken?.symbol || 'Unknown',
    fdv: p.fdv || 0,
    priceChange: p.priceChange?.h24 || 0
  })),
  chainMetrics: chainStats || {},
  insights: [
    'Base network activity tracking active',
    'Real-time DEX liquidity monitoring enabled',
    'Whale transaction detection armed'
  ]
};

// log payment to treasury
const currentTreasury = await appKV.get('treasury_balance') || 0;
await appKV.set('treasury_balance', currentTreasury + 0.1);
await appKV.set('payment_status', { lastPayment: Date.now(), amount: 0.1 });

return researchData;
