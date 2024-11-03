import { Mail } from "lucide-react"
import { AtSign } from "lucide-react"
import { TwitterIcon } from "lucide-react"
import { Circle } from "lucide-react"
import { LucideTwitter } from "lucide-react"
import { FacebookIcon } from "lucide-react"
import { Github } from "lucide-react"
import { Instagram } from "lucide-react"
import { Send } from "lucide-react"


const ContactPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div  className="space-y-10">
          <h1 className="text-5xl font-bold">Kontak Saya</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis beatae ab dolores! Quibusdam, adipisci. Hic ratione, possimus tempora magnam quia assumenda amet officia facere placeat commodi ut fugiat labore corporis!
          </p>
          
          <div className="flex flex-wrap gap-1">
            <button className="btn">
            <AtSign size={20} />
            <span>zenfonerchd@gmail.com</span>
            </button>
            <button className="btn">
            <Instagram size={20} />
            <span>_rchdfbrn</span>
            </button>
            <button className="btn">
            <Github size={20} />
            <span>ZEIN725</span>
            </button>
            <button className="btn">
            <FacebookIcon size={20} />
            <span>ZEIN725</span>
            </button>
          </div>

        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Kontak saya</h3>

        <div className="py-4 space-y-4">
        <input type="text" className="input w-full" placeholder="Masukkan Nama"/>
            <textarea type="text" className="textarea w-full" placeholder="Masukkan Pesan" rows={5}></textarea>
        </div>

            <div className="card-actions">
              <button className="btn btn-primary">
                <Send size={20}/>
                <span>Kirim </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
