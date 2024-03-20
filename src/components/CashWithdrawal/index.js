import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  minusAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="c1">
        <div className="c2">
          {/* d1 */}
          <div className="c4">
            <div className="c3">S</div>
            <h1 className="h1">Sarah Williams</h1>
          </div>
          {/* d2 */}
          <div className="c5">
            <p className="p1">Your Balance</p>
            <div>
              <p className="p2">{amount}</p>
              <p className="p3">In Rupees</p>
            </div>
          </div>
          {/* d3 */}

          <p className="p4">Withdraw</p>
          <p className="p5">CHOOSE SUM (In RUPEES)</p>

          {/* d4 */}
          <ul className="ul">
            {denominationsList.map(i => (
              <DenominationItem
                details={i}
                key={i.id}
                minusAmount={this.minusAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
