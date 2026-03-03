import './App.css';

function App() {
  return (
    <div>
      {/* Klavye kullanıcıları için navigasyonu atlama linki */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* Sayfanın birincil içeriği */}
      <main id="main-content">
        
        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            {/* Profil resmi için anlamlı alt metin */}
            <img src="https://picsum.photos/150" alt="İbrahim Halil Şahin profil fotoğrafı" />
            <figcaption>İbrahim Halil Şahin</figcaption>
          </figure>
          <p>Merhaba, ben web geliştirme öğrenen bir öğrenciyim.</p>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>E-Ticaret Sitesi</h3>
            <p>React ile yapılmış basit bir alışveriş sepeti uygulaması.</p>
          </article>
          <article>
            <h3>Blog Uygulamasi</h3>
            <p>Kullanıcıların yazı paylaşabildiği platform.</p>
          </article>
        </section>

        {/* İletişim Bölümü ve Doğrulamalı Form */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>
              
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2025 İbrahim Halil Şahin. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;