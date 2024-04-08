import './HallOfFame.modules.css'

export function HallOfFame () {
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
        <div className='200-goals'>
            <h1>Клуб 200 гола</h1>
            <h4>Играч - име</h4>
            <img />
        </div>
        </>
    )
}