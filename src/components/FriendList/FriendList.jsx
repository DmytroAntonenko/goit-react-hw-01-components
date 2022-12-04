import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css";
import PropTypes, { shape } from 'prop-types';
export const FriendList = ({items}) => {
    return(
<ul className = {css.list}>
    {items.map(item => 
    
        <FriendListItem
        key={item.id}
        name={item.name}
        avatar={item.avatar}
        isOnline={item.isOnline}
        />
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