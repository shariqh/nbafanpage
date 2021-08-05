import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import Layout from "../components/layout";
import playerStats from "../data/playerStats";
import PlayerBanner from "../components/playerBanner";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>NBA Fan Pages</title>
                <meta name="description" content="Your Favorite NBA Players"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="space-y-8">
                {playerStats.map((player, i) => (
                    <PlayerBanner key={player.name} index={i} playerData={player}/>
                ))}
            </div>
        </Layout>
    )
}