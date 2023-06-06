import { Navbar } from '@/components/vendorpage/Navbar';
import { Infocolumn } from '@/components/vendorpage/Infocolumn';
import { Howtostart } from '@/components/vendorpage/Howtostart';
import { Whyhomechow } from '@/components/vendorpage/Whyhomechow';
import { Becomechef } from '@/components/vendorpage/Becomechef';
import { Howitworks } from '@/components/vendorpage/Howitworks';
import Footer from '@/components/footer/Footer';




export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#ffffff]">
        <Navbar />
        
        <Becomechef />

          <Howitworks />

          <Infocolumn />

          <Whyhomechow />

          <Howtostart/>

          <Footer footerColor={'light'} />

      </main>
    </>
  )
}
