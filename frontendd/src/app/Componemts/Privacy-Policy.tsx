import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy for Our B2B Meta Platform" />
      </Head>

      <main className="p-10 max-w-3xl m-auto">
        <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy sets out how we collect, use, and protect your data when you use our B2B Meta Platform and related services. We are committed to safeguarding your information and honoring your rights under applicable data protection legislation.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
        <p className="mb-4">
          Our platform is designed for businesses and enterprise clients. This Privacy Policy applies to all users, clients, and collaborators who interact with our platform, whether directly or through third-party services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Information We Collect</h2>
        <p className="mb-4">
          We may collect and process the following information about you and your business:
        </p>
        <ul className="list-inside list-decimal mb-4 ml-5">
          <li>Business name and registration details</li>
          <li>Contact details (phone number, email, physical address)</li>
          <li>Information related to your team members and collaborators</li>
          <li>Traffic data, usage patterns, and technical details about your visits</li>
          <li>Other information voluntarily provided by you</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to enable us to provide and improve our services. This includes:
        </p>
        <ul className="list-inside list-decimal mb-4 ml-5">
          <li>Creating and managing your account</li>
          <li>Processing payments and verifying transactions</li>
          <li>Customizing services to align with your business needs</li>
          <li>Maintaining the security and functionality of our platform</li>
          <li>Complying with applicable legal obligations</li>
          <li>Communicating with you about platform updates or policy tweaks</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. Disclosure of Information</h2>
        <p className="mb-4">
          We may share your information with third-party service providers who aid us in delivering and improving our platform (such as payments processors, data storage providers, and customer service providers). We do not sell or rent your data to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Security</h2>
        <p className="mb-4">
          We implement industry-leading technical and organizational measures to protect your data against unauthorized access, disclosure, or destruction. This includes data encryption, firewalls, and regularly updated vulnerability assessments.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
        <p className="mb-4">
          You have the following rights under applicable data protection legislation:
        </p>
        <ul className="list-inside list-decimal mb-4 ml-5">
          <li>The right to access your data</li>
          <li>The right to rectify inaccuracies</li>
          <li>The right to erase your data</li>
          <li>The right to restrict or object to processing</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">7. Cookies</h2>
        <p className="mb-4">
          We may use cookies and other technologies to collect data about your usage of our platform and to enable personalized services and an improved experience for your team.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Childrens Privacy</h2>
        <p className="mb-4">
          Our platform is not designed for children under the age of 16, and we do not knowingly collect information from children.
        </p>

        <h2 className="text-2xl font-semibold mt-6">9. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. All updated policies will be posted directly on this page. We encourage you to check back frequently to remain up to date.
        </p>

        <h2 className="text-2xl font-semibold mt-6">10. Contact</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or our data practices, please reach us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
        </p>

      </main>
    </>
  );
}
