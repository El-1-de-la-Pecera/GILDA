import axios from "axios";
import { Discount } from "../components/Discount";
import { Layout } from "../components/Layout";


function NewPage() {
  return (
    <Layout>
      <div className="h-5/6 grid place-items-center">
        <Discount />
      </div>
    </Layout>
  );
}
export default NewPage;

export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3001/api/products");
  
  const { data: products } = await axios.get(
    "http://localhost:3001/api/products"
  );

  return {
    props: {
      products: res.data,
    },
  };
};
