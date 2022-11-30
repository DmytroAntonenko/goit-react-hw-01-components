// import css from './.....module.css';
import css from "../Profile/Profile.module.css";
export const Profile = ( {user} ) => {
  console.log(user)
    return <div className={css.form__wrap}>
    <div class="description">
      <img
        src="{avatar}"
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>
  
    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>
}

// Profile.protoTypes ={
//   username: ProtoTypes.string.isRequired,
//   avatar: ProtoTypes.string.isRequired, 
//   tag: ProtoTypes.string.isRequired,
//   location: ProtoTypes.string.isRequired,
//   stats: ProtoTypes.number.isRequired,
//   stats.views: ProtoTypes.number.isRequired,
//   stats.likes: ProtoTypes.number.isRequired,
// }