import Head from "next/head";
import { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const EFFECTIVE_DATE = "March 24, 2026";
const APP_NAME       = "No Doomscrolling";
const CONTACT_EMAIL  = "contact@keyyard.xyz";

const C = {
  bg:      "#202832",
  pearl:   "#EAE0C8",
  pearl55: "rgba(234,224,200,0.55)",
  pearl35: "rgba(234,224,200,0.35)",
  pearl18: "rgba(234,224,200,0.18)",
  pearl08: "rgba(234,224,200,0.08)",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — No Doomscrolling</title>
        <meta name="description" content="Privacy policy for No Doomscrolling iOS app. We collect no personal data." />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={`${cormorant.variable} ${dmSans.variable}`} style={{ background: C.bg, minHeight: "100vh", color: C.pearl, fontFamily: "'DM Sans', sans-serif", WebkitFontSmoothing: "antialiased" as any }}>

        {/* Back */}
        <div style={{ padding: "32px 40px" }}>
          <a href="/no-doomscrolling" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            color: C.pearl35,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "color 0.2s",
          }}>
            ← No Doomscrolling
          </a>
        </div>

        <main style={{ maxWidth: 680, margin: "0 auto", padding: "0 32px 120px" }}>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: C.pearl,
            marginBottom: 10,
            lineHeight: 1,
          }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: C.pearl35, marginBottom: 64, fontWeight: 300, letterSpacing: "0.02em" }}>
            {APP_NAME} · Effective {EFFECTIVE_DATE}
          </p>

          <LegalSection title="Overview">
            <p>
              {APP_NAME} is designed with privacy as a core principle. The app does not collect,
              transmit, or share any personal data. Everything the app stores lives exclusively
              on your device.
            </p>
          </LegalSection>

          <LegalSection title="Data We Collect">
            <p>We do <strong style={{ color: C.pearl, fontWeight: 400 }}>not</strong> collect any of the following:</p>
            <ul>
              <li>Name, email address, or any identifying information</li>
              <li>Location data</li>
              <li>Browsing history or app usage patterns beyond what you explicitly configure</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Health or biometric data</li>
              <li>Contacts, calendar, or photos</li>
            </ul>
          </LegalSection>

          <LegalSection title="Data Stored Locally on Your Device">
            <p>
              {APP_NAME} stores the following data locally in an Apple App Group container,
              shared only between the app and its Screen Time extensions on your device:
            </p>
            <ul>
              <li><strong style={{ color: C.pearl, fontWeight: 400 }}>App selection</strong> — the apps/categories you choose to block, stored as opaque Screen Time tokens (not readable app names)</li>
              <li><strong style={{ color: C.pearl, fontWeight: 400 }}>Session state</strong> — whether Focus, Timer, or Guard mode is active</li>
              <li><strong style={{ color: C.pearl, fontWeight: 400 }}>Blocking threshold</strong> — the daily usage limit you set for Guard Mode</li>
              <li><strong style={{ color: C.pearl, fontWeight: 400 }}>Resist events</strong> — timestamps of moments you resisted opening a blocked app, used for the Willpower analytics chart</li>
            </ul>
            <p>
              This data never leaves your device. It is not synced to iCloud, shared with
              third parties, or sent to any server.
            </p>
          </LegalSection>

          <LegalSection title="Third-Party SDKs & Analytics">
            <p>
              {APP_NAME} contains <strong style={{ color: C.pearl, fontWeight: 400 }}>no third-party SDKs</strong>. It uses only Apple's
              native frameworks — SwiftUI, SwiftData, DeviceActivity, ManagedSettings,
              FamilyControls, and ActivityKit. There is no crash reporting, remote analytics,
              advertising, or external logging of any kind.
            </p>
          </LegalSection>

          <LegalSection title="Screen Time API">
            <p>
              The app uses Apple's Screen Time (FamilyControls) API to block apps on your
              behalf. The app selection you make through the Screen Time picker is stored as
              encrypted opaque tokens — neither the app nor the developer can read which
              specific apps you have selected.
            </p>
          </LegalSection>

          <LegalSection title="Children's Privacy">
            <p>
              {APP_NAME} is not directed at children under 13 and does not knowingly collect
              any personal information from children.
            </p>
          </LegalSection>

          <LegalSection title="Data Deletion">
            <p>
              All locally stored data is deleted when you uninstall the app. Because no data
              is transmitted to any server, there is no remote data to request deletion of.
            </p>
          </LegalSection>

          <LegalSection title="Changes to This Policy">
            <p>
              If this policy is updated, the new version will be published at this URL with
              a revised effective date. Continued use of the app after changes constitutes
              acceptance of the updated policy.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              Questions? Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: C.pearl55, textDecoration: "underline", textUnderlineOffset: 3 }}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </LegalSection>

        </main>
      </div>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${C.bg}; }
      `}</style>
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.68rem",
        fontWeight: 500,
        letterSpacing: "0.14em",
        textTransform: "uppercase" as const,
        color: "rgba(234,224,200,0.35)",
        marginBottom: 18,
      }}>
        {title}
      </h2>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 300,
        color: "rgba(234,224,200,0.65)",
        lineHeight: 1.8,
        display: "flex",
        flexDirection: "column" as const,
        gap: 14,
      }}>
        {children}
      </div>
    </section>
  );
}
