import axios from "axios";
import { Layout } from "../../components/Layout";
import { UserCard } from "../../components/UserCard";

import { useRouter } from "next/router";

function UsersPage({ users = [] }) {
  const router = useRouter();

  const renderUsers = () => {
    if (users.length === 0) return <h1>No existen usuarios</h1>;
    return users.map((user) => (
      <UserCard key={user.id} user={user} />
    ));
  };

  return (
    <Layout>
      <div className="flex flex-wrap overflow-hidden">{renderUsers()}</div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: users } = await axios.get(
    "http://localhost:3001/api/users"
  );

    // if session pase else redirect to login
  return {
    props: {
      users:users.rows,
    },
  };
};

export default UsersPage;
