import React, { useEffect, useState } from "react";
import Link from "next/link";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>
          In Non-Fungible Token Development Services, We Are the Experts – NFT
          Constructer
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />
        <link rel="canonical" href="https://nftconstructer.com/ " />
        <meta
          name="description"
          content="NFT Constructer offers highly professional website design and development services with affordable pricing plans specialized for NFT DeFi Blockchain and Web3 based projects corporate clients and startups."
        ></meta>
        <meta
          name="og:description"
          content="NFT Constructer offers highly professional website design and development services with affordable pricing plans specialized for NFT DeFi Blockchain and Web3 based projects corporate clients and startups."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="In Non-Fungible Token Development Services, We Are the Experts – NFT Constructer "
        />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>

      <div>
        <h2>Hello BOdy</h2>
      </div>
    </>
  );
}
Home.layout = AppLayout;

export default Home;
