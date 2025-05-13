import React from "react";

const Judul :React.FC<{
    warna :string;
    title :string;
    ukuran : number;
}> = ({warna, title, ukuran}) => {
    return <>
        <h1 style={{color:warna, fontSize: 20}}>Ini adalah judul {title}</h1>
    </>
}

export default Judul;