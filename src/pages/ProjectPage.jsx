import { useState } from "react";
import { useEffect } from "react";

const ProjectPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch ("/json/projectData.json")
    .then ((response) => response.json())
    .then((data) => setDatas(data) ) 
  });
  
  return (
    <>
      <h1 className="text-5xl font-bold">Portofolio Saya</h1>
      <p>Sebagai pemula dalam dunia web development, saya dengan antusias mengerjakan proyek ini untuk mengasah keterampilan dan pengetahuan saya. Proyek ini bertujuan untuk "membuat website sederhana yang informatif", dan merupakan langkah pertama saya dalam memahami proses pengembangan web.
      Berikut beberapa project yang telah saya buat sebelum membuat project ini.
      </p>

      <div className="masonry">
        {datas.map(data =>
          <div className="card masonry-item hover:scale-105 cursor-pointer transition-all bg-base-200" key={data.id}>
            <figure className="aspect-video w-full">
              <img src={data.images} alt="" className="bg-base-300 w-full" />
            </figure>
          <div className="card-body">
            <h3 className="card-title">{data.name}</h3>
            <p className="text-sm">{data.description}</p>
          </div>
        </div>)}
      </div>

    </>
  )
}

export default ProjectPage
