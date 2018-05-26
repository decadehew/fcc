import React, { Component } from 'react';

class Table extends Component {


    render() {
        const { camperData, onRecentData, onAlltimeData, iconRecent, iconAllTime } = this.props;
        return (
            <div>
                <h3 className="ui top attached header table-header">
                    LeaderBoard
                </h3>
                <table className="ui blue fixed single line celled table">
                    <thead>
                        <tr className="center aligned">
                            <th className="one wide"> # </th>
                            <th>Camper Name</th>
                            <th className="hover" onClick={() => onRecentData()}>Points in past 30 days <i className={iconRecent}></i></th>
                            <th className="hover" onClick={() => onAlltimeData()}>All time points <i className={iconAllTime}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {camperData.map((recent, index) => (
                            <tr key={index}>
                                <td className="center aligned">{index+1}</td>
                                <td className="cName">
                                    <img src={recent.img} alt={recent.username}/>
                                    <span>{recent.username}</span>
                                </td>
                                <td className="center aligned">{recent.recent}</td>
                                <td className="center aligned">{recent.alltime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;