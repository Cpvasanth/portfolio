export default function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <style>{`
                html, body, body * {
                    cursor: auto !important;
                }
                a, button, [role="button"], select, .cursor-pointer {
                    cursor: pointer !important;
                }
                input, textarea {
                    cursor: text !important;
                }
            `}</style>
            {children}
        </>
    );
}
