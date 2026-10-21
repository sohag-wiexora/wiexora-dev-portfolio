import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { Thesis } from "@/components/Thesis";
import { Capabilities } from "@/components/Capabilities";
import { Work } from "@/components/Work";
import { Architecture } from "@/components/Architecture";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Stack } from "@/components/Stack";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { ResumeSection } from "@/components/ResumeSection";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { SectionHead } from "@/components/SectionHead";
import { EditorialImage } from "@/components/EditorialImage";

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Thesis />
      <div className="wrap">
        <EditorialImage
          className="wide"
          src="/images/editorial/black-marble-corridor.webp"
          width={1000}
          height={667}
          sizes="(min-width: 1440px) 1344px, 100vw"
        />
      </div>

      <Section id="capabilities">
        <SectionHead index="02" kicker="The Three Axes" title="Build. Secure. Innovate." id="capabilities-title">
          Select an axis to see what each covers. Descriptions are capabilities I offer, not a claim that every item
          has already been delivered commercially.
        </SectionHead>
        <Capabilities />
      </Section>

      <Section id="work">
        <SectionHead index="03" kicker="Proof in Structure" title="Selected work" id="work-title">
          Real work only. Entries marked as placeholders are slots waiting for verified project details.
        </SectionHead>
        <Work />
      </Section>

      <Section id="engineering">
        <SectionHead index="04" kicker="Under the Surface" title="How a system is layered" id="engineering-title">
          Choose a layer for a plain-language explanation. Security is not one box at the end; it applies to every layer.
        </SectionHead>
        <EditorialImage
          className="banner"
          src="/images/editorial/gold-layered-planes.webp"
          width={1280}
          height={720}
          sizes="(min-width: 1440px) 1344px, 100vw"
        />
        <Architecture />
      </Section>

      <Section id="services">
        <SectionHead index="05" kicker="Clear Engagements" title="Services" id="services-title">
          Scope, deliverables and exclusions stated before you get in touch.
        </SectionHead>
        <Services />
      </Section>

      <Section id="process">
        <SectionHead index="06" kicker="The Diamond Protocol" title="How we work together" id="process-title" />
        <div className="process-layout">
          <EditorialImage
            src="/images/editorial/pyramid-prism-light-beam.webp"
            width={1024}
            height={1024}
            sizes="(min-width: 960px) 22rem, 100vw"
          />
          <Process />
        </div>
      </Section>

      <Section id="stack">
        <SectionHead index="07" kicker="The Stack" title="Technology, by role" id="stack-title">
          Only technologies used to build this site are listed. More will be added as they are verified.
        </SectionHead>
        <Stack />
      </Section>

      <Section id="pricing">
        <SectionHead index="08" kicker="The Investment" title="Transparent starting points" id="pricing-title" />
        <Pricing />
      </Section>

      <Section id="about">
        <SectionHead index="09" kicker="The Human Element" title="About" id="about-title" />
        <About />
      </Section>

      <Section id="resume">
        <SectionHead index="10" kicker="The Record" title="Résumé" id="resume-title" />
        <ResumeSection />
      </Section>

      <Section id="faq">
        <SectionHead index="11" kicker="Clear Answers" title="Questions" id="faq-title" />
        <Faq />
      </Section>

      <FinalCta />
    </>
  );
}
