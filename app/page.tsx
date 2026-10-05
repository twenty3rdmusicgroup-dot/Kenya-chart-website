"use client"

import { useState } from "react"

const products = [
  { name: "Twenty3rd Signature Tee", price: "KSh 2,500", tag: "BESTSELLER" },
  { name: "Twenty3rd Music Group Hoodie", price: "KSh 4,500", tag: "NEW" },
  { name: "Twenty3rd Cap", price: "KSh 1,800", tag: "LIMITED" },
]

const tracks = [
  { title: "If I Was in Love", artist: "RADANIGANI DRE", type: "Single" },
  { title: "Twenty3rd Freestyle", artist: "Twenty3rd Studios", type: "Featured" },
  { title: "Coming Soon", artist: "Twenty3rd Music Group", type: "New Release" },
]

const releases = [
  { title: "IF I WAS IN LOVE", artist: "RADANIGANI DRE", type: "SINGLE", year: "2026" },
  { title: "TWENTY3RD SESSIONS VOL. 1", artist: "TWENTY3RD MUSIC GROUP", type: "EP", year: "2026" },
  { title: "NAIROBI AFTER DARK", artist: "TWENTY3RD ARTISTS", type: "ALBUM", year: "2026" },
]

const artists = ["RADANIGANI DRE", "TWENTY3RD STUDIOS", "FEATURED ARTISTS"]

export default function Home() {
  const [playing, setPlaying] = useState<string | null>(null)
  const [cart, setCart] = useState<string[]>([])

  return (
    <main className="site">
      <header className="header">
        <a className="logo" href="#home">TWENTY3RD<span>MUSIC GROUP</span></a>
        <nav>
          <a href="#music">Music</a>
          <a href="#releases">Albums & EPs</a>
          <a href="#shop">Shop</a>
          <a href="#artists">Artists</a>
          <a href="#videos">Videos</a>
          <a href="#about">About</a>
        </nav>
        <a className="cart" href="#shop">BAG ({cart.length})</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="kicker">TWENTY3RD MUSIC GROUP · KENYA</p>
          <h1>THE SOUND<br /><i>OF NOW.</i></h1>
          <p className="lead">Music, culture, artists and experiences from a new generation of African creativity.</p>
          <div className="actions">
            <a className="button dark" href="#music">Listen now</a>
            <a className="button light" href="#shop">Shop Twenty3rd</a>
          </div>
        </div>
        <div className="hero-art"><div className="art-mark">23</div><span>EST. 2026 · NAIROBI</span></div>
      </section>

      <section className="social-strip">
        <span>FOLLOW TWENTY3RD</span>
        <a href="#">Instagram</a><a href="#">TikTok</a><a href="#">YouTube</a><a href="#">X</a><a href="#">Facebook</a>
      </section>

      <section className="section" id="music">
        <div className="section-head"><div><p className="kicker">Listen</p><h2>Music</h2></div><a href="#releases">View all releases →</a></div>
        <div className="music-list">
          {tracks.map((track, i) => (
            <div className="track" key={track.title}>
              <span className="track-no">0{i + 1}</span><div className="play-cover">{i === 0 ? "23" : "♪"}</div>
              <div className="track-info"><b>{track.title}</b><span>{track.artist} · {track.type}</span></div>
              <button onClick={() => setPlaying(playing === track.title ? null : track.title)}>{playing === track.title ? "PAUSE" : "PLAY"}</button>
              <span className="duration">03:24</span>
            </div>
          ))}
        </div>
        <div className="platforms"><span>LISTEN ON</span><a href="#">Spotify</a><a href="#">Apple Music</a><a href="#">YouTube Music</a><a href="#">Audiomack</a></div>
      </section>

      <section className="release-section" id="releases">
        <div className="section-head"><div><p className="kicker">Discography</p><h2>Albums & EPs</h2></div><a href="#">Explore discography →</a></div>
        <div className="release-grid">
          {releases.map((r, i) => <article className="release" key={r.title}><div className={"release-art art-" + i}><strong>{i === 0 ? "IF I WAS<br/>IN LOVE" : i === 1 ? "23<br/>SESSIONS" : "NAIROBI<br/>AFTER DARK"}</strong></div><p>{r.type} · {r.year}</p><h3>{r.title}</h3><span>{r.artist}</span></article>)}
        </div>
      </section>

      <section className="section" id="shop">
        <div className="section-head"><div><p className="kicker">Official merchandise</p><h2>Shop Twenty3rd</h2></div><a href="#">View shop →</a></div>
        <div className="shop-grid">
          {products.map(p => <article className="product" key={p.name}><div className="product-image"><span>{p.tag}</span><b>23</b></div><div className="product-meta"><div><h3>{p.name}</h3><p>{p.price}</p></div><button onClick={() => setCart([...cart, p.name])}>ADD +</button></div></article>)}
        </div>
      </section>

      <section className="dark-section" id="artists">
        <div className="section-head"><div><p className="kicker">Our roster</p><h2>Artists</h2></div><a href="#">Meet the artists →</a></div>
        <div className="artist-grid">{artists.map((a, i) => <div className="artist-card" key={a}><div className={"artist-image artist-" + i}><span>0{i + 1}</span></div><h3>{a}</h3><p>Twenty3rd Music Group</p></div>)}</div>
      </section>

      <section className="section" id="videos">
        <div className="section-head"><div><p className="kicker">Watch</p><h2>Videos & Visuals</h2></div><a href="#">YouTube channel →</a></div>
        <div className="video-feature"><div className="video-screen"><span>▶</span></div><div><p className="kicker">LATEST VISUAL</p><h3>Twenty3rd Sessions</h3><p>Discover performances, music videos, studio sessions and stories from the Twenty3rd universe.</p><a className="button dark" href="#">Watch on YouTube</a></div></div>
      </section>

      <section className="news" id="about">
        <div><p className="kicker">Twenty3rd Journal</p><h2>More than<br /><i>music.</i></h2></div>
        <div className="news-copy"><p>Twenty3rd Music Group is a Kenyan entertainment company built around music, artists, culture and digital experiences.</p><div className="news-links"><a href="#">News & Releases <span>→</span></a><a href="#">Events <span>→</span></a><a href="#">About Twenty3rd <span>→</span></a><a href="#">Contact & Bookings <span>→</span></a></div></div>
      </section>

      <footer>
        <div className="footer-top"><div className="logo">TWENTY3RD<span>MUSIC GROUP</span></div><p>Building the future of African music and culture.</p><div className="footer-socials"><a href="#">IG</a><a href="#">TK</a><a href="#">YT</a><a href="#">X</a></div></div>
        <div className="footer-bottom"><span>© 2026 Twenty3rd Music Group. All rights reserved.</span><span>Kenya · East Africa</span><span>Privacy · Terms</span></div>
      </footer>
    </main>
  )
}
