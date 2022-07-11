import { useSelector } from "react-redux";
import "./profile.css";

export default function Profile(){
    const attackPower = useSelector((state) => state.profile.warrior.basicStats.attackPower);
    const healPoints = useSelector((state) => state.profile.warrior.basicStats.healPoints);
    const manaPoints = useSelector((state) => state.profile.warrior.basicStats.manaPoints);

    return (
        <div className="profile">
            <h4>Характеристики персонажа</h4>
            <div>Сила атаки: {attackPower}</div>
            <div>Здоровье: {healPoints}</div>
            <div>Мана: {manaPoints}</div>
        </div>
    )
}