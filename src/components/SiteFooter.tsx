export function SiteFooter() {
  return (
    <footer className="bg-[#7a2b00] px-5 py-5 text-white/82 sm:px-8">
      <div className="mx-auto flex max-w-[1520px] flex-col gap-4 text-sm font-bold sm:flex-row sm:items-center sm:justify-between sm:text-base">
        <p>© 2026 Jakub Trnka</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="/cookies" className="transition-colors hover:text-white">
            Cookies
          </a>
          <a href="mailto:trnkakubo9@gmail.com" className="transition-colors hover:text-white">
            trnkakubo9@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
