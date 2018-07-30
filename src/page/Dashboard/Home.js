import React, { Component, Fragment } from "react";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="columns is-multiline">
          <div className="column">
            <div className="notification is-primary">
              <div className="heading">Top Seller Total</div>
              <div className="title">56,950</div>
              <div className="level">
                <div className="level-item">
                  <div>
                    <div className="heading">Sales $</div>
                    <div className="title is-5">250K</div>
                  </div>
                </div>
                <div className="level-item">
                  <div>
                    <div className="heading">Overall $</div>
                    <div className="title is-5">750K</div>
                  </div>
                </div>
                <div className="level-item">
                  <div>
                    <div className="heading">Sales %</div>
                    <div className="title is-5">25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="notification is-warning">
              <div className="heading">Revenue / Expenses</div>
              <div className="title">55%</div>
              <div className="level">
                <div className="level-item">
                  <div>
                    <div className="heading">Rev Prod $</div>
                    <div className="title is-5">30%</div>
                  </div>
                </div>
                <div className="level-item">
                  <div>
                    <div className="heading">Rev Serv $</div>
                    <div className="title is-5">25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="notification is-info">
              <div className="heading">Feedback Activity</div>
              <div className="title">78% ↑</div>
              <div className="level">
                <div className="level-item">
                  <div>
                    <div className="heading">Pos</div>
                    <div className="title is-5">1560</div>
                  </div>
                </div>
                <div className="level-item">
                  <div>
                    <div className="heading">Neg</div>
                    <div className="title is-5">368</div>
                  </div>
                </div>
                <div className="level-item">
                  <div>
                    <div className="heading">Pos/Neg %</div>
                    <div className="title is-5">77% / 23%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="notification is-danger">
              <div className="heading">Orders / Returns</div>
              <div className="title">75% / 25%</div>
              <div className="level">
                <div className="level-item">
                  <div>
                    <div className="heading">Orders $</div>
                    <div className="title is-5">425K</div>
                  </div>
                </div>
                <div className="level-item">
                  <div>
                    <div className="heading">Returns $</div>
                    <div className="title is-5">106K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
