import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {motion} from "framer-motion";
import Layout from "../components/layout";
import playerStats from "../data/playerStats";

export default function Player() {
    const { query } = useRouter();
    const index = query.index ? query.index : 0

    return (
        <Layout colorScheme={`${playerStats[index].bgColor}`}>
            <div className="flex flex-col mx-auto max-w-3xl text-center py-8">
                <motion.p className="text-2xl text-gray-600" layoutId={`team-${playerStats[index].name}`}>
                    {playerStats[index].team}
                </motion.p>
                <motion.h1 className="text-5xl font-bold text-gray-800" layoutId={`name-${playerStats[index].name}`}>
                    {playerStats[index].name}
                </motion.h1>
                <div className="grid grid-cols-5 text-gray-600">
                    <motion.div className="col-span-1"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2}}>
                        <p className="flex flex-col">
                            <span className="font-bold text-2xl">{playerStats[index].totalGames}</span>
                            Games Played
                        </p>
                        <p className="flex flex-col">
                            <span className="font-bold text-2xl">{playerStats[index].avgPoints}</span>
                            Average Points
                        </p>
                        <p className="flex flex-col">
                            <span className="font-bold text-2xl">{playerStats[index].ttlRebounds}</span>
                            Total Rebounds
                        </p>
                        <p className="flex flex-col">
                            <span className="font-bold text-2xl">{playerStats[index].assists}</span>
                            Assists
                        </p>
                    </motion.div>
                    <div className="col-span-3">
                        <motion.figure className="col-span-2" layoutId={`image-${playerStats[index].name}`}>
                            <Image src={playerStats[index].image}
                                   layout="responsive"
                                   width={780}
                                   height={501}/>
                        </motion.figure>
                    </div>
                    <motion.div className="col-span-1"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2}}>
                        <p className="flex flex-col">
                            <span className="font-bold text-2xl">{playerStats[index].fgPct}</span>
                            FG%
                        </p>
                        <p className="flex flex-col">
                            <span className="font-bold text-2xl">{playerStats[index].fg3Pct}</span>
                            FG3%
                        </p>
                        <p className="flex flex-col">
                            <span className="font-bold text-2xl">{playerStats[index].ftPct}</span>
                            FT%
                        </p>
                        <p className="flex flex-col">
                            <span className="font-bold text-2xl">{playerStats[index].efgPct}</span>
                            eFG%
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    className="mx-auto mt-5 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    layoutId={`btn-${playerStats[index].name}`}
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.4}}>
                    <Link href="/" passHref>
                        Back to players
                    </Link>
                </motion.div>
            </div>
        </Layout>
    )
}
