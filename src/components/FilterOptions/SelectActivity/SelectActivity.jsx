import { getAllActivities, getCountryByActivityName } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { ActivitySelector } from './Styles';

export default function SelectActivity() {
  const dispatch = useDispatch();

  const { allActivities } = useSelector((state) => state);
  const handleClick = () => {
    dispatch(getAllActivities());
  };

  const handleChange = (event) => {
    dispatch(getCountryByActivityName(event.target.value));
  };

  return (
    <ActivitySelector
      name="selectActivity"
      onChange={handleChange}
      onClick={handleClick}
    >
      <option>Select Activity</option>
      {allActivities.length !== 0 &&
        allActivities.map((activity) => {
          return (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          );
        })}
    </ActivitySelector>
  );
}