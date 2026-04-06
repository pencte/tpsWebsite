export default function handler(req, res) {
  const ua = req.headers["user-agent"] || "";

  let host = "";

  /* ANDROID */
  if (ua.includes("Android")) {
    host = `
103.59.161.68 growtopia1.com
103.59.161.68 growtopia2.com
103.59.161.68 www.growtopia1.com
103.59.161.68 www.growtopia2.com
# Android Config
`;
  }

  /* IOS */
  else if (ua.includes("iPhone") || ua.includes("iPad")) {
    host = `
103.59.161.68 growtopia1.com
103.59.161.68 growtopia2.com
# iOS Surge Config
`;
  }

  /* WINDOWS / OTHER */
  else {
    host = `
103.59.161.68 growtopia1.com
103.59.161.68 growtopia2.com
# Windows Config
`;
  }

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Disposition", "inline");
  res.status(200).send(host);
}
