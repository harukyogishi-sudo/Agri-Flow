import React, { useState } from "react";
import { AlertTriangle, Wheat, Warehouse, TrendingUp, Users, Compass, Coins, Receipt, PiggyBank, Percent, ShoppingBasket } from "lucide-react";

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
`;

const OBJECTIVES = [
  {
    id: "ventes",
    label: "Augmenter mes ventes",
    short: "Ventes",
    priority: ["ventes", "revenus", "clients", "debouches"],
  },
  {
    id: "pertes",
    label: "Réduire mes pertes",
    short: "Pertes",
    priority: ["alertes", "stock", "production", "pertes"],
  },
  {
    id: "rentabilite",
    label: "Suivre ma rentabilité",
    short: "Rentabilité",
    priority: ["revenus", "depenses", "benefice", "marge"],
  },
  {
    id: "debouches",
    label: "Trouver de nouveaux débouchés",
    short: "Débouchés",
    priority: ["debouches", "clients", "ventes", "revenus"],
  },
];

const CARDS = {
  revenus: { label: "Revenus", value: "12 450 €", sub: "ce mois-ci", icon: Coins, tint: "gold" },
  depenses: { label: "Dépenses", value: "4 200 €", sub: "ce mois-ci", icon: Receipt, tint: "moss" },
  benefice: { label: "Bénéfice estimé", value: "8 250 €", sub: "marge brute", icon: PiggyBank, tint: "gold" },
  marge: { label: "Marge", value: "66 %", sub: "stable vs mois dernier", icon: Percent, tint: "moss" },
  production: { label: "Production", value: "3,2 t", sub: "cette semaine", icon: Wheat, tint: "moss" },
  stock: { label: "Stock", value: "1,8 t", sub: "disponible", icon: Warehouse, tint: "moss" },
  pertes: { label: "Pertes", value: "180 kg", sub: "cette semaine", icon: AlertTriangle, tint: "rust" },
  ventes: { label: "Ventes", value: "24", sub: "commandes ce mois-ci", icon: ShoppingBasket, tint: "gold" },
  clients: { label: "Clients", value: "37", sub: "clients actifs", icon: Users, tint: "moss" },
  debouches: { label: "Débouchés", value: "3", sub: "marchés identifiés", icon: Compass, tint: "gold" },
  alertes: { label: "Alertes", value: "2", sub: "stock bas", icon: TrendingUp, tint: "rust" },
};

const ALL_CARD_IDS = Object.keys(CARDS);

const TINTS = {
  moss: { bg: "#46603A", soft: "#E4EADD" },
  gold: { bg: "#B98A1F", soft: "#F3E8CA" },
  rust: { bg: "#A8462E", soft: "#F1DCD4" },
};

export default function AgriFlowDemo() {
  const [activeId, setActiveId] = useState("pertes");
  const active = OBJECTIVES.find((o) => o.id === activeId);

  const priority = active.priority;
  const rest = ALL_CARD_IDS.filter((id) => !priority.includes(id));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ECE7D8",
        color: "#2B2A24",
        fontFamily: "'IBM Plex Sans', sans-serif",
        padding: "32px 16px 64px",
      }}
    >
      <style>{FONT_IMPORT}</style>

      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Fraunces', serif",
              fontSize: 22,
              fontWeight: 600,
              color: "#46603A",
            }}
          >
            <Wheat size={22} strokeWidth={2.2} />
            Agri Flow
          </div>
          <p style={{ margin: "6px 0 0", fontSize: 14, color: "#6B6555", maxWidth: 480 }}>
            Le tableau de bord change avec vous. Choisissez un objectif ci-dessous
            pour voir le dashboard se réorganiser.
          </p>
        </div>

        {/* Objective switcher — the signature interaction */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 32,
            padding: 6,
            background: "#DFD9C6",
            borderRadius: 14,
          }}
        >
          {OBJECTIVES.map((o) => {
            const isActive = o.id === activeId;
            return (
              <button
                key={o.id}
                onClick={() => setActiveId(o.id)}
                style={{
                  flex: "1 1 auto",
                  minWidth: 140,
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: isActive ? "#FFFFFF" : "#4A4638",
                  background: isActive ? "#46603A" : "transparent",
                  transition: "background 0.25s ease, color 0.25s ease",
                }}
              >
                {o.label}
              </button>
            );
          })}
        </div>

        {/* Priority cards */}
        <div style={{ marginBottom: 8, display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "#8A8370", textTransform: "uppercase" }}>
            Priorité pour « {active.short} »
          </span>
        </div>
        <div
          key={activeId}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
            marginBottom: 28,
          }}
        >
          {priority.map((id, i) => {
            const card = CARDS[id];
            const Icon = card.icon;
            const tint = TINTS[card.tint];
            return (
              <div
                key={id}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 16,
                  padding: "18px 18px 16px",
                  border: "1px solid #E2DCC9",
                  boxShadow: "0 1px 2px rgba(43,42,36,0.04)",
                  animation: "fadeUp 0.4s ease both",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 9,
                      background: tint.soft,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={16} color={tint.bg} strokeWidth={2.2} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11,
                      color: "#B7B09B",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <div style={{ marginTop: 14, fontSize: 13, color: "#6B6555" }}>{card.label}</div>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 26,
                    fontWeight: 500,
                    marginTop: 2,
                    color: "#2B2A24",
                  }}
                >
                  {card.value}
                </div>
                <div style={{ fontSize: 12, color: "#8A8370", marginTop: 2 }}>{card.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Secondary / muted cards */}
        <div style={{ marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "#8A8370", textTransform: "uppercase" }}>
            Aussi disponible
          </span>
        </div>
        <div
          key={activeId + "-rest"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 8,
          }}
        >
          {rest.map((id, i) => {
            const card = CARDS[id];
            const Icon = card.icon;
            return (
              <div
                key={id}
                style={{
                  background: "#F4F0E4",
                  borderRadius: 12,
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  animation: "fadeUp 0.35s ease both",
                  animationDelay: `${100 + i * 40}ms`,
                }}
              >
                <Icon size={14} color="#8A8370" strokeWidth={2} />
                <div>
                  <div style={{ fontSize: 12, color: "#6B6555" }}>{card.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#4A4638" }}>{card.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
