import React, { useState } from 'react';

/**
 * SeoFaq — accordion FAQ for SEO landing pages.
 * Props: items = [{ q: string, a: string }]
 */
const SeoFaq = ({ items }) => {
    const [open, setOpen] = useState(null);
    return (
        <div className="seo-faq-list">
            {items.map((item, i) => (
                <div key={i} className="seo-faq-item">
                    <button
                        className={`seo-faq-q${open === i ? ' open' : ''}`}
                        onClick={() => setOpen(open === i ? null : i)}
                        aria-expanded={open === i}
                    >
                        <span>{item.q}</span>
                        <span className="faq-arrow">▼</span>
                    </button>
                    {open === i && <div className="seo-faq-a">{item.a}</div>}
                </div>
            ))}
        </div>
    );
};

export default SeoFaq;
