// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransactionHistory} = props
  const {id, title, amount, type} = transactionDetails

  const deleteTransaction = () => {
    deleteTransactionHistory(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>

      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={deleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
