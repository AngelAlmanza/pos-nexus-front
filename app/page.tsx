import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link className="block" href="/admin">Go to Admin</Link>
    </div>
  );
}
