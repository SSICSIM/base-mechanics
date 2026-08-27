import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-background/95 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Base Mechanics
        </Link>
      </div>
    </header>
  );
}
