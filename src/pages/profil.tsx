import MenuAtas from "@/komponen/menu-atas";
import MenuBawah from "@/komponen/menu-bawah";
import Slide from "@/komponen/slide";

const Beranda = () => {
  return <>
  <MenuAtas color="#FA812F" 
  fontcolor="white" 
  title="Halaman profil"/>
 
  <br />

  <center>
    <br />
    Nama :Salwa <br />
    Alamat : Jl.Alkausar
  </center>
  <MenuBawah />
  </>
}
export default Beranda