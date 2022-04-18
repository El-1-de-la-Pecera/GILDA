import axios from "axios";
import { Layout } from "../../components/Layout";
import { ProductCard } from "../../components/ProductCard";

function ProductsPage({ products = [] }) {
  const renderProducts = () => {
    if (products.length === 0) return <h1>No existen producos</h1>;
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <Layout>
      <div className="flex flex-wrap overflow-hidden">
        {renderProducts()}
      </div>
    </Layout>
  );
}

export default ProductsPage;

export const getServerSideProps = async () => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: {
      products,
    },
  };
};
