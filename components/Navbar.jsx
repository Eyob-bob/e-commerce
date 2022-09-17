import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useStateContext } from "../lib/context";
import { NavStyles, NavItems } from "../styles/NavStyles";
import Cart from "./Cart";
import User from "./User";
const { AnimatePresence, motion } = require("framer-motion");

export default function Navbar() {
  const { showCart, setShowCart, totalQtys } = useStateContext();

  return (
    <NavStyles>
      <Link href="/">Styled.</Link>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQtys > 0 && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
              {totalQtys}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
}
