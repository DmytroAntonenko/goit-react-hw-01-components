import { FriendListItem } from "../FriendListItem/FriendListItem";
import PropTypes, { shape } from 'prop-types';
export const FriendList = ({items}) => {
    return(
<ul>
    {items.map(item => 
    <li key={item.id} >
        <FriendListItem
        name={item.name}
        avatar={item.avatar}
        isonline={item.isonline}
        />
    </li>
    )}
</ul>
);
}

FriendList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),

}