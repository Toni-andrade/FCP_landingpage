"use client";

import { useState } from "react";
import { useInView } from "@/lib/useInView";
import {
  LayoutDashboard,
  Landmark,
  FileText,
  Bell,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TabData {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
  bullets: string[];
}

const tabs: TabData[] = [
  {
    id: "dashboard",
    label: "Dashboard & Payments",
    icon: LayoutDashboard,
    description:
      "Track your funding balance, view upcoming payments, and see exactly where you stand \u2014 in real time. No surprises. No phone calls required. Your payment schedule adjusts to your actual revenue.",
    bullets: [
      "Real-time balance and payment tracking",
      "Daily/weekly ACH payment history",
      "Deal status visibility (active, paused, completed)",
      "Payment schedule with projected completion date",
    ],
  },
  {
    id: "bank",
    label: "Bank Connection",
    icon: Landmark,
    description:
      "Securely link your business bank account once. We monitor your balances and cash flow daily \u2014 not to spy, but to protect you. If your coverage drops, we flag it before it becomes a problem.",
    bullets: [
      "Plaid-secured bank connection (AES-256 encrypted)",
      "Daily balance monitoring",
      "5-factor risk assessment (coverage, NSF, trend, late payments, negative days)",
      "Disconnect at any time \u2014 you\u2019re always in control",
    ],
  },
  {
    id: "documents",
    label: "Documents & Requests",
    icon: FileText,
    description:
      "Upload tax returns, bank statements, and business documents in one secure place. Request additional funding, payment pauses, or early payoffs directly through your portal.",
    bullets: [
      "13 document categories with secure upload",
      "Request new funding or payment modifications",
      "Track request status in real time",
      "Complete audit trail of all portal activity",
    ],
  },
  {
    id: "alerts",
    label: "Alerts & Notifications",
    icon: Bell,
    description:
      "We keep you informed \u2014 not overwhelmed. Email and SMS alerts for what matters: payment confirmations, balance changes, and risk escalations.",
    bullets: [
      "Payment confirmation notifications",
      "Low balance early warnings",
      "Document request alerts",
      "Risk status change notifications",
    ],
  },
];

function DashboardMockup({ activeTab }: { activeTab: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
      {activeTab === "dashboard" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-white/10" />
            <div className="h-6 w-20 rounded-full bg-success/20 flex items-center justify-center">
              <span className="text-[10px] font-bold text-success">ACTIVE</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/5 p-4 border border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-soft/60">Balance</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-2xl text-white">$87,450</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 border border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-soft/60">Next Payment</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-2xl text-white">$485</p>
            </div>
          </div>
          <div className="space-y-2">
            {[75, 60, 85, 45, 70].map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent/60" />
                <div className="h-2 rounded bg-white/10 flex-1" style={{ maxWidth: `${w}%` }} />
                <div className="h-2 w-12 rounded bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === "bank" && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Landmark className="size-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Business Checking ****4821</p>
              <p className="text-xs text-soft/60">Connected via Plaid</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Coverage", "NSF Risk", "Trend"].map((label) => (
              <div key={label} className="rounded-lg bg-white/5 p-3 border border-white/5 text-center">
                <p className="text-[10px] uppercase tracking-widest text-soft/60">{label}</p>
                <div className="mt-1 mx-auto h-8 w-8 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-success">&#10003;</span>
                </div>
              </div>
            ))}
          </div>
          <div className="h-20 rounded-lg bg-white/5 border border-white/5 p-3">
            <p className="text-[10px] uppercase tracking-widest text-soft/60 mb-2">Daily Balance (30d)</p>
            <svg viewBox="0 0 200 40" className="w-full h-8" aria-hidden="true">
              <polyline
                points="0,30 20,25 40,28 60,20 80,22 100,15 120,18 140,12 160,10 180,14 200,8"
                fill="none"
                stroke="#4B8BF5"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      )}
      {activeTab === "documents" && (
        <div className="space-y-3">
          {[
            { name: "Q4 Bank Statements", status: "Uploaded", color: "text-success" },
            { name: "2025 Tax Return", status: "Uploaded", color: "text-success" },
            { name: "Business License", status: "Requested", color: "text-accent" },
            { name: "Voided Check", status: "Pending", color: "text-soft/60" },
          ].map((doc) => (
            <div key={doc.name} className="flex items-center justify-between rounded-lg bg-white/5 border border-white/5 p-3">
              <div className="flex items-center gap-3">
                <FileText className="size-4 text-soft/40" />
                <span className="text-sm text-white">{doc.name}</span>
              </div>
              <span className={`text-xs font-medium ${doc.color}`}>{doc.status}</span>
            </div>
          ))}
        </div>
      )}
      {activeTab === "alerts" && (
        <div className="space-y-3">
          {[
            { msg: "Payment of $485.00 confirmed", time: "Today, 9:15 AM", dot: "bg-success" },
            { msg: "Balance coverage above threshold", time: "Yesterday", dot: "bg-success" },
            { msg: "New document request: Voided Check", time: "Mar 24", dot: "bg-accent" },
            { msg: "Weekly payment processed", time: "Mar 21", dot: "bg-success" },
          ].map((alert) => (
            <div key={alert.msg} className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/5 p-3">
              <div className={`mt-1.5 h-2 w-2 rounded-full ${alert.dot} shrink-0`} />
              <div>
                <p className="text-sm text-white">{alert.msg}</p>
                <p className="text-xs text-soft/60 mt-0.5">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PortalShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { ref, isVisible } = useInView();

  const active = tabs.find((t) => t.id === activeTab)!;
  const ActiveIcon = active.icon;

  return (
    <section id="your-portal" className="bg-dark">
      <div className="h-1 w-full bg-accent" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className={`text-center fade-up ${isVisible ? "visible" : ""}`}>
          <p className="section-label-light">Your Portal</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white">
            More Than a Lender. Your <em className="italic text-soft">Financial</em> Partner.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-relaxed text-soft">
            Every Frontier client gets a dedicated portal to manage their funding,
            monitor their business health, and stay in control.
          </p>
        </div>

        {/* Tabs */}
        <div className={`mt-12 fade-up ${isVisible ? "visible" : ""}`}>
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Portal features"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-white shadow-md"
                      : "bg-white/5 text-soft hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="size-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {/* Left — text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                  <ActiveIcon className="size-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">{active.label}</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-soft">
                {active.description}
              </p>
              <ul className="mt-5 space-y-3">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed text-soft/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — mockup */}
            <DashboardMockup activeTab={activeTab} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://app.frontiercapital.us"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/5"
          >
            Access Your Portal
          </a>
        </div>
      </div>
    </section>
  );
}
