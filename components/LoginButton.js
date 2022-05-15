import Link from "next/link";

export default function LoginButton({ product }) {
  return (
    <Link href="/api/auth/login">
      <a className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
        Login
      </a>
    </Link>
  );
}
