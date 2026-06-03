import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE_NAME}`,
  description: "Our privacy policy explains how we collect, use, and protect your personal information when you visit our website. Includes information about cookies and third-party advertising.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const lastUpdated = "June 3, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>1. Introduction</h2>
        <p>
          Welcome to {SITE_NAME}. We respect your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
          our website. Please read this privacy policy carefully. By accessing or using our website, you agree to
          the terms of this privacy policy.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain information about your device and usage patterns,
          including your IP address, browser type, operating system, referring URLs, pages viewed, time spent on pages,
          and other diagnostic data. This information is collected through standard server logs and analytics tools.
        </p>
        <h3>2.2 Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic,
          and serve personalized advertisements. Cookies are small text files stored on your device by your web browser.
          You can control cookie settings through your browser preferences. Please note that disabling cookies may affect
          the functionality of certain features on our website.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>To operate and maintain our website</li>
          <li>To improve our content, user experience, and website functionality</li>
          <li>To analyze usage patterns and trends to better understand our audience</li>
          <li>To display relevant advertisements through third-party advertising networks</li>
          <li>To detect, prevent, and address technical issues or security concerns</li>
          <li>To comply with applicable laws and regulations</li>
        </ul>

        <h2>4. Third-Party Advertising</h2>
        <h3>4.1 Google AdSense</h3>
        <p>
          We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads
          based on your prior visits to our website and other websites on the Internet. Google's use of advertising
          cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites
          on the Internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          . Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by
          visiting{" "}
          <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
            www.aboutads.info
          </a>
          .
        </p>
        <h3>4.2 Other Third-Party Services</h3>
        <p>
          We may also use other third-party services for analytics, content delivery, and website functionality.
          These services may collect information about your use of our website. We encourage you to review the
          privacy policies of these third-party service providers.
        </p>

        <h2>5. Data Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share aggregated,
          anonymized data that does not identify individual users for analytical or marketing purposes. We may
          disclose your information if required by law or in response to valid legal requests by public authorities.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information
          against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
          over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our website is not intended for children under the age of 13. We do not knowingly collect personal
          information from children under 13. If you are a parent or guardian and believe your child has provided
          us with personal information, please contact us, and we will take steps to delete such information.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul>
          <li>The right to access information we hold about you</li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your information</li>
          <li>The right to object to or restrict certain processing activities</li>
          <li>The right to data portability</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us through our Contact page.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other
          operational, legal, or regulatory reasons. We will post the updated policy on this page and update the
          "Last Updated" date. We encourage you to periodically review this page for the latest information on
          our privacy practices.
        </p>

        <h2>10. Cookie Consent</h2>
        <p>
          By using our website, you consent to the use of cookies and tracking technologies as described in this
          Privacy Policy. You can manage your cookie preferences through your browser settings at any time.
          For more information about cookies and how to manage them, visit{" "}
          <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
            www.allaboutcookies.org
          </a>
          .
        </p>

        <h2>11. Contact Information</h2>
        <p>
          If you have any questions about this Privacy Policy, our data practices, or would like to exercise
          your privacy rights, please contact us through our{" "}
          <a href="/contact">Contact page</a>.
        </p>
      </div>
    </div>
  );
}
