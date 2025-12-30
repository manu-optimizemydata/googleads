// Test endpoint to verify serverless function is working
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const hasBrevoKey = !!process.env.BREVO_API_KEY;
  const nodeEnv = process.env.NODE_ENV || 'not set';
  
  return res.status(200).json({
    status: 'ok',
    message: 'Serverless function is working',
    hasBrevoKey: hasBrevoKey,
    nodeEnv: nodeEnv,
    timestamp: new Date().toISOString()
  });
}





