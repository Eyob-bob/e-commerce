import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/DetailsStyle";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";

const ProductDetails = () => {
  const router = useRouter();
  const { qty, setQty, increase, decrease, onAdd } = useStateContext();

  const slug = router.query.slug;

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug },
  });

  const { data, error, fetching } = results;

  if (error) return <p>Oh no.... {error.message}</p>;
  if (fetching) return <p>Loading...</p>;

  const { title, description, image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt="" />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>

        <Quantity>
          <span>Quantity</span>
          <button onClick={decrease}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button onClick={increase}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(data.products.data[0].attributes, qty);
            setQty(1);
          }}
        >
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
};

export default ProductDetails;
