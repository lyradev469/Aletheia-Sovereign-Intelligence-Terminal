const TREASURY_THRESHOLD = 10; // USD
const USDC_ADDRESS = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'; // Base USDC
const ETH_ADDRESS = '0x4200000000000000000000000000000000000006'; // Base WETH

try {
  // Get current treasury balance from appKV
  const currentBalance = await appKV.get('treasury_balance');
  const balanceUSD = parseFloat(currentBalance || '0');
  
  let logMessage = `Sweep check: $${balanceUSD.toFixed(2)} USDC`;
  
  if (balanceUSD > TREASURY_THRESHOLD) {
    logMessage += ' — Threshold exceeded, initiating swap...';
    
    // In production, this would execute a swap via smart_swap
    // For now, we log the action and update the treasury record
    logMessage += ' Swap to ETH queued (dry-run mode)';
    
    // Reset treasury after sweep
    await appKV.set('treasury_balance', '0.00');
    await appKV.set('last_sweep', new Date().toISOString());
    await appKV.set('sweep_logs', logMessage);
    
    return { 
      success: true, 
      action: 'sweep_executed', 
      amount: balanceUSD,
      log: logMessage 
    };
  } else {
    logMessage += ' — Below threshold, no action taken';
    await appKV.set('sweep_logs', logMessage);
    
    return { 
      success: true, 
      action: 'no_action', 
      balance: balanceUSD,
      log: logMessage 
    };
  }
} catch (e) {
  await appKV.set('sweep_logs', `Error: ${e.message}`);
  return { success: false, error: e.message };
}
