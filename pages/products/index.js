import axios from "axios";
import { Layout } from "../../components/Layout";
import { ProductCard } from "../../components/ProductCard";

import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

function ProductsPage({ products = [] }) {
  const { data: session, status } = useSession();
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
    "http://localhost:3000/api/products"
  );

  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  return {
    props: {
      session,
      products:products.rows,
    },
  };
};

export default ProductsPage;
