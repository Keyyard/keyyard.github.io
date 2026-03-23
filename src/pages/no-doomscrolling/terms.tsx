import Head from "next/head";
import { ReactNode } from "react";

const EFFECTIVE_DATE = "March 24, 2026";
const APP_NAME       = "No Doomscrolling";
const DEVELOPER      = "Keyyard";
const CONTACT_EMAIL  = "contact@keyyard.xyz";

const C = {
  bg:      "#202832",
  pearl:   "#EAE0C8",
  pearl55: "rgba(234,224,200,0.55)",
  pearl35: "rgba(234,224,200,0.35)",
  pearl18: "rgba(234,224,200,0.18)",
  pearl08: "rgba(234,224,200,0.08)",
};

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions — No Doomscrolling</title>
        <meta name="description" content="Terms and conditions for No Doomscrolling iOS app." />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={{ background: C.bg, minHeight: "100vh", color: C.pearl, fontFamily: "'DM Sans', sans-serif", WebkitFontSmoothing: "antialiased" as any }}>

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
            Terms & Conditions
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: C.pearl35, marginBottom: 64, fontWeight: 300, letterSpacing: "0.02em" }}>
            {APP_NAME} · Effective {EFFECTIVE_DATE}
          </p>

          <LegalSection title="Agreement">
            <p>
              By downloading or using {APP_NAME} ("the App"), you agree to these Terms &
              Conditions. If you do not agree, do not use the App. These terms apply in
              addition to Apple's standard{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.pearl55, textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                End User License Agreement (EULA)
              </a>
              , which governs your license to use the App.
            </p>
          </LegalSection>

          <LegalSection title="License">
            <p>
              {DEVELOPER} grants you a personal, non-exclusive, non-transferable license to
              use the App on Apple devices you own or control, subject to the App Store Terms
              of Service. You may not copy, modify, distribute, sell, or reverse-engineer
              any part of the App.
            </p>
          </LegalSection>

          <LegalSection title="Permitted Use">
            <p>The App is provided for personal productivity and digital wellness purposes only. You agree not to:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column" as const, gap: 8 }}>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to circumvent or exploit the App's Screen Time blocking mechanisms</li>
              <li>Use the App in any way that violates Apple's App Store guidelines or Screen Time API terms</li>
            </ul>
          </LegalSection>

          <LegalSection title="Screen Time & FamilyControls">
            <p>
              The App uses Apple's Screen Time (FamilyControls) API to block apps on your
              device. You must grant Screen Time permission for the core blocking features to
              work. Revoking this permission will disable blocking functionality. The
              developer is not responsible for any apps that remain accessible due to
              permission changes or iOS system updates.
            </p>
          </LegalSection>

          <LegalSection title="No Warranty">
            <p>
              The App is provided "as is" without warranty of any kind, express or implied.{" "}
              {DEVELOPER} does not warrant that the App will be uninterrupted, error-free, or
              effective in blocking all distracting content. Blocking effectiveness depends
              on Apple's Screen Time implementation and may vary across iOS versions.
            </p>
          </LegalSection>

          <LegalSection title="Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, {DEVELOPER} shall not be
              liable for any indirect, incidental, special, or consequential damages arising
              from your use of or inability to use the App, including but not limited to
              productivity loss, data loss, or device damage.
            </p>
          </LegalSection>

          <LegalSection title="Subscriptions & Purchases">
            <p>
              Any in-app purchases or subscriptions are processed by Apple and governed by
              Apple's payment terms. Refund requests must be submitted directly to Apple.
              Prices may vary by region and are displayed in your local currency at the time
              of purchase.
            </p>
          </LegalSection>

          <LegalSection title="Updates & Availability">
            <p>
              {DEVELOPER} may update, modify, or discontinue the App at any time without
              notice. Continued use of the App after an update constitutes acceptance of any
              revised terms.
            </p>
          </LegalSection>

          <LegalSection title="Governing Law">
            <p>
              These terms are governed by the laws of the jurisdiction in which{" "}
              {DEVELOPER} operates, without regard to conflict of law principles.
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
