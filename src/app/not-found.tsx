import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#FF2E2E]/15 bg-[#fffaf5] px-8 py-12 text-center md:px-16">
        <div className="absolute -left-10 top-8 text-[16rem] font-black uppercase tracking-[-0.08em] text-[#FF2E2E]/5">404</div>
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF2E2E]">404</p>
          <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-[#111111] md:text-7xl">Page not found</h1>
          <Link href="/homepage" className="pill-button pill-button--primary mt-8">
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
