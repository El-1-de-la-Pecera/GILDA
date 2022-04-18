import Link from "next/link";

export  default function LogoutButton({ product }) {
    return (
      <Link href="/api/auth/logout">
        <a class="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
          Loguot
        </a>
      </Link>
    );
}