import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useStateContext } from "../lib/context";
import { NavStyles, NavItems } from "../styles/NavStyles";
import Cart from "./Cart";

export default function Navbar() {
  const { showCart, setShowCart } = useStateContext();
  return (
    <NavStyles>
      <Link href="/">Styled.</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  );
}
