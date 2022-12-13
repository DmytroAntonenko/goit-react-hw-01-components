import css from "../Statistics/Statistics.module.css";
import PropTypes from 'prop-types';

const randomColorRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

export const Statistics = ( {title, stats} ) => {
    // console.log(username, tag, location, avatar, followers, views, likes)
      return <section className={css.section}>
        {title && <h2 className={css.title}>{title}</h2>}
        

        <ul className={css.statList}>
            {stats.map(item => (
                <li key={item.id} className={css.item}  style={{
                    backgroundColor: randomColorRGB()}}>
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