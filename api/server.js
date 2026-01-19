export default function handler(req, res) {
  const { index = "0", key } = req.query;

  if (key !== "yy40097") {  
    return res.status(403).json({ error: "Invalid key" });
  }

  const servers = [
    "106.75.240.151",     // index=0
    "14.103.172.244",    // index=1
    "45.125.44.183",    // index=2
  ];

  const i = parseInt(index);
  const ip = servers[i] || servers[0];   // 超出范围默认用第一个

  res.status(200).json({ ip: ip });
}