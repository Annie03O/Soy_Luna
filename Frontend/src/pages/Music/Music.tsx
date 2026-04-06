import "./Music.css"
import { AlbumItem } from "../../models/objects/AlbumItem" 
import { Link } from "react-router"
import YouTubeCarousel from "../../components/YoutubeCarousel/YoutubeCarousel"

const albums: AlbumItem[] = [
    {id: 1, imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/04/Soy_Luna_soundtrack.jpg", path: "/Soy_Luna (Album)", label: "Soy Luna"},
    {id: 2, imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/0b/Soy_Luna_-_M%C3%BAsica_en_ti.jpg", path: "/Musica_en_ti", label: "Música en ti"},
    {id: 3, imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/40/La_vida_es_un_sue%C3%B1o.jpg", path: "/La_vida_es_un_sueño", label: "La vida es un sueño"},
    {id: 4, imgUrl: "https://i.scdn.co/image/ab67616d0000b273effbb11a16be922e05017e98", path: "/Modo_Amar", label: "Modo Amar"},
]

export const Music = () => {
    return <main>
        <h1>The Albums</h1>
        <div className="albums">
            {albums.map((album) => (
                <div className="albumcontainer">
                    <Link to={album.path}><img src={album.imgUrl} alt={album.label} /></Link>
                    <p>
                        <Link to={album.path}>{album.label}</Link>
                    </p>
                </div>
            ))}
        </div>
        <div>
            <YouTubeCarousel></YouTubeCarousel>
        </div>
         </main>
        
}

