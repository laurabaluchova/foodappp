import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
    console.log("tu su spojene jedla")
    return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
)};

export default Meals;