export const metadata = {
  title: "Next.js SEO Optimizer",
  description: "SEO Optimizer App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
