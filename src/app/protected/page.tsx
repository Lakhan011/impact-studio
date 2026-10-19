export default function ProtectedPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="w-full max-w-md rounded-[2rem] border border-[#FF2E2E]/15 bg-[#fffaf5] p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#FF2E2E] text-3xl text-[#FF2E2E]">🔒</div>
        <h1 className="mt-6 text-3xl font-black uppercase tracking-[-0.06em] text-[#111111]">Protected</h1>
        <input className="mt-6 w-full rounded-2xl border border-[#FF2E2E]/20 bg-white px-4 py-3 text-base text-[#111111] outline-none" placeholder="Enter password" />
        <button className="pill-button pill-button--primary mt-6 w-full">Submit</button>
      </div>
    </main>
  );
}
