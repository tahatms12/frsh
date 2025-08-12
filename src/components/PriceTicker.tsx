import { useEffect } from 'react';
import { useStore } from '../lib/store';
import { fetchQuotes, loadCached } from '../lib/coingecko';
import { PORTFOLIO } from '../lib/ids';

export default function PriceTicker() {
  const { quotes, setQuotes, setSyncing } = useStore();
  useEffect(() => {
    const cached = loadCached();
    if (cached) setQuotes(cached);
    let t: any;
    const tick = async () => {
      try {
        setSyncing(true);
        const q = await fetchQuotes();
        setQuotes(q);
      } finally {
        setSyncing(false);
      }
    };
    tick();
    t = setInterval(tick, 120000);
    return () => clearInterval(t);
  }, [setQuotes, setSyncing]);

  return (
    <div aria-label="Live prices" className="overflow-hidden border-t border-b border-white/10">
      <div className="animate-marquee whitespace-nowrap py-2 will-change-transform">
        {PORTFOLIO.map(c => {
          const q = quotes[c.id];
          const ch = q?.change24h ?? 0;
          const sign = ch >= 0 ? '+' : '';
          return (
            <span key={c.id} className="mx-6 text-sm text-white/90">
              {c.symbol} ${q?.price?.toFixed(6) ?? '0.000000'} <span className={ch >= 0 ? 'text-emerald-400' : 'text-red-400'}>({sign}{ch.toFixed(2)}%)</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
