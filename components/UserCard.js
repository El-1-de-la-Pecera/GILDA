import Link from "next/link";

export function UserCard({ user }) {
  return (
    <Link href={`/users/${user.id}`}>
      <a
        className="w-full overflow-hidden p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
        key={user.id}
      >
        <p className="font-bold text-gray-800 dark:text-gray-100 text-2xl">
          Nombre: {user.username} 
        </p>
      </a>
    </Link>
  );
}
