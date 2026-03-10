import Button from '../components/Button';
import Input from '../components/Input';
import Alert from '../components/Alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/Card';
import { User, Bell, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function UIKit() {
    return (
        <div className="space-y-12 pb-12 animate-in fade-in duration-500">
            <section>
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">UI Kit</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
                    Bu sayfa, projede kullanılan temel bileşenlerin (component) farklı varyasyonlarını ve durumlarını
                    sergilemek amacıyla hazırlanmıştır. Tüm bileşenler erişilebilirlik, karanlık mod ve duyarlı tasarım
                    kurallarına uygun olarak Tailwind CSS kullanılarak geliştirilmiştir.
                </p>
            </section>

            {/* 1. BUTTONS */}
            <section className="space-y-6">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                    <h3 className="text-2xl font-semibold">1. Buttons</h3>
                    <p className="text-sm text-slate-500 mt-1">Farklı renk varyasyonları ve durumları (En az 4 varyant).</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="success">Success Button</Button>
                    <Button variant="danger">Danger Button</Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center mt-4">
                    <Button size="sm">Small Size</Button>
                    <Button size="md">Medium Size</Button>
                    <Button size="lg">Large Size</Button>
                </div>

                <div className="flex gap-4 items-center mt-4">
                    <Button disabled>Disabled State</Button>
                    <Button isLoading>Loading State</Button>
                    <Button variant="primary">
                        <User size={18} className="mr-2" />
                        With Icon
                    </Button>
                </div>
            </section>

            {/* 2. ALERTS */}
            <section className="space-y-6">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                    <h3 className="text-2xl font-semibold">2. Alerts</h3>
                    <p className="text-sm text-slate-500 mt-1">Kullanıcı bildirimleri için 4 renk varyantı. `role="alert"` barındırır.</p>
                </div>

                <div className="flex flex-col space-y-4">
                    <Alert variant="info" title="Bilgi">
                        <Info className="w-4 h-4" />
                        Mevcut sistem güncellemesi başarıyla tamamlandı. Yenilikleri inceleyebilirsiniz.
                    </Alert>

                    <Alert variant="success" title="Başarılı">
                        <CheckCircle className="w-4 h-4" />
                        Form başarıyla kaydedildi! Profiliniz güncellendi.
                    </Alert>

                    <Alert variant="warning" title="Uyarı">
                        <AlertTriangle className="w-4 h-4" />
                        Lütfen formdaki eksik alanları doldurunuz, aksi takdirde işlem tamamlanamayacak.
                    </Alert>

                    <Alert variant="error" title="Hata">
                        <AlertTriangle className="w-4 h-4" />
                        Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.
                    </Alert>
                </div>
            </section>

            {/* 3. INPUTS */}
            <section className="space-y-6">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                    <h3 className="text-2xl font-semibold">3. Inputs</h3>
                    <p className="text-sm text-slate-500 mt-1">Form elemanları, hata (error) durumu ve yardımcı metin desteği.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <Input
                            id="default-input"
                            label="Standart Input"
                            placeholder="Adınızı girin"
                            helperText="E-posta adresiniz üçüncü şahıslarla paylaşılmayacaktır."
                        />

                        <Input
                            id="error-input"
                            label="Hata Durumu (Error State)"
                            placeholder="Şifre"
                            type="password"
                            error="Şifre en az 8 karakter uzunluğunda olmalıdır."
                        />
                    </div>

                    <div className="space-y-4">
                        <Input
                            id="disabled-input"
                            label="Devre Dışı (Disabled)"
                            placeholder="Bu alan değiştirilemez"
                            disabled
                        />

                        <Input
                            id="success-input"
                            label="Geçerli Değer (Filled)"
                            defaultValue="ibrahimsahin022@gmail.com"
                        />
                    </div>
                </div>
            </section>

            {/* 4. CARDS */}
            <section className="space-y-6">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                    <h3 className="text-2xl font-semibold">4. Cards</h3>
                    <p className="text-sm text-slate-500 mt-1">Kapsayıcı bileşenler (En az 2 stil varyantı: Elevated, Flat).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="elevated">
                        <CardHeader>
                            <CardTitle>Elevated Varyantı (Gölge)</CardTitle>
                            <CardDescription>Uygulama içinde en çok tercih edilen, belirgin yüzey</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 dark:text-slate-400">
                                Bu kart stili, dikkat çekmesi gereken ana içerikler ve eylemler için kullanılır. Gölgelendirme
                                ile derinlik algısı yaratılır.
                            </p>
                        </CardContent>
                        <div className="p-6 pt-0 mt-4 flex justify-end gap-3">
                            <Button variant="secondary" size="sm">İptal</Button>
                            <Button variant="primary" size="sm">Kaydet</Button>
                        </div>
                    </Card>

                    <Card variant="flat">
                        <CardHeader>
                            <CardTitle>Flat Varyantı (Düz Kenarlık)</CardTitle>
                            <CardDescription>Daha az belirgin, hiyerarşik olarak daha alt yüzey</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 dark:text-slate-400">
                                Bu stil genellikle liste öğeleri, ikincil bilgiler veya çoklu yan yana sıralanmış
                                yapılar için tercih edilir. Minimal, kenarlıklı tasarımdır.
                            </p>
                        </CardContent>
                        <div className="p-6 pt-0 mt-4 flex justify-start">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                                #Badge
                            </span>
                        </div>
                    </Card>
                </div>
            </section>

        </div>
    );
}
