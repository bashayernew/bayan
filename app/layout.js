export const metadata = {
  title: 'BAYAN Elevators & Doors',
  description: 'Premium elevators, doors, and stainless railings in Kuwait',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}

