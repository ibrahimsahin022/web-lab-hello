import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>
      
      <header>
        <h1 className="site-title">İbrahim Halil Şahin</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        
        {/* ===== HAKKIMDA BÖLÜMÜ ===== */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img src="https://picsum.photos/150" alt="İbrahim Halil Şahin profil fotoğrafı" />
              <figcaption>İbrahim Halil Şahin</figcaption>
            </figure>
            
            <div>
              <p>Web geliştirme alanında kendini geliştiren bir öğrenciyim. Modern web teknolojilerinin yanı sıra yazılım algoritmaları ve veri yapıları ile de yakından ilgileniyorum.</p>
              <br/>
              <h3>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== PROJELERİM BÖLÜMÜ ===== */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <div className="project-grid">
            
            {/* Proje 1 */}
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Bütçe Takip Sistemi Projesi" />
              <h3>Yapay Zeka Destekli Bütçe Takip Sistemi</h3>
              <p>Bitirme projesi olarak geliştirdiğim, hem web hem de mobil platformlarla tam uyumlu çalışan akıllı kişisel bütçe yönetim ve takip uygulaması.</p>
              
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>Yapay Zeka</li>
              </ul>
            </article>

            {/* Proje 2 */}
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Portföy Projesi" />
              <h3>Kişisel Portföy Web Sitesi</h3>
              <p>Erişilebilirlik (a11y) kurallarına uygun, modern ve duyarlı (responsive) kişisel web sitem.</p>
              
              <ul className="skill-tags">
                <li>React</li>
                <li>CSS3</li>
                <li>Vite</li>
              </ul>
            </article>

          </div>
        </section>

        {/* ===== İLETİŞİM BÖLÜMÜ ===== */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <p>Telefon: 5309376439</p>
          
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
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
        <p>&copy; 2026 İbrahim Halil Şahin. Tüm hakları saklıdır.</p>
        <p>
          <a href="https://github.com/ibrahimsahin" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    </>
  )
}

export default App;