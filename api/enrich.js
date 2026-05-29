export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid "text" field.' });
  }

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const result = {
    original_text: text,
    timestamp: new Date().toISOString(),
    word_count: wordCount,
    ai_score: 0.92,
  };

  return res.status(200).json(result);
}
