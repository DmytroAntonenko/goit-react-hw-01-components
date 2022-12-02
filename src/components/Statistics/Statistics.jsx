import css from "../Statistics/Statistics.module.css";
import PropTypes from 'prop-types';
export const Statistics = ( {title, stats} ) => {
    // console.log(username, tag, location, avatar, followers, views, likes)
      return <section className={css.section}>
        {title && <h2 className={css.title}>{title}</h2>}
        

        <ul className={css.statList}>
            {stats.map(item => (
                <li key={item.id} className={css.item}>
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage}%</span>
            </li>))
            }
        </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired, 
            percentage: PropTypes.number.isRequired,
        })
    )
}