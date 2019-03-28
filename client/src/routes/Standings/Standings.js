import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStandingsFromApi } from "../../actions/actionCreators";
import WestStandings from "./WestStandings";
import EastStandings from "./EastStandings";
import { Table } from "react-bootstrap";

class Standings extends Component {
  componentWillMount() {
    this.props.fetchStandings();
  }

  westTeams() {
    if (!this.props.standings) {
      return (
        <tr>
          <td>loading...</td>
        </tr>
      );
    }
    // to map through the returned standings data
    let { west } = this.props.standings;
    return west.map((team, index) => {
      return (
        <WestStandings
          name={team.teamId}
          key={team.teamId}
          wins={team.win}
          losses={team.loss}
          lastTenWin={team.lastTenWin}
          winPercent={team.winPctV2}
          gamesBehind={team.gamesBehind}
          index={index}
        />
      );
    });
  }

  eastTeams() {
    if (!this.props.standings) {
      return (
        <tr>
          <td>loading...</td>
        </tr>
      );
    }
    // to map through the returned standings data
    let { east } = this.props.standings;
    return east.map((team, index) => {
      return (
        <EastStandings
          name={team.teamId}
          key={team.teamId}
          wins={team.win}
          losses={team.loss}
          lastTenWin={team.lastTenWin}
          winPercent={team.winPctV2}
          gamesBehind={team.gamesBehind}
          index={index}
        />
      );
    });
  }

  render() {
    return (
      <div className="standings row justify-content-center py-5">
        <div className="col-lg-5 col-lg-offset-1 col-11">
          <h3 className="western_conference">
            <img src="../assets/nba_logos/west.png" alt="" /> West Standings{" "}
          </h3>
          <Table hover bordered>
            <thead>
              <tr className="panel-heading warning">
                <th>#</th>
                <th>Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Last Ten</th>
                <th>Win %</th>
                <th>GB</th>
              </tr>
            </thead>
            <tbody className="panel-body text-center">{this.westTeams()}</tbody>
          </Table>
        </div>
        <div className="col-lg-5 col-11">
          <h3 className="eastern_conference">
            <img src="../assets/nba_logos/east.png" alt="" /> East Standings
          </h3>
          <Table hover bordered>
            <thead>
              <tr className="panel-heading warning">
                <th>#</th>
                <th>Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Last Ten</th>
                <th>Win %</th>
                <th>GB</th>
              </tr>
            </thead>
            <tbody className="panel-body text-center">{this.eastTeams()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    standings: state.standingsData.standings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStandings: () => dispatch(fetchStandingsFromApi())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Standings);
