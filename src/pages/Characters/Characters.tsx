import { Character } from "../../models/Character"
import "/src/styles/Characters/Characters.css"
import { Link } from "react-router-dom"

const characters: Character[] = [
    new Character(1, "Luna", "https://i.pinimg.com/564x/c1/58/41/c158415ece8282618e58a525e51592d9.jpg", "Karol Sevilla", "/Luna"),
    new Character(2, "Matteo", "https://i.pinimg.com/736x/6a/aa/f1/6aaaf1adbf0e841fa0257a352db1d031.jpg", "Ruggero Pasquarelli", "/Matteo"),
    new Character(3, "Simón", "https://pbs.twimg.com/profile_images/782192147793674244/I0H9Ia9N_400x400.jpg", "Micheal Ronda", "/Simón"),
]

const characters2: Character[] = [
    new Character(4, "Ámbar", "https://i.pinimg.com/564x/f3/46/bb/f346bb7dd9e331554633f7cc15e72d59.jpg", "Valentina Zenere", "/Ámbar"),
    new Character(5, "Nina", "https://i.pinimg.com/564x/88/72/a2/8872a20dd293eb403e2efb6206e90566.jpg", "Carolina Kopelioff", "/Nina"),
    new Character(6, "Delfi", "https://i.pinimg.com/736x/ca/53/81/ca538152c9e81be9046ee9b6a3a9eeed.jpg", "Malena Ratner", "/Delfi"),
    new Character(7, "Gastón", "https://img.wattpad.com/3e291a72d660402803cef7dccd883b845d5aeff4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f384a6372654d706e5f555f4c70513d3d2d3431323030313537342e313462653835326238316538616233633830333035303130383930332e6a7067?s=fit&w=720&h=720", "Agustìn Bernasconi", "/Gastón"),
    new Character(8, "Jazmín", "https://i.pinimg.com/474x/d5/f1/5b/d5f15bdcf97948598c92526fce7bf739.jpg",  "Katja Martínez", "/Jazmín"),
    new Character(8, "Jim", "https://i.pinimg.com/564x/d1/fb/f9/d1fbf97052e502657c3d99a9c4f854f7.jpg", "Ana Jara", "/Jim"),
    new Character(9, "Yam", "https://i.pinimg.com/474x/99/20/4a/99204a7ddc1e80b9289d460df7046a14.jpg", "Chiara Parravicini", "/Yam"),
    new Character(10, "Ramiro", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUIZ2hYuSBkVMxmSRHNKOx4WkG1cXGJek5g&s", "Jorge López", "/Ramiro"),
    new Character(11, "Pedro", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3mT6g6di-cZYgxGWAAdXiM4XNYEF67FLNmZ5vcpLjht0h5PgU9ELCsNPnGWKOb4rBn8&usqp=CAU","Gastón Vietto", "/Pedro"),
    new Character(13, "Nico", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwqrTXcJ8cN3hc4kbzx1tfn5H5sDjtj3NyJPHj5mu5oSWCiRYqQNvJ4s23dPq2hojV94&usqp=CAU", "Lionel Ferro", "/Nico"),
    new Character(14, "Tamara", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9VssqUHjDcsImv5kA7TG8ir_3BXcC8QB-A&s", "Luz Capriota", "/Tamara"),
    new Character(15, "Mrs. Benson", "https://pbs.twimg.com/profile_images/896031069849497601/mFX48SWF_400x400.jpg", "Lucila Gandolfo", "/Sharon"),
    new Character(16, "Rey", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTnM8jeVkNkCO0yXhd6dwZYQ1O-fZYq8Idg&s", "Rodrigo Pedreira", "/Rey"),
    new Character(17, "Miguel", "https://tiermaker.com/images/chart/chart/soy-luna-characters-520944/migueljpg.png", "David Muri", "/Miguel"),
    new Character(18, "Mónica", "https://assets.puzzlefactory.com/puzzle/352/239/original.jpg", "Ana Carolina Valsagna", "/Mónica"),
    new Character(19, "Tino", "src/assets/Tino.jpg", "Diego Sassi Alcalá", "/Tino"),
    new Character(20, "Cato", "src/assets/Cato.jpg", "Germán Tripel", "/Cato"),
    new Character(21, "Amanda", "src/assets/Amanda.jpg", "Antonella Querzoli", "/Amanda"),
    new Character(22, "Ricardo", "src/assets/ricardo.jpg", "Ezequiel Rodríquez", "/Ricardo"),
    new Character(23, "Ana", "src/assets/ana.jpg", "Caro Ibarro", "/Ana"),
    new Character(24, "Mora", "src/assets/mora.jpg", "Paula Kohan", "/Mora"),
    new Character(25, "Juliana", "src/assets/juliana.jpg", "Estela Ribeiro", "/Juliana"),
    new Character(26, "Alfredo", "src/assets/alfredo.jpg", "Roberto Carnaghi", "/Alfredo"),
    new Character(27, "Gary", "https://vignette.wikia.nocookie.net/soyluna/images/b/bd/Gary.jpg/revision/latest?cb=20200625095218", "Joaquín Berthold", "/Gary"),
    new Character(28, "Benicio", "src/assets/benicio.jpg", "Pasquale Di Nuzzo", "/Benicio"),
    new Character(29, "Emilia", "https://i.pinimg.com/736x/a6/ea/20/a6ea2069ff3aef1a27e5f6c098d7ba97.jpg", "Giovanna Reynaud", "/Emila"),
    new Character(30, "Eric", "src/assets/eric.jpg", "Jandino", "/Eric"),
    new Character(31, "Maggie", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitLGbjcYLFLEPC3W2dUF_AUMIFrXS13c0jg&s", "Victoria Suárez Battán", "/Maggie")
]

export const Characters = () => {
    return <>   
    <main> 
    <h1 className="charh1">Meet the Characters</h1>
        <div className="character-wrapper">
        <div className="firstrow">
            {characters.map((c) => (
                <Link to={c.link}>
                    <div className="characterContainer">
                        <h1>{c.name}</h1>
                        <img src={c.imgUrl} alt={c.name}/>
                        <p>Played by {c.actor}</p>
                    </div>
                </Link>
            ))}
        </div>
        <div className="secondrow">
            {characters2.map((c) => (
                <Link to={c.link}>
                    <div className="characterContainer">
                        <h1>{c.name}</h1> 
                        <img src={c.imgUrl} alt={c.name}/>
                        <p>Played by {c.actor}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    </main>
    </>
} 