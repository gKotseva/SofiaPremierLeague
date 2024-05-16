import { useEffect, useState } from 'react'
import './HallOfFame.modules.css'
import * as service from '../../services/klasatsiiService'


export function HallOfFame () {
    const [award5Years, setAward5Years] = useState([])

    useEffect(() => {
        const fetchAward5Years = async () => {
            try {
                const response = await service.getAward5Years()
                setAward5Years(response)
            }
            catch (error) {
                console.error('Error fetching awards: ', error)
            }
        }
        fetchAward5Years()
    }, [])

    const [award200Goals, setAward200Goals] = useState([])

    useEffect(() => {
        const fetchAward200Goals = async () => {
            try {
                const response = await service.getAward200Goals()
                setAward200Goals(response)
            }
            catch (error) {
                console.error('Error fetching awards: ', error)
            }
        }
        fetchAward200Goals()
    }, [])

    return (
        <>
        <div className='hall-of-fame-table'>
            <h1>Hall of fame</h1>
            <table className="hall-of-fame">
                <thead>
                    <tr>
                        <th>Сезон</th>
                        <th>Суперлига - Шампион</th>
                        <th>SPL - Шампион</th>
                        <th>SPL1 - Шампион</th>
                        <th>SPL2 - Шампион</th>
                        <th>SPL3 - Шампион</th>
                        <th>SPL4 - Шампион</th>
                        <th>SPL Изток - Шампион</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2016/2017</td>
                        <td></td>
                        <td>Шампион 1</td>
                        <td>Шампион 2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2017/2018</td>
                        <td></td>
                        <td>Шампион 1</td>
                        <td>Шампион 2</td>
                        <td>Шампион 3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2018/2019</td>
                        <td>Шампион 1</td>
                        <td>Шампион 2</td>
                        <td>Шампион 3</td>
                        <td>Шампион 4</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2019/2020</td>
                        <td>Шампион 1</td>
                        <td>Шампион 2</td>
                        <td>Шампион 3</td>
                        <td>Шампион 4</td>
                        <td>Шампион 5</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2020/2021</td>
                        <td>Шампион 1</td>
                        <td>Шампион 2</td>
                        <td>Шампион 3</td>
                        <td>Шампион 4</td>
                        <td>Шампион 5</td>
                        <td>Шампион 6</td>
                        <td>Шампион 7</td>
                    </tr>
                    <tr>
                        <td>2021/2022</td>
                        <td>Шампион 1</td>
                        <td>Шампион 2</td>
                        <td>Шампион 3</td>
                        <td>Шампион 4</td>
                        <td>Шампион 5</td>
                        <td>Шампион 6</td>
                        <td>Шампион 7</td>
                    </tr>
                    <tr>
                        <td>2022/2023</td>
                        <td>Шампион 1</td>
                        <td>Шампион 2</td>
                        <td>Шампион 3</td>
                        <td>Шампион 4</td>
                        <td>Шампион 5</td>
                        <td>Шампион 6</td>
                        <td>Шампион 7</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='fastest-goal'>
            <h1>Най-бърз гол:</h1>
            <p>Емо Стефанов (Titanite Old Stars) – 9 секунда в мача Вълците – Titanite Old Stars (2:2 – 7 юни 2020 година)</p>
            <iframe src="https://www.youtube.com/watch?v=DKaqVCd3SjY"></iframe>
        </div>
        <div className='200-goals-container'>
            <h1>Клуб 200 гола</h1>
            {award200Goals.map((award) => 
                <div className='200-goals-card' key={award.id}>
                    <h4>{award.name}</h4>
                    <img src={award.image} />
                </div>
        )}
        </div>
        <div className='5-years-container'>
            <h1>5 години в SPL</h1>
            {award5Years.map((award) => 
                <div className='5-years-card' key={award.id}>
                    <h4>{award.name}</h4>
                    <img src={award.image} />
            </div>
            )}
        </div>
        </>
    )
}