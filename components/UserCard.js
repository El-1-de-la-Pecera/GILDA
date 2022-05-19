import Link from "next/link";

export function UserCard({ user }) {
  if (user.username == "Fernando") 
  return (
    
    <Link href={`/users/${user.id}`}>
      <a
        className="w-full overflow-hidden p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
        key={user.id}
      >
        <p className="font-bold text-gray-800 dark:text-gray-100 text-2xl">
          Nombre: {user.username} 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </p>
      </a>
    </Link>
  );
  
  else
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
