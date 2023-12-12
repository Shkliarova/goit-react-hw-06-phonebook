import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../../redux/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.filter)

    return(
        <div>
            <input type="text" value={filter} 
            onChange={e => dispatch(updateFilter(e.target.value))}/>
        </div>
    )
}