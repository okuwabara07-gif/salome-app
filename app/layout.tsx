import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SALOMÉ | 美容師のためのLINE予約管理',
  description: 'あなたのLINEが、予約システムになる。美容師・サロン向けSaaS。LINE LIFF・SALON BOARD連携・ホットペッパー重複防止。30日間無料。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{margin:0,padding:0}}>{children}</body>
    </html>
  )
}
