const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", lastmod: "2022-12-17T07:01:04+00:00", priority: 1.0 },
    { url: "/nft-website-development", changefreq: "daily", priority: 0.9 },
    { url: "/website-design", changefreq: "daily", priority: 0.9 },
    { url: "/website-analysis", changefreq: "daily", priority: 0.9 },
    { url: "/smart-contract", changefreq: "daily", priority: 0.9 },
    { url: "/smart-contract-analysis", changefreq: "daily", priority: 0.9 },
    { url: "/about", changefreq: "daily", priority: 0.9 },
    { url: "/blog", changefreq: "daily", priority: 0.9 },
    { url: "/portfolio", changefreq: "daily", priority: 0.9 },
    { url: "/contract", changefreq: "daily", priority: 0.9 },
    {
      url: "/what-is-nft-how-does-it-really-works",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/where-to-buy-nfts-in-2022-top-20-marketplaces-and-how-does-it-works",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/how-will-the-merger-of-ethereum-affect-the-nft-market",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/web3-a-new-way-of-engaging-your-audience-and-gaining-a-competitive-edge",
      changefreq: "daily",
      priority: 0.9,
    },
    { url: "/why-web-30-is-the-future", changefreq: "daily", priority: 0.9 },
    {
      url: "/as-nft-floor-prices-fall-the-nft-market-crashes",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/is-cryptocurrency-in-a-slump",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/the-following-7-effective-tools-for-tracking-nft-collectors-trades",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/play-to-earn-could-lose-popularity-in-web3-to-ownership",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/a-growing-diversified-community-nfts-and-japanese-culture",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/top-10-nft-marketing-strategies-for-promoting-your-nfts",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/what-is-the-best-way-to-design-an-nft-platform-for-launchpad",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/opensea-is-the-biggest-nft-marketplace",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/how-to-keep-smart-contracts-secure",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/nft-minting-development-services",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/the-advantages-and-disadvantages-of-blockchain-technology",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/top-web3-wallet-development-company",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: "/best-ai-powered-nft-creator-apps-and-nft-art-generators",
      changefreq: "daily",
      priority: 0.9,
    },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
