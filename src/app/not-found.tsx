import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-5 py-24 text-center">
      <h1 className="font-display text-4xl text-brown-800">Page Not Found</h1>
      <p className="font-body text-brown-600">
        We couldn't find what you were looking for — it may have been moved, or the link may be incorrect.
      </p>
      <Link href="/" className="mt-2 rounded-full bg-brown-700 px-7 py-3 font-body text-sm font-semibold text-white hover:bg-brown-800">
        Back to Home
      </Link>
    </div>
  );
}
