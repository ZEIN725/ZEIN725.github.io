import { LayoutDashboard } from "lucide-react"

const ProfilePage = () => {
  return (
    <>
     <div className="flex gap-10">
      <div className="flex-1 space-y-10">
        <h1 className="text-5xl font-bold">Hello World ! </h1>
        <p>Selamat datang di portofolio saya, Richard Bagus Febrian. Situs ini dibuat sebagai ruang untuk menampilkan hasil karya dan pengalaman saya di bidang pengembangan web. Setiap proyek yang saya bagikan di sini adalah refleksi dari dedikasi dan keinginan saya untuk terus berkembang. Terima kasih atas kunjungannya.</p>
      </div>
        <div className="flex-none">
            <div className="avatar">
          <div className="w-48 rounded-3xl"><img src="zein.jpg" alt="" /></div>
        </div> 
      </div>
     </div>

      <div className="grid md:grid-cols-4 gap-10">
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title"><LayoutDashboard className="stroke-accent fill-accent/30"/>
            <span>Frontend Developer</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officiis!</p>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">
            <LayoutDashboard className="stroke-secondary fill-secondary/30"/>
            BackEnd Developer
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officiis!</p>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title"><LayoutDashboard className="stroke-accent fill-accent/30"/>
            <span>FullStack Developer</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officiis!</p>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title"><LayoutDashboard className="stroke-secondary fill-secondary/30"/>
            <span>Mobile Developer</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officiis!</p>
          </div>
        </div>
     </div>
    </>
  )
}

export default ProfilePage
