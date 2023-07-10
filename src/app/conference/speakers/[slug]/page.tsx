import Image from 'next/image'

export const runtime = 'edge';

export default function Home({params}: { params: { slug: string } }) {
  return (
    <>
      <h1>Welcome to speaker detail page {params.slug}</h1>
    </>
  )
}
