import React from "react";
interface Block{
    value?: string | null;
    onClick: () => void;
}

const Block: React.FC<Block> = (props) => {


    return(
        <div onClick={props.onClick} className="block">{props.value}</div>
    );
}

export default Block