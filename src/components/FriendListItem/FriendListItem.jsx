import css from "../FriendListItem/FriendListItem.module.css";
import PropTypes from 'prop-types';

export const FriendListItem = ( {name, avatar, isOnline} ) => {
//   console.log(css)
    return <div className={css.form__wrap}>
        <li className={css.item}>
        <span className={`${css.status} ${isOnline? css.true : css.false}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="80" height="80" />
            <p className={css.name}>{name}</p>
        </li>
    </div>
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}
