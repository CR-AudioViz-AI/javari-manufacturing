// app/layout.tsx — Javari Manufacturing
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Manufacturing | Javari by CR AudioViz AI',
  description: 'Manufacturing AI',
}
import AppShell from '@/components/AppShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, padding: 0 }}><AppShell appName="Javari Manufacturing" appColor="#374151" appEmoji="⚙️" appDesc="Manufacturing AI">{children}</AppShell></body></html>)
}
