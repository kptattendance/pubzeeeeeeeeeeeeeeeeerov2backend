"use client";

import { useState } from "react";
import MenuHero from "../components/menu/MenuHero";
import MenuTabs from "../components/menu/MenuTabs";
import SoupsSalads from "../components/menu/SoupsSalads";
import StartersSection from "../components/menu/StartersSection";
import MainCourseSection from "../components/menu/MainCourseSection";
import PizzaSection from "../components/menu/PizzaSection";
import DessertSection from "../components/menu/DessertSection";
import SignatureSection from "../components/menu/SignatureSection";
import MenuFilter from "../components/menu/MenuFilter";
import { useEffect } from "react";
import MenuSearch from "../components/menu/MenuSearch";

export default function MenuPage() {
  const [active, setActive] = useState("Soups");

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const sections = ["soups", "starters", "main", "pizza", "desserts"];

    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(
              id === "main"
                ? "Main Course"
                : id.charAt(0).toUpperCase() + id.slice(1),
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionMap = {
      soups: "Soups / Salads",
      starters: "Starters",
      main: "Main Course",
      pizza: "Pizza",
      desserts: "Desserts",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(sectionMap[id]);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // 👈 KEY MAGIC
        threshold: 0,
      },
    );

    const sections = Object.keys(sectionMap);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <MenuHero />
      <SignatureSection />
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <MenuSearch
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          active={active}
          setActive={setActive}
        />
      </div>

      {/* CONTENT */}
      <div className="pt-10 space-y-16">
        <div id="soups">
          <SoupsSalads filter={filter} search={search} />
        </div>

        <div id="starters">
          <StartersSection filter={filter} search={search} />
        </div>

        <div id="main">
          <MainCourseSection filter={filter} search={search} />
        </div>

        <div id="pizza">
          <PizzaSection filter={filter} search={search} />
        </div>

        <div id="desserts">
          <DessertSection filter={filter} search={search} />
        </div>
      </div>
    </main>
  );
}
