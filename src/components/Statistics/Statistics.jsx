import css from "../Statistics/Statistics.module.css";
export const Statistics = ( {title, stats} ) => {
    // console.log(username, tag, location, avatar, followers, views, likes)
      return <section className={css.form__wrap}>
        <h2 class="title">{title}</h2>

        <ul class="stat-list">
            {stats.map(item => (
                <li key={item.id} class="item">
                <span class="label">{item.label}</span>
                <span class="percentage">{item.percentage}</span>
            </li>))
            }
            
            {/* <li class="item">
                <span class="label">.mp3</span>
                <span class="percentage">14%</span>
            </li>
            <li class="item">
                <span class="label">.pdf</span>
                <span class="percentage">41%</span>
            </li>
            <li class="item">
                <span class="label">.mp4</span>
                <span class="percentage">12%</span>
            </li> */}
        </ul>
    </section>
}