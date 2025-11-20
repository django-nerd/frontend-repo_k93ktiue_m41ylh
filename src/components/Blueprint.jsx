import React from 'react'
import { DesignTokens } from './DesignSystem'

function Section({ title, children, id }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold text-white">{title}</h2>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200/90">
        {children}
      </div>
    </section>
  )
}

export default function Blueprint() {
  return (
    <div id="screens" className="space-y-10">
      <Section title="Onboarding & Auth" id="onboarding">
        <ul className="list-disc pl-6">
          <li>Welcome flow highlighting support-first model, dark by default.</li>
          <li>Sign up as Listener or Artist. OAuth optional.</li>
          <li>Genre, mood, and location preferences to seed recommendations.</li>
        </ul>
      </Section>

      <Section title="Home" id="home">
        <ul className="list-disc pl-6">
          <li>Hero carousel with new indie releases and featured artists.</li>
          <li>Rows: Because you liked..., Trending DIY, Fresh Finds, Local scenes.</li>
          <li>Quick actions: Continue listening, Your playlists, Liked songs.</li>
        </ul>
      </Section>

      <Section title="Search" id="search">
        <ul className="list-disc pl-6">
          <li>Search across songs, artists, albums, playlists, events, merch.</li>
          <li>Filters: genre, BPM, mood, location, price (for purchasable items).</li>
          <li>Typeahead with recent searches and creators you follow.</li>
        </ul>
      </Section>

      <Section title="Artist Page" id="artist">
        <ul className="list-disc pl-6">
          <li>Header with hero image, avatar, follow and Support button.</li>
          <li>Tabs: About, Discography, Events, Merch.</li>
          <li>Top track, play all, shuffle, share, and message options.</li>
        </ul>
      </Section>

      <Section title="Player" id="player">
        <ul className="list-disc pl-6">
          <li>Controls: play/pause, next/prev, like, queue, repeat, shuffle.</li>
          <li>Lyrics panel, queue sidebar, device picker, and mini-player.</li>
          <li>Purchase CTA for tracks/albums with artist-defined pricing.</li>
        </ul>
      </Section>

      <Section title="Library & Playlists" id="library">
        <ul className="list-disc pl-6">
          <li>Saved music, followed artists, playlists, purchases, and downloads.</li>
          <li>Create playlist, reorder tracks, collaborative playlists.</li>
          <li>Tags for mood/genre; smart playlists based on rules.</li>
        </ul>
      </Section>

      <Section title="Artist Uploads" id="uploads">
        <ul className="list-disc pl-6">
          <li>Drag-and-drop for audio files and cover art. Auto waveform & loudness scan.</li>
          <li>Metadata: title, album, genre, ISRC, BPM, mood, explicit, preview start.</li>
          <li>Pricing: per-track or album bundle; free, pay-what-you-want, or fixed.</li>
        </ul>
      </Section>

      <Section title="Artist Analytics" id="analytics">
        <ul className="list-disc pl-6">
          <li>Streams, unique listeners, follows, saves, playlist adds.</li>
          <li>Revenue: streams, purchases, tips, subscriptions; payout status.</li>
          <li>Geography, devices, sources; cohort retention for releases.</li>
        </ul>
      </Section>

      <Section title="Design System & Tokens" id="design">
        <DesignTokens />
      </Section>

      <Section title="Component Inventory" id="components">
        <ul className="grid gap-3 md:grid-cols-2">
          <li>TopNav, SideNav, MiniPlayer, NowPlayingBar</li>
          <li>Card: Artist, Album, Track, Playlist, Merch, Event</li>
          <li>Lists: TrackList, QueueList, SearchResultList</li>
          <li>Inputs: FileDropzone, PriceInput, TierEditor, TagPicker</li>
          <li>Modals: PurchaseModal, SupportModal, ShareModal</li>
          <li>Pages: Home, Search, Artist, Library, Uploads, Analytics</li>
        </ul>
      </Section>

      <Section title="System Architecture" id="architecture">
        <div className="space-y-3">
          <p>Frontend: React + Vite + Tailwind. Audio engine powered by Web Audio API and HLS for streaming. State via React Query or Zustand. Payments via Stripe (one-off + subscriptions). Auth via JWT, with OAuth providers.</p>
          <p>Backend: FastAPI. MongoDB for primary data, object storage for audio & images (S3 compatible). Celery/Redis for async jobs (audio processing, royalties). Webhooks: Stripe, upload processing.</p>
          <p>Services: transcoder (FFmpeg → HLS), analytics ingestion, recommendation engine. All exposed via HTTPS APIs. CDN for static/audio delivery.</p>
        </div>
      </Section>

      <Section title="Database Model" id="database">
        <ul className="list-disc pl-6">
          <li>User: role [listener|artist], name, handle, bio, avatar, socials, follows[], library{}, purchases[], subscriptions[]</li>
          <li>Artist: user_id, display_name, bio, links, payout_account, support_tiers[]</li>
          <li>Track: artist_id, title, album_id?, duration, audio_urls{hls, mp3}, price, isrc, bpm, mood[], genre, explicit, cover_url, stats</li>
          <li>Album: artist_id, title, cover_url, release_date, tracks[], price</li>
          <li>Playlist: owner_id, title, is_public, track_ids[], cover_url, collaborators[]</li>
          <li>Order: buyer_id, items[{track_id|album_id, price, revenue_split}], total, status</li>
          <li>Stream: user_id, track_id, started_at, duration_ms, payout_micro, device, country</li>
          <li>Merch: artist_id, title, description, images[], variants[], price, inventory</li>
          <li>Event: artist_id, title, date, venue, city, link, price</li>
          <li>Payout: artist_id, period, total_gross, platform_fee, net_paid, status, tx_ref</li>
        </ul>
      </Section>

      <Section title="Streaming & Payouts" id="economy">
        <ul className="list-disc pl-6">
          <li>Streaming: Serve HLS segments via CDN. Track play starts (>=30s) and completion to compute micro-payouts per play.</li>
          <li>Purchases: Stripe Checkout for single tracks/albums. Revenue split: 90% artist, 10% platform by default.</li>
          <li>Support: Stripe Subscriptions. Artists define tier prices/benefits; access gates content or perks.</li>
          <li>Payouts: Monthly aggregation per artist; auto transfer via Stripe Connect with statements.</li>
        </ul>
      </Section>

      <Section title="UX Copy Principles" id="copy">
        <ul className="list-disc pl-6">
          <li>Direct, friendly, creator-first. Avoid industry jargon.</li>
          <li>Emphasize support language: "Back this artist", "You made this possible".</li>
          <li>Transparent pricing and revenue splits everywhere money appears.</li>
        </ul>
      </Section>
    </div>
  )
}
