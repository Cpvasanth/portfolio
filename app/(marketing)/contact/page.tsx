
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";

export default function ContactPage() {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center px-4 md:px-10 lg:pl-32 py-20">
            <div className="flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Side: context/copy (Inspired by image) */}
                <ContactHero />

                {/* Right Side: Form Card */}
                <ContactForm />
            </div>

            {/* FAQ Section */}
            <div className="mt-20 w-full">
                <FAQ />
            </div>
        </section >
    );
}
