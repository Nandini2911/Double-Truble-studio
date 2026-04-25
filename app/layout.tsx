// app/layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://dtsworld.in"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5J6M99HD');
            `,
          }}
        />
      </head>

      <body className="bg-dts-black text-dts-fog" suppressHydrationWarning>
        
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5J6M99HD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />

        <main className="min-h-screen">
          {children}
          <Footer />
        </main>

        {/* ✅ WhatsApp Floating Button */}
        <a
          href="https://wa.me/918000006021?text=Hi%20I%20want%20to%20start%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:scale-105 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
          >
            <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.89.754 5.59 2.062 7.93L0 32l7.86-2.052A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16.004C32 7.56 24.837.396 16 .396zm0 29.235a13.13 13.13 0 01-6.686-1.82l-.478-.284-4.663 1.218 1.246-4.546-.31-.466a13.09 13.09 0 01-2.017-7.039c0-7.23 5.88-13.11 13.108-13.11 3.498 0 6.786 1.36 9.258 3.832a13.04 13.04 0 013.832 9.278c-.004 7.23-5.884 13.11-13.11 13.11zm7.2-9.84c-.394-.198-2.33-1.15-2.69-1.282-.36-.132-.622-.198-.884.198-.262.394-1.016 1.282-1.246 1.544-.23.262-.46.296-.854.098-.394-.198-1.664-.613-3.17-1.954-1.17-1.044-1.96-2.33-2.19-2.724-.23-.394-.024-.606.174-.804.178-.177.394-.46.592-.69.198-.23.262-.394.394-.656.132-.262.066-.492-.033-.69-.098-.198-.884-2.134-1.212-2.922-.32-.768-.646-.664-.884-.676l-.754-.014c-.262 0-.69.098-1.05.492s-1.378 1.348-1.378 3.286 1.412 3.808 1.608 4.07c.198.262 2.776 4.238 6.726 5.938.94.406 1.672.648 2.244.83.942.3 1.8.258 2.478.156.756-.112 2.33-.952 2.66-1.872.328-.92.328-1.708.23-1.872-.098-.164-.36-.262-.754-.46z" />
          </svg>
        </a>

      </body>
    </html>
  );
}