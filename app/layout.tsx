import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://premsaigajula.dev"),
  title: "Premsai Gajula | Zoho CRM Developer & Web Developer",
  description:
    "Portfolio of Premsai Gajula, a B.Sc Computer Science graduate and aspiring Zoho CRM Developer specializing in Zoho CRM, Deluge, CRM automation, web development, Python, APIs, and modern software solutions.",
  keywords: [
    "Premsai Gajula",
    "Zoho CRM Developer",
    "Zoho CRM Administrator",
    "Deluge Scripting",
    "Zoho Client Script",
    "ZDK",
    "CRM Automation",
    "Web Developer",
    "Python Developer",
    "Next.js",
    "React",
    "REST APIs",
  ],
  authors: [{ name: "Premsai Gajula", url: "https://premsaigajula.dev" }],
  creator: "Premsai Gajula",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://premsaigajula.dev",
    title: "Premsai Gajula | Zoho CRM Developer & Web Developer",
    description:
      "I build smart CRM solutions, automate business processes, and develop modern web applications using Zoho CRM, Deluge, JavaScript, Python, and modern web technologies.",
    siteName: "Premsai Gajula Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premsai Gajula | Zoho CRM Developer & Web Developer",
    description:
      "I build smart CRM solutions, automate business processes, and develop modern web applications using Zoho CRM, Deluge, JavaScript, Python, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Premsai Gajula",
    jobTitle: "Zoho CRM Developer",
    description:
      "I build smart CRM solutions, automate business processes, and develop modern web applications using Zoho CRM, Deluge, JavaScript, Python, and modern web technologies.",
    url: "https://premsaigajula.dev",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Computer Science Graduate",
    },
    knowsAbout: [
      "Zoho CRM",
      "Deluge Scripting",
      "CRM Workflows",
      "Zoho Blueprints",
      "JavaScript",
      "Python",
      "Web Development",
      "REST APIs",
      "MySQL",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0B1120] text-slate-100 font-sans antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
