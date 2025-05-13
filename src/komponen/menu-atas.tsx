import React from "react";

const MenuAtas: React.FC <{
    title: string,
    color: string,
    fontcolor : string
}> = ({title, color, fontcolor}) => {
    return<>
    <div style={{
        padding:"15px",
        background: color,
        color: fontcolor,
    }}>

        {title}
        </div>
        </>
}

export default MenuAtas;
