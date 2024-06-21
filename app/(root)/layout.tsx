import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

//Only the root layout can contain <html> and <body> tags.
