import { useRouter } from "next/router";

const MenuBawah = () => {
    const link = useRouter()
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          bottom: "0px",
          left: "0px",
          borderTop: "2px solid black",
          padding: "10px"
        }}>
        <table width={"100%"} border={0}>
          <tbody>
            <tr>
              <td
                onClick={()=> link.push("/")} width={"33,3%"} align="center">
                <img src="/home.png" width={20} />
                <div>Beranda</div>
              </td>
              <td onClick={()=> link.push("/profil")}
              width={"33,3%"} align="center">
                <img src="/user.png" width={20} />
                <div>Profil</div>
              </td>
              <td 
              onClick={()=> link.push("/tentang")}
              width={"33,3%"} align="center">
                <img src="/info.png" width={20} />
                <div>Tentang</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MenuBawah;
