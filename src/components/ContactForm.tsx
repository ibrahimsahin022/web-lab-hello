import { useState, type FormEvent } from "react";
import Alert from "./Alert";
import Button from "./Button";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Status states
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        // Doğrulama (Validation)
        if (!name.trim()) {
            return setError("Lütfen isminizi giriniz.");
        }
        if (!email.includes("@")) {
            return setError("Lütfen geçerli bir e-posta adresi giriniz.");
        }
        if (message.trim().length < 10) {
            return setError("Mesajınız en az 10 karakterden oluşmalıdır.");
        }

        try {
            setLoading(true);
            // Sahte API çağrısı
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            setError("Bir hata oluştu, lütfen tekrar deneyiniz.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="max-w-xl mx-auto p-4 md:p-8 my-16 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-6 h-1 bg-green-500 rounded-full inline-block"></span>
                İletişime Geçin
            </h2>

            {error && <Alert variant="error" title="Hata" className="mb-4">{error}</Alert>}
            {success && <Alert variant="success" title="Başarılı" className="mb-4">Mesajınız başarıyla iletildi. Teşekkürler!</Alert>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        İsim Soyisim
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="John Doe"
                        className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        E-posta
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Mesaj
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Merhaba, projeleriniz hakkında görüşmek istiyorum..."
                        className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors resize-none"
                    />
                </div>

                <Button type="submit" variant="primary" className="mt-2" disabled={loading}>
                    {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
                </Button>
            </form>
        </section>
    );
}
