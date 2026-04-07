let latest = {};

export default function handler(req, res) {
  if (req.method === "POST") {
    latest = req.body;
    return res.status(200).json({ ok: true });
  }

  return res.status(200).json(latest);
}
