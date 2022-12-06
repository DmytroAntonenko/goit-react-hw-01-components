import css from "../TransactionHistory/TransactionHistory.module.css";
import PropTypes from 'prop-types';

export const TransactionHistory = ( {items} ) => {
    // console.log(items)
    return <table className={css.transactionHistory}>
        <thead>
            <tr className={css.head}>
                <th className={css.hadeColumn}>Type</th>
                <th className={css.hadeColumn}>Amount</th>
                <th className={css.hadeColumn}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((item, index) => (
                <tr className={`${index % 2 === 0 ? css.true : css.false}`} key={item.id}>
                    <td className={css.column}>{item.type}</td>
                    <td className={css.column}>{item.amount}</td>
                    <td className={css.column}>{item.currency}</td>
                </tr> ))
            }      
        </tbody>       
    </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,  
        })
    )
}