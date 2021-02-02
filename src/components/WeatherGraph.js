import React, { useMemo } from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';


export default function WeatherGraph({ data }){    
    const listComponent = useMemo(() => {
        return (
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={150}>
                    <AreaChart
                        width="100%"
                        height="100%"
                        data={data}
                        margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                        }}>
                        
                        <XAxis dataKey="name" axisLine={false} />
                        <Tooltip cursor={false}/>
                        <Area type="monotone" dataKey="max" stroke="#FFD035" fill="#FFF4DA" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );

    }, [data]);

    console.info(listComponent)
    console.info(data.length)

    return (data.length) ? listComponent: '';
    
}



