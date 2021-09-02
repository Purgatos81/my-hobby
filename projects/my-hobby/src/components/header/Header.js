import { wrapper } from "./header.module.scss";
import Card from "../card/Card";

const HeaderComp = props => {
    return (
        <div className={wrapper}>
            <h1>My favorite games</h1>
            <Card />
        </div>
    )
}

export default HeaderComp;