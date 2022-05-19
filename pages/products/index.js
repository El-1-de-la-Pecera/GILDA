import axios from "axios";
import { Layout } from "../../components/Layout";
import { ProductCard } from "../../components/ProductCard";

import { useRouter } from "next/router";

function ProductsPage({ products = [] }) {
  const router = useRouter();

  const renderProducts = () => {
    if (products.length === 0) return <h1>No existen productos</h1>;
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <Layout>
      <div className="flex flex-wrap overflow-hidden">{renderProducts()}</div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3001/api/products"
  );

    // if session pase else redirect to login
  return {
    props: {
      products:products.rows,
    },
  };
};

export default ProductsPage;
