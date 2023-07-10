

export default function Layout({children}: {
    children: React.ReactNode
}){
    return (
        <>
            <header></header>
            <h1>Conference Page</h1>
            <section>
                {children}
            </section>
        </>
    )
}