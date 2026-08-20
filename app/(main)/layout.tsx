import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteHeader from "@/components/SiteHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader>
        <Header />
      </SiteHeader>
      {children}
      <Footer />
    </>
  );
}
