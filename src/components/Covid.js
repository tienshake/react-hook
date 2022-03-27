import React, { useState, useEffect } from 'react';
import axios from 'axios'
import useFetch from '../custom/fetch'
const Covid = () => {
    const { data: dataCovid } = useFetch('https://api.covid19api.com/country/vietnam?from=2022-03-01T00:00:00Z&to=2022-03-26T00:00:00Z')
    return (
        <table>
            {console.log(dataCovid)}
            <thead>
                <tr>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Active</th>
                    <th>Recovered</th>
                </tr>

            </thead>
            <tbody>
                {dataCovid && dataCovid.length > 0 && dataCovid.map((item, index) => {
                    return (
                        <tr key={index}>

                            <td>{item.Deaths}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Recovered}</td>

                        </tr>
                    )
                })}


            </tbody>

        </table>
    );
}

export default Covid;