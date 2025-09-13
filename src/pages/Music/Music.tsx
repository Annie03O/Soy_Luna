import "./Music.css"
import { Album } from "../../models/album"
import { Link } from "react-router"
import YouTubeCarousel from "../../components/YoutubeCarousel/YoutubeCarousel"

const albums: Album[] = [
    new Album(1, "https://upload.wikimedia.org/wikipedia/en/0/04/Soy_Luna_soundtrack.jpg", "/Soy_Luna (Album)", "Soy Luna"),
    new Album(2, "https://upload.wikimedia.org/wikipedia/en/0/0b/Soy_Luna_-_M%C3%BAsica_en_ti.jpg", "/Musica_en_ti", "Música en ti"),
    new Album(3, "https://upload.wikimedia.org/wikipedia/en/4/40/La_vida_es_un_sue%C3%B1o.jpg", "/La_vida_es_un_sueño", "La vida es un sueño"),
    new Album(4, "https://i.scdn.co/image/ab67616d0000b273effbb11a16be922e05017e98", "/Modo_Amar","Modo Amar"),
]

export const Music = () => {
    return <main>
        <h1>The Albums</h1>
        <div className="albums">
            {albums.map((album) => (
                <div className="albumcontainer">
                    <Link to={album.link}><img src={album.imgUrl} alt={album.title} /></Link>
                    <p>
                        <Link to={album.link}>{album.title}</Link>
                    </p>
                </div>
            ))}
        </div>
        <div>
            <YouTubeCarousel></YouTubeCarousel>
        </div>
         </main>
        
}

