export default function AfterLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <div>
            애프터 로그인 레이아웃
            {children}
        </div>
    )
}