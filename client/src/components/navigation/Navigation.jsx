import './Navigation.modules.css'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <>
            <div className="logo-container">
                <img src="./spl-logo.png" className="logo" alt="SPL Logo" />
            </div>
            <div className='menu-container'>
                <ul>
                    <li className='menu-item'><Link to="/">Начало</Link></li>
                    <li className='menu-item'><Link to="/novini">Новини <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/nakazaniq">Наказания</Link></li>
                            <li><Link to="/mix-zona">Миксзона</Link></li>
                            <li><Link to="/prava">Играчи със спрени състезателни права</Link></li>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to="/klasatsii">Класации <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/select-gol-mesets">Select - гол на месеца</Link></li>
                            <li><Link to="/kerelski-igrach-sedmitsa">Kerelski - играч на седмицата</Link></li>
                            <li><Link to="/gripsocks-igrach-sedmitsa">GripSocks BG - играч на седмицата</Link></li>
                            <li><Link to="/vr7-igrach-sedmitsa">VR7 Services - играч на седмицата</Link></li>
                            <li><Link to="/barber-gol-sedmitsa">Barber Ship Marty - гол на седмицата</Link></li>
                            <li><Link to="/cairo-fareplay">Cairo - феърплей</Link></li>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to="/sustezaniq">Състезания <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/zimna-kupa">Зимна купа SPL MK Football &#11166;</Link>
                                <ul className='dropdown-second'>
                                    <li><Link to="/klasirane-programa-resultati">Класиране, програма, резултати – 2024</Link></li>
                                    <li><Link to="/shema-turnir">Схема на турнира - 2024</Link></li>
                                    <li><Link to="/zimna-kupa-statistica">Статистика</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/superliga">Select Суперлига</Link></li>
                            <li><Link to="/malus">SPL Malus-Sport</Link></li>
                            <li><Link to="/cairo">SPL 1 Cairo</Link></li>
                            <li><Link to="/flame">SPL 2 Flame</Link></li>
                            <li><Link to="/arabesk">SPL 3 Arabesk</Link></li>
                            <li><Link to="/spl4">SPL 4</Link></li>
                            <li><Link to="/spl5">SPL 5</Link></li>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to="/statistika">Статистика <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/statistica-superliga">Select Суперлига</Link></li>
                            <li><Link to="/statistica-malus">SPL Malus-Sport</Link></li>
                            <li><Link to="/statistica-cairo">SPL 1 Cairo</Link></li>
                            <li><Link to="/statistica-flame">SPL 2 Flame</Link></li>
                            <li><Link to="/statistica-arabesk">SPL 3 Arabesk</Link></li>
                            <li><Link to="/statistica-spl4">SPL 4</Link></li>
                            <li><Link to="/statistica-spl5">SPL 5</Link></li>
                            <li><Link to="/statistica-sever">SPL Север</Link></li>
                            <li><Link to="/statistica-iztok">SPL Изток</Link></li>
                            <li><Link to="/statistica-summer">Malus Summer Football Cup - 2020</Link></li>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to="/hall-of-fame">Hall of Fame</Link></li>
                    <li className='menu-item'><Link to="/za-nas">За нас <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/kontakti">Контакти</Link></li>
                            <li><Link to="/pravila">Правила</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}