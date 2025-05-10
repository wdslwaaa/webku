import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [ukuran, setUkuran] = useState(200);
  return (
    <>
    <Link href="/biodata">Biodata</Link>
      Jung Jaehyun <br />
      <b>UI</b> <i>UNIDAYAN INDAH</i> <br />
      <img width={ukuran} src="/jaehyun.jpg" />
      <br />
      {ukuran}
      <br />
      <button onClick={()=>{
        setUkuran(ukuran + 10)
      }}>Tambah Ukuran</button>
      <button onClick={()=>{
        setUkuran(ukuran - 10)
      }}>Kurangi Ukuran</button>
      
    </>
  );
}
