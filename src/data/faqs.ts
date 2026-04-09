export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How does revenue-based funding work?",
    answer:
      "We purchase a portion of your future receivables \u2014 it\u2019s not a loan. You receive capital upfront, and repay through a small percentage of your daily or weekly revenue. It\u2019s designed for businesses that need fast, flexible funding without the collateral and credit requirements of a traditional bank.",
  },
  {
    question: "Will applying affect my credit score?",
    answer:
      "No. Our initial review uses a soft credit pull that has zero impact on your credit score. A hard pull only happens if you accept a funding offer and we proceed to finalization.",
  },
  {
    question: "How much can I qualify for?",
    answer:
      "Funding ranges from $5,000 to $250,000, based on your monthly revenue, cash flow patterns, and business health. Our AI underwriting determines the optimal amount \u2014 we won\u2019t over-fund you into a repayment burden.",
  },
  {
    question: "How quickly will I receive funds?",
    answer:
      "Most funding decisions are delivered within 24 hours of a complete application (bank connection + document upload). Once you accept terms, capital is typically deployed within 1\u20132 business days via ACH.",
  },
  {
    question: "What do I need to apply?",
    answer:
      "A business bank account (connected securely via Plaid), 6+ months of bank statements, and basic business information (legal name, EIN, industry, revenue). The application takes approximately 5 minutes.",
  },
  {
    question: "How does repayment work?",
    answer:
      "Repayment is collected through daily or weekly ACH debits calibrated to your revenue. If your business has a slow period, your payments decrease proportionally. You can track every payment in your Client Portal.",
  },
  {
    question: "Can I pay off early?",
    answer:
      "Yes. Early payoff is available and we\u2019ll work with you on a settlement discount. You can initiate a payoff request directly from your Client Portal.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We serve revenue-generating businesses across most industries \u2014 restaurants, retail, construction, healthcare practices, professional services, e-commerce, transportation, and more. If you process revenue through a bank account, you\u2019re likely eligible.",
  },
  {
    question: "How is my data protected?",
    answer:
      "Your financial data is encrypted with AES-256 at rest and TLS 1.2+ in transit. Bank credentials are never stored by us \u2014 Plaid handles authentication directly with your bank. All infrastructure providers (Supabase, Vercel, Plaid) maintain SOC 2 Type II certification.",
  },
  {
    question: "I\u2019ve been declined by other lenders. Can I still qualify?",
    answer:
      "Often, yes. Our AI underwriting evaluates your actual business cash flow \u2014 not just a FICO number. Many businesses declined by banks or traditional lenders qualify with Frontier because our model sees the revenue story that credit scores miss.",
  },
];
