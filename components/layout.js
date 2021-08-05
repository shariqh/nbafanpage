import {motion} from "framer-motion";

const Layout = ({children, colorScheme}) => {

    return (
        <motion.div className={`${colorScheme ? colorScheme : "bg-gray-100"} min-h-screen py-8`} layoutId="layout">
            {children}
        </motion.div>

    );
}

export default Layout;
