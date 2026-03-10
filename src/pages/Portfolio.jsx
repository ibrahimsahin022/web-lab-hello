import Button from '../components/Button';
import Input from '../components/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/Card';
import { Mail, Briefcase, User, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

export default function Portfolio() {
    return (
        <div className="space-y-20 pb-16 animate-in fade-in duration-500">

            {/* 1. HAKKIMDA (HERO) */}
            <section id="hakkimda" className="pt-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <figure className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-info-300 blur-2xl opacity-40 dark:opacity-20 translate-y-4"></div>
                            <img
                                src="https://picsum.photos/300"
                                alt="İbrahim Halil Şahin profil fotoğrafı"
                                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl relative z-10 border-4 border-white dark:border-slate-800"
                            />
                        </figure>
                    </div>

                    <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                        <div>
                            <p className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm mb-2">Merhaba, Ben</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                                İbrahim Halil Şahin
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                                Web geliştirme alanında kendini geliştiren bir öğrenciyim. Modern web teknolojilerinin yanı sıra yazılım algoritmaları ve veri yapıları ile de yakından ilgileniyorum.
                                Estetik, kullanıcı dostu ve erişilebilir dijital deneyimler oluşturmaya odaklanıyorum.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                            <Button asChild className="rounded-full shadow-md">
                                <a href="#iletisim">
                                    <Mail className="w-5 h-5 mr-2" /> İletişime Geç
                                </a>
                            </Button>
                            <Button variant="secondary" className="rounded-full">
                                <Briefcase className="w-5 h-5 mr-2" /> Projeleri Gör
                            </Button>
                        </div>

                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                                Kullandığım Teknolojiler
                            </h3>
                            <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind v4', 'Git'].map(skill => (
                                    <li key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROJELERİM */}
            <section id="projeler" className="scroll-mt-24 space-y-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Projelerim</h2>
                    <p className="text-slate-600 dark:text-slate-400">Üzerinde çalıştığım ve geliştirdiğim bazı uygulamalar.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <Card variant="elevated" className="group flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src="https://via.placeholder.com/600x400/2563EB/ffffff?text=Bütçe+Takip" className="w-full h-full object-cover" alt="Bütçe Takip Sistemi Projesi" />
                        </div>
                        <CardHeader className="flex-1">
                            <CardTitle className="text-xl mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Yapay Zeka Destekli Bütçe Takip Sistemi</CardTitle>
                            <CardDescription className="text-base text-slate-600 dark:text-slate-300">
                                Bitirme projesi olarak geliştirdiğim, hem web hem de mobil platformlarla tam uyumlu çalışan akıllı kişisel bütçe yönetim ve takip uygulaması. Kullanıcı harcama alışkanlıklarını analiz eden AI asistanı barındırır.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-semibold rounded-full">React</span>
                                <span className="px-2.5 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-semibold rounded-full">TypeScript</span>
                                <span className="px-2.5 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-semibold rounded-full">Yapay Zeka</span>
                            </div>
                        </CardContent>
                        <div className="p-6 pt-0 mt-auto">
                            <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                                Projeyi İncele <ExternalLink className="ml-1 w-4 h-4" />
                            </a>
                        </div>
                    </Card>

                    <Card variant="elevated" className="group flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src="https://via.placeholder.com/600x400/16A34A/ffffff?text=Portföy" className="w-full h-full object-cover" alt="Portföy Projesi" />
                        </div>
                        <CardHeader className="flex-1">
                            <CardTitle className="text-xl mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Kişisel Portföy Web Sitesi</CardTitle>
                            <CardDescription className="text-base text-slate-600 dark:text-slate-300">
                                Şu an içinde bulunduğunuz, erişilebilirlik (a11y) kurallarına uygun, modern ve duyarlı (responsive) kişisel web sitem. Tailwind CSS v4 ile sıfırdan oluşturulmuş özel UI seti barındırır.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-semibold rounded-full">React</span>
                                <span className="px-2.5 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-semibold rounded-full">TailwindCSS</span>
                                <span className="px-2.5 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-semibold rounded-full">Vite</span>
                            </div>
                        </CardContent>
                        <div className="p-6 pt-0 mt-auto">
                            <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                                Github Reposu <ExternalLink className="ml-1 w-4 h-4" />
                            </a>
                        </div>
                    </Card>

                </div>
            </section>

            {/* 3. İLETİŞİM */}
            <section id="iletisim" className="scroll-mt-24">
                <Card variant="flat" className="border-0 shadow-none bg-slate-50 dark:bg-slate-900/50 p-2 md:p-8 rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">İletişime Geçin</h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Projeleriniz için işbirliği yapmak veya sadece bir merhaba demek isterseniz bana ulaşabilirsiniz.
                                    Aşağıdaki bilgileri kullanarak veya formu doldurarak mesajınızı iletebilirsiniz.
                                </p>
                            </div>

                            <ul className="space-y-4 pt-4">
                                <li className="flex items-center text-slate-700 dark:text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 text-primary-600 dark:text-primary-400">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium">530 937 6439</span>
                                </li>
                                <li className="flex items-center text-slate-700 dark:text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 text-primary-600 dark:text-primary-400">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium">ibrahimsahin022@gmail.com</span>
                                </li>
                                <li className="flex items-center text-slate-700 dark:text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 text-primary-600 dark:text-primary-400">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium">Türkiye</span>
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-3">
                            <Card variant="elevated" className="h-full border-0">
                                <CardContent className="p-6 sm:p-8">
                                    <form action="#" method="POST" noValidate className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <Input
                                                id="name"
                                                name="name"
                                                label="Ad Soyad"
                                                placeholder="Adınızı giriniz"
                                                required
                                            />
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                label="E-posta"
                                                placeholder="ornek@email.com"
                                                required
                                            />
                                        </div>

                                        <div className="w-full form-group">
                                            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Konu</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                required
                                                className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                                            >
                                                <option value="">-- Seçiniz --</option>
                                                <option value="is">İş Teklifi</option>
                                                <option value="soru">Soru</option>
                                                <option value="oneri">Öneri</option>
                                            </select>
                                        </div>

                                        <div className="w-full form-group">
                                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Mesajınız</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                required
                                                placeholder="Mesajınızı buraya yazabilirsiniz..."
                                                className="flex w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 resize-y"
                                            ></textarea>
                                        </div>

                                        <Button type="submit" className="w-full mt-2">
                                            <Send className="w-4 h-4 mr-2" /> Mesajı Gönder
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                </Card>
            </section>

        </div>
    );
}
