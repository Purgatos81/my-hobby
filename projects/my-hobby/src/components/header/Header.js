import { wrapper } from "./header.module.scss";

const HeaderComp = props => {
    return (
        <div className={wrapper}>
            <h1>My favorite games</h1>
        </div>
    )
}

export default HeaderComp;