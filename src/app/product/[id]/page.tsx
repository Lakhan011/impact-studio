export default function ProductPage() {
  return (
    <main className="page-shell pb-24 pt-8 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-[#FF2E2E]/15 bg-white p-3">
          <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80" alt="Product" className="h-[520px] w-full rounded-[1.5rem] object-cover" />
        </div>
        <div className="rounded-[2rem] border border-[#FF2E2E]/15 bg-[#fffaf5] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF2E2E]">Studio Pack</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em] text-[#111111]">Branding toolkit</h1>
          <div className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] text-[#FF2E2E]">$240</div>
          <button className="pill-button pill-button--primary mt-8 w-full">Add to cart</button>
          <p className="mt-6 text-lg leading-8 text-[#2d2d2d]">Includes a library of brand guidelines, templates, moodboards, and export-ready assets for your next launch.</p>
        </div>
      </div>
    </main>
  );
}
