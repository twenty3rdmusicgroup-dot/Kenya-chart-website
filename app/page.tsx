import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

type ChartRow = { rank:number; title:string; artist_name:string; cover_url:string|null; score:number; previous_rank:number|null; movement:number|null; peak_rank:number|null; weeks_on_chart:number|null; is_new:boolean }

async function getChart(): Promise<{week:any, chart:ChartRow[]}> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return {week:null, chart:[]}
  const supabase = createClient(url, key)
  const { data, error } = await supabase.rpc('get_public_hot50')
  if (error || !data) return {week:null, chart:[]}
  return { week:data.week ?? null, chart:(data.chart ?? []) as ChartRow[] }
}

export default async function Home(){
  const {week, chart} = await getChart()
  return <main className="shell">
    <header className="top"><div className="brand">TWENTY3RD MUSIC GROUP</div><nav className="nav"><span>CHARTS</span><span>PRODUCERS</span><span>RISING</span><span>VIDEOS</span></nav></header>
    <section className="hero"><div className="eyebrow">Kenya · Weekly Music Chart</div><h1>23rd<br/>HOT 50</h1><p>The independent weekly ranking of Kenya’s most influential songs. Built around transparent, measurable performance data — published every Friday.</p><div className="edition"><span className="status">{week?.status === 'published' ? 'OFFICIAL EDITION' : 'BUILDING'}</span><span>{week?.week_code ? `Week ${week.week_code}` : 'First edition'}</span><span>{week?.week_end ? new Date(week.week_end).toLocaleDateString('en-KE',{day:'2-digit',month:'short',year:'numeric'}) : '—'}</span></div></section>
    <section className="chart"><div className="chart-head"><span>POSITION</span><span>TRACK</span><span>MOVE</span><span>SCORE</span></div>{chart.length === 0 ? <div className="empty">No official chart has been published yet. The first verified edition will appear here automatically.</div> : chart.map(x=><article className="row" key={`${x.rank}-${x.title}`}><div className="rank">{String(x.rank).padStart(2,'0')}</div><div className="song">{x.cover_url ? <img className="cover" src={x.cover_url} alt="" /> : <div className="cover"/>}<div className="meta"><div className="title">{x.title}{x.is_new&&<span className="new">NEW</span>}</div><div className="artist">{x.artist_name}</div></div></div><div className="move">{x.movement===null?'—':x.movement>0?`↑ ${x.movement}`:x.movement<0?`↓ ${Math.abs(x.movement)}`:'—'}</div><div className="score">{Number(x.score).toFixed(1)}</div></article>)}</section>
    <footer className="footer">© 2026 Twenty3rd Music Group · 23rd Hot 50 · Rankings are generated from validated performance data. Source disclosures and methodology will accompany every official edition.</footer>
  </main>
}
