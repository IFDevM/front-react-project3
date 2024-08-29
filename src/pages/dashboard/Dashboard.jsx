import React from 'react';
import './Dashboard.css';

function Dashboard() {
    

    return (
        <div className='head-dashboard'>
            
            <h1>Tableau de bord </h1>
            

            <h2>Les indicateurs clés</h2>

            <div className='key-numbers'>

                <div className='block-dashboard'>
                    <h3>Nombres de Femmes</h3>
                    <p>25087</p>
                </div>

                <div className='block-right-dashboard'>
                    <h3>Nombres d'hommes</h3>
                    <p>25087</p>
                </div>

            </div>

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
