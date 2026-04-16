export default function Home() {
  return (
    <main style={{fontFamily:"'Helvetica Neue',sans-serif",margin:0,padding:0}}>
      <section style={{background:"#1A1018",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"60px 24px",textAlign:"center"}}>
        <div style={{fontSize:11,letterSpacing:8,color:"rgba(255,255,255,0.4)",marginBottom:24}}>美容師のための予約管理</div>
        <h1 style={{fontSize:42,fontWeight:200,letterSpacing:8,color:"#FAF6EE",margin:"0 0 16px",lineHeight:1.2}}>SALOM<span style={{color:"#B8966A"}}>É</span></h1>
        <div style={{width:40,height:1,background:"#B8966A",margin:"0 auto 32px"}}></div>
        <p style={{fontSize:22,fontWeight:300,color:"#FAF6EE",letterSpacing:3,margin:"0 0 12px",lineHeight:1.5}}>あなたの<span style={{color:"#4CC764"}}>LINE</span>が、<br/>予約システムになる。</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",margin:"24px 0 36px"}}>
          {["アプリ不要","初期費用ゼロ","今日から使える","30日間無料"].map(t=>(
            <span key={t} style={{fontSize:12,color:"rgba(255,255,255,0.6)",padding:"4px 12px",border:"0.5px solid rgba(255,255,255,0.2)",borderRadius:20}}>{t}</span>
          ))}
        </div>
        <a href="https://line.me/R/ti/p/@545fncvi" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 32px",background:"#06C755",borderRadius:4,textDecoration:"none",fontSize:15,color:"#fff",letterSpacing:2,fontWeight:500}}>
          LINEで無料登録する
        </a>
        <p style={{fontSize:11,color:"rgba(255,255,255,0.3)",marginTop:12}}>クレジットカード不要・いつでも解約可能</p>
      </section>

      <section style={{background:"#FAF6EE",padding:"80px 24px"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <div style={{fontSize:10,letterSpacing:6,color:"#B8966A",marginBottom:12}}>BEFORE / AFTER</div>
          <h2 style={{fontSize:28,fontWeight:300,color:"#1A1018",letterSpacing:4,margin:0}}>今日、変わります。</h2>
        </div>
        <div style={{maxWidth:560,margin:"0 auto",display:"flex",flexDirection:"column",gap:16}}>
          <div style={{background:"#fff",borderRadius:12,padding:24,border:"1px solid #E8E0D8"}}>
            <div style={{fontSize:11,color:"#C0392B",letterSpacing:3,marginBottom:12}}>BEFORE — よくある1日</div>
            {["お客様「来週空いてますか？」","手帳を見て、LINEで返信","別のお客様から同じ時間に予約","ダブルブッキング発生。謝罪。","信頼が少しずつ、削られていく。"].map((t,i)=>(
              <div key={t} style={{fontSize:13,color:i>=3?"#C0392B":"#7A6E64",marginBottom:8}}>→ {t}</div>
            ))}
          </div>
          <div style={{textAlign:"center",fontSize:20,color:"#B8966A"}}>↓</div>
          <div style={{background:"#1A1018",borderRadius:12,padding:24}}>
            <div style={{fontSize:11,color:"#B8966A",letterSpacing:3,marginBottom:12}}>AFTER — SALOMÉがあれば</div>
            {["お客様がLINEのメニューをタップ","空き時間が自動で表示される","お客様が日時を選んで完了","予約が自動でカレンダーに登録","前日にリマインドも自動送信。"].map(t=>(
              <div key={t} style={{fontSize:13,color:t.includes("自動")?"#B8966A":"rgba(255,255,255,0.7)",marginBottom:8}}>→ {t}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"#fff",padding:"80px 24px"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <div style={{fontSize:10,letterSpacing:6,color:"#B8966A",marginBottom:12}}>PRICING</div>
          <h2 style={{fontSize:28,fontWeight:300,color:"#1A1018",letterSpacing:3,margin:"0 0 8px"}}>シンプルな料金体系</h2>
          <p style={{fontSize:13,color:"#A89E94",margin:0}}>まず30日間、無料でお試しください。</p>
        </div>
        <div style={{maxWidth:480,margin:"0 auto",display:"flex",flexDirection:"column",gap:12}}>
          <div style={{background:"#FAF6EE",borderRadius:12,padding:24,border:"1px solid rgba(184,150,106,.3)"}}>
            <div style={{fontSize:10,letterSpacing:3,color:"#B8966A",marginBottom:4}}>FREELANCE</div>
            <div style={{fontSize:20,fontWeight:300,color:"#1A1018",marginBottom:8}}>フリーランスプラン</div>
            <div style={{fontSize:36,fontWeight:200,color:"#B8966A",marginBottom:12}}>¥980<span style={{fontSize:13,color:"#A89E94"}}>/月</span></div>
            {["LINE予約受付（無制限）","予約カレンダー自動管理","前日リマインド自動送信","売上自動集計・確定申告データ出力"].map(f=>(
              <div key={f} style={{fontSize:13,color:"#7A6E64",marginBottom:6,display:"flex",gap:8}}><span style={{color:"#B8966A"}}>✓</span>{f}</div>
            ))}
          </div>
          <div style={{background:"#1A1018",borderRadius:12,padding:24}}>
            <div style={{fontSize:10,letterSpacing:3,color:"#B8966A",marginBottom:4}}>SALON — 人気 No.1</div>
            <div style={{fontSize:20,fontWeight:300,color:"#FAF6EE",marginBottom:8}}>サロンプラン</div>
            <div style={{fontSize:36,fontWeight:200,color:"#B8966A",marginBottom:12}}>¥4,980<span style={{fontSize:13,color:"rgba(255,255,255,0.4)"}}>/月</span></div>
            {["フリーランスプランの全機能","スタッフ複数人対応","SALON BOARD iCal同期","ホットペッパー重複ブロック","顧客カルテ管理","店販・LINE販売・郵送","サロンブログ・記事発信"].map(f=>(
              <div key={f} style={{fontSize:13,color:"rgba(255,255,255,0.65)",marginBottom:6,display:"flex",gap:8}}><span style={{color:"#B8966A"}}>✓</span>{f}</div>
            ))}
          </div>
          <div style={{textAlign:"center",padding:16,background:"#FAF6EE",borderRadius:10,fontSize:12,color:"#7A6E64"}}>
            すべてのプランに <strong style={{color:"#1A1018"}}>30日間無料トライアル</strong> が含まれます。<br/>クレジットカード不要・いつでも解約可能。
          </div>
        </div>
      </section>

      <section style={{background:"#1A1018",padding:"80px 24px",textAlign:"center"}}>
        <h2 style={{fontSize:28,fontWeight:300,color:"#FAF6EE",letterSpacing:3,margin:"0 0 12px"}}>まず、試してみてください。</h2>
        <p style={{fontSize:13,color:"rgba(255,255,255,0.4)",margin:"0 0 32px"}}>登録は1分。今日から使えます。</p>
        <a href="https://line.me/R/ti/p/@545fncvi" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 40px",background:"#06C755",borderRadius:4,textDecoration:"none",fontSize:15,color:"#fff",letterSpacing:2,fontWeight:500}}>
          LINEで無料登録する
        </a>
      </section>

      <footer style={{background:"#1A1018",borderTop:"1px solid rgba(255,255,255,0.08)",padding:"32px 24px",textAlign:"center"}}>
        <div style={{fontSize:18,fontWeight:200,letterSpacing:6,color:"#FAF6EE",marginBottom:12}}>SALOM<span style={{color:"#B8966A"}}>É</span></div>
        <p style={{fontSize:11,color:"rgba(255,255,255,0.2)",margin:0}}>© 2026 SALOMÉ by AOKAE合同会社</p>
      </footer>
    </main>
  )
}
