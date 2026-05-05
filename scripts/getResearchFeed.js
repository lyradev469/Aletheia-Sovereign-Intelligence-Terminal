// public feed - no payment required
const treasury = await appKV.get('treasury_balance') || 0;
const lastSweep = await appKV.get('last_sweep') || null;
const logs = await appKV.get('sweep_logs') || [];

return {
  treasury: treasury,
  lastSweep: lastSweep,
  logs: logs.slice(-10),
  status: 'operational'
};
