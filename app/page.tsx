import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl">Popular Compagnions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Nura the Brainy Exporer"
          topic="Test Test"
          subject="science"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="124"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="maths"
          duration={45}
          color="#FFDA6E"
        />
        <CompanionCard
          id="125"
          name="Verba the Vocabulary Builder"
          topic="Test Test"
          subject="language"
          duration={45}
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
