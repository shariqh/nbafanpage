import playerStats from "../data/playerStats.json";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PlayerBanner = ({playerData, index}) => {
    return (
        <div className={`${playerData.bgColor} pt-2`}>
            <div className="max-w-6xl mx-auto grid grid-cols-4">
                <motion.figure className="col-span-2" layoutId={`image-${playerData.name}`}>
                    <Image src={playerData.image}
                           layout="responsive"
                           width={780}
                           height={501}/>
                </motion.figure>
                <div className="col-span-2">
                    <motion.figure className="w-36"
                                   initial={{opacity: 0}}
                                   animate={{opacity: 1}}
                                   transition={{delay: 0.2}}
                    >
                        <Image src={playerData.teamLogo}
                               layout="responsive"
                               width={248}
                               height={258}
                        />
                    </motion.figure>
                    <motion.p className="text-2xl text-gray-600" layoutId={`team-${playerData.name}`}
                              initial={{opacity: 0}}
                              animate={{opacity: 1}}
                              transition={{delay: 0.2}}
                    >
                        {playerData.team}
                    </motion.p>
                    <motion.h1 className="text-5xl font-bold text-gray-800" layoutId={`name-${playerData.name}`}
                               initial={{scale: 0.8, opacity: 0}}
                               animate={{scale: 1, opacity: 1}}
                    >
                        {playerData.name}
                    </motion.h1>
                    <div className="mt-12">
                        <motion.div
                            className="inline bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" layoutId={`btn-${playerData.name}`}
                            initial={{y: -50, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.4}}>
                            <Link href={`/player?index=${index}`} passHref>
                                Player Stats
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerBanner;
