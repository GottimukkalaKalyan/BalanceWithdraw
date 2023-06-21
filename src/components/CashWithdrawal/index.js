import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {Amount: 2000}

  withDrawFunction = value => {
    console.log('Withdraw Success')
    this.setState(prevValue => ({Amount: prevValue.Amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const Name = 'Sarah Williams'
    const initial = Name.slice(0, 1)
    console.log(initial)
    const {Amount} = this.state
    return (
      <div className="withdrawContainer">
        <div className="withdrawCard">
          <div className="nameContainer">
            <div className="initial">
              <p className="letter">{initial}</p>
            </div>
            <p className="fullName">{Name}</p>
          </div>
          <div className="balanceContainer">
            <p className="balanceHeading">Your Balance</p>
            <div className="rupees">
              <p className="rupeeHeading">{Amount}</p>
              <p className="inRupees">In Rupees</p>
            </div>
          </div>
          <div className="withDrawContainer">
            <p className="withdrawHeading">Withdraw</p>
            <p className="SumInRupees">CHOOSE SUM (IN RUPEES)</p>
            <ul className="unOrderListContainer">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  makeButton={eachItem}
                  key={eachItem.id}
                  withDrawFunction={this.withDrawFunction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
