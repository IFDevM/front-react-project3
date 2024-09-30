import React from 'react';
import Pivot from '../../components/Pivot/Pivot';
import './Dashboard.css';

function Dashboard() {
    

    return (
        <div className='head-dashboard'>
            
            <Pivot/>


            <div className='key-numbers-l2'>
                <h2>Classement des villes avec le plus de naissances</h2>

                <div className='block-dashboard'>
            
                    <table>

                        <thead>

                            <th>
                                #
                            </th>

                            <th>
                                Villes
                            </th>

                            <th>
                                Nbr de naissances
                            </th>

                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    New York
                                </td>
                                <td>
                                    398
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    New York
                                </td>
                                <td>
                                    398
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    New York
                                </td>
                                <td>
                                    398
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}

export default Dashboard;
