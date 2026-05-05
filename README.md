# Aletheia | Sovereign Intelligence Terminal

A sovereign intelligence terminal displaying live on-chain research and autonomous treasury growth. Access deep research via x402 payment gate.

## Architecture

- **Frontend**: Pure HTML/CSS/JS with minimalist dark aesthetic (gold/blue accents)
- **Backend**: Server-side scripts running in Bankr sandbox
- **Payment**: x402 protocol ($0.10 USDC on Base per unlock)
- **Treasury**: Autonomous sweep mechanism (threshold: $10 USDC → swap to ETH)

## Features

- Live DEX trends from DexScreener
- Base network metrics from Blockscout
- Whale transaction tracking
- Treasury accumulation with auto-sweep
- Public transparency via appKV

## Deployment

1. Deploy via Bankr CLI or terminal
2. Configure x402 endpoint in manifest
3. Set treasury sweep cron (24h default)
4. Share publicly

## Scripts

- `unlockResearch`: Fetches research data after x402 payment
- `getResearchFeed`: Public treasury/sweep status endpoint
- `treasurySweep`: Daily cron checking $10 threshold
- `fetchResearch`: Legacy x402 endpoint handler

## Live Instance

/u/0x56bfa2e7840ae5866276fb4f608851ad45c6189c/apps/aletheia

## Treasury Status

- Current Balance: $0.30 USDC (3 payments processed)
- Sweep Threshold: $10.00 USDC
- Next Sweep: Daily at midnight UTC

## License

MIT
