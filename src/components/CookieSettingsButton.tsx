"use client";

export function CookieSettingsButton() {
  const openSettings = () => {
    window.dispatchEvent(new Event("jakub-trnka-open-cookie-settings"));
  };

  return (
    <button
      type="button"
      className="mt-8 bg-[var(--accent)] px-6 py-4 text-sm font-black uppercase text-white transition-transform hover:-translate-y-0.5"
      onClick={openSettings}
    >
      Zmeniť nastavenia cookies
    </button>
  );
}
