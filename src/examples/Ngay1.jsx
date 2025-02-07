import { useEffect, useState } from "react";

const Ngay1 = (props) => {
    const { name } = props;
    const [age, setAge] = useState(0);

    // useEffect(() => {
    //     setAge("hoi dan it");
    // }, [])

    return (
        <div>
            Vi du ngay 1 - ten {name} | tuoi = {age}
        </div>
    )
}

export default Ngay1;