import { Relationship } from "./Relationships";
import TinoCatoImg from "/src/assets/TinoCato.jpg"
import AnaMoraImg from "/src/assets/AnaMora.jpg"
import { GasteoImg, JimYamImg, LumonImg, LuninaImg, SimonPedroNicoImg, SitteoImg, ÁmbarDelfiJazmínImg, ÁmbiliaImg } from "./Images";


export const friendships: Relationship[] = [
    new Relationship(1, "Luna and Simón", LumonImg, "/Lumon"),
    new Relationship(2, "Luna and Nina", LuninaImg, "/Luna_and_Nina"),
    new Relationship(3, "Jim and Yam", JimYamImg, "/Jim_and_Yam"),
    new Relationship(4, "Matteo and Gastón", GasteoImg, "/Gastón_and_Matteo"),
    new Relationship(5, "Ámbar, Delfi and Jazmín", ÁmbarDelfiJazmínImg,"/Ámbar_Delfi_and_Jazmín"),
    new Relationship(6, "Nico, Pedro and Simòn", SimonPedroNicoImg, "/Nico_Pedro_and_Simón"),
    new Relationship(7, "Matteo and Simón", SitteoImg, "/Simón_and_Matteo"),
    new Relationship(8, "Àmbar and Emilia", ÁmbiliaImg, "/Ámbar_and_Emilia"),
    new Relationship(9, "Tino and Cato", TinoCatoImg, "/Tino_and_Cato"),
    new Relationship(10, "Ana and Mora", AnaMoraImg, "/Ana_and_Mora")
]