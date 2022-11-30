import css from './.....module.css';
export const Profile = ( {username, avatar, tag, location, followers, views, likes} ) => {
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