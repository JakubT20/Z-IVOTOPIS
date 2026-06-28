"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Settings2, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";

const CONSENT_KEY = "jakub-trnka-cookie-consent";
const SERVER_SNAPSHOT = "__server__";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

const subscribeToConsent = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("jakub-trnka-cookie-consent-updated", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("jakub-trnka-cookie-consent-updated", callback);
  };
};

const getConsentSnapshot = () => window.localStorage.getItem(CONSENT_KEY);

const getServerConsentSnapshot = () => SERVER_SNAPSHOT;

const parseConsent = (value: string | null) => {
  if (!value || value === SERVER_SNAPSHOT) {
    return null;
  }

  try {
    return JSON.parse(value) as CookiePreferences;
  } catch {
    return null;
  }
};

export function CookieConsentBanner() {
  const storedConsent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerConsentSnapshot);
  const savedPreferences = parseConsent(storedConsent);
  const hasHydrated = storedConsent !== SERVER_SNAPSHOT;
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const isVisible = isManuallyOpen || (hasHydrated && !savedPreferences);

  useEffect(() => {
    const openSettings = () => {
      setAnalytics(Boolean(savedPreferences?.analytics));
      setIsManuallyOpen(true);
      setShowSettings(true);
    };

    window.addEventListener("jakub-trnka-open-cookie-settings", openSettings);

    return () => window.removeEventListener("jakub-trnka-open-cookie-settings", openSettings);
  }, [savedPreferences?.analytics]);

  const savePreferences = (analyticsEnabled: boolean) => {
    const preferences: CookiePreferences = {
      necessary: true,
      analytics: analyticsEnabled,
      updatedAt: new Date().toISOString()
    };

    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(preferences));
    window.dispatchEvent(new Event("jakub-trnka-cookie-consent-updated"));
    setAnalytics(analyticsEnabled);
    setIsManuallyOpen(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto max-w-[1040px] border border-white/12 bg-black/92 p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-[var(--accent)]">Cookies</p>
                <h2 className="mt-2 text-2xl font-black uppercase leading-tight">Nastavenie cookies</h2>
              </div>
              <button
                type="button"
                aria-label="Zavrieť cookie okno"
                className="grid h-10 w-10 shrink-0 place-items-center border border-white/14 text-white transition-colors hover:bg-white hover:text-black"
                onClick={() => savePreferences(false)}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 max-w-3xl text-sm font-semibold leading-6 text-white/68">
              Tento web používa nevyhnutné technické uloženie pre zapamätanie voľby cookies. Analytické cookies sú voliteľné a
              zapnú sa len po tvojom súhlase.
            </p>

            {showSettings ? (
              <div className="mt-5 grid gap-3">
                <div className="border border-white/12 bg-white/[0.045] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-black uppercase">Nevyhnutné</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-white/60">
                        Potrebné pre uloženie tvojej voľby cookies.
                      </p>
                    </div>
                    <span className="text-xs font-black uppercase text-white/46">Vždy aktívne</span>
                  </div>
                </div>

                <label className="flex cursor-pointer items-center justify-between gap-4 border border-white/12 bg-white/[0.045] p-4">
                  <span>
                    <span className="block font-black uppercase">Analytické</span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-white/60">
                      Pomáhajú pochopiť návštevnosť webu, ak sa neskôr pridá analytika.
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(event) => setAnalytics(event.target.checked)}
                    className="h-5 w-5 accent-[var(--accent)]"
                  />
                </label>
              </div>
            ) : null}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                className="bg-[var(--accent)] px-5 py-3 text-sm font-black uppercase text-white transition-transform hover:-translate-y-0.5"
                onClick={() => savePreferences(true)}
              >
                Prijať všetko
              </button>
              <button
                type="button"
                className="border border-white/18 px-5 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-white hover:text-black"
                onClick={() => savePreferences(false)}
              >
                Odmietnuť voliteľné
              </button>
              {showSettings ? (
                <button
                  type="button"
                  className="border border-white/18 px-5 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-white/10"
                  onClick={() => savePreferences(analytics)}
                >
                  Uložiť nastavenia
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 border border-white/18 px-5 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-white/10"
                  onClick={() => setShowSettings(true)}
                >
                  <Settings2 aria-hidden="true" className="h-4 w-4" />
                  Nastavenia
                </button>
              )}
              <a
                href="/cookies"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-black uppercase text-white/62 transition-colors hover:text-white"
              >
                Viac o cookies
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
