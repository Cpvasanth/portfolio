import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import { ScrollThemeProvider } from "@/components/ScrollThemeContext";
import ScrollThemeWrapper from "@/components/ScrollThemeWrapper";
import CustomCursor from "@/components/CustomCursor";

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <CustomCursor />
            <ScrollThemeProvider>
                <ScrollThemeWrapper>
                    {/* Left Sidebar (Desktop) */}
                    <Sidebar />

                    {/* Main Content */}
                    <main className="flex flex-col w-full min-h-screen">
                        {children}
                    </main>

                    {/* Right Sidebar (Desktop) */}
                    <RightSidebar />
                </ScrollThemeWrapper>

                {/* Mobile Navigation */}
                <MobileNav />
            </ScrollThemeProvider>
        </>
    );
}
