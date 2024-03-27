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
                    <li className='menu-item'><Link to="/">Новини <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/">Наказания</Link></li>
                            <li><Link to="/">Миксзона</Link></li>
                            <li><Link to="/">Играчи със спрени състезателни права</Link></li>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to="/">Класации <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/">Select - гол на месеца</Link></li>
                            <li><Link to="/">Kerelski - играч на седмицата</Link></li>
                            <li><Link to="/">GripSocks BG - играч на седмицата</Link></li>
                            <li><Link to="/">VR7 Services - играч на седмицата</Link></li>
                            <li><Link to="/">Barber Ship Marty - гол на седмицата</Link></li>
                            <li><Link to="/">Cair - феърплей</Link></li>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to="/">Състезания <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/">Зимна купа SPL MK Football &#11166;</Link>
                                <ul className='dropdown-second'>
                                    <li><Link to="/">Класиране, програма, резултати – 2024</Link></li>
                                    <li><Link to="/">Схема на турнира - 2024</Link></li>
                                    <li><Link to="/">Статистика</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Select Суперлига</Link></li>
                            <li><Link to="/">SPL Malus-Sport</Link></li>
                            <li><Link to="/">SPL 1 Cairo</Link></li>
                            <li><Link to="/">SPL 2 Flame</Link></li>
                            <li><Link to="/">SPL 3 Arabesk</Link></li>
                            <li><Link to="/">SPL 4</Link></li>
                            <li><Link to="/">SPL 5</Link></li>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to="/">Статистика <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/">Select Суперлига</Link></li>
                            <li><Link to="/">SPL Malus-Sport</Link></li>
                            <li><Link to="/">SPL 1 Cairo</Link></li>
                            <li><Link to="/">SPL 2 Flame</Link></li>
                            <li><Link to="/">SPL 3 Arabesk</Link></li>
                            <li><Link to="/">SPL 4</Link></li>
                            <li><Link to="/">SPL 5</Link></li>
                            <li><Link to="/">SPL Север</Link></li>
                            <li><Link to="/">SPL Изток</Link></li>
                            <li><Link to="/">Malus Summer Football Cup - 2020</Link></li>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to="/">Hall of Fame</Link></li>
                    <li className='menu-item'><Link to="/">За нас <span>&#11167;</span></Link>
                        <ul className='dropdown'>
                            <li><Link to="/">Записване</Link></li>
                            <li><Link to="/">Правила</Link></li>
                            <li><Link to="/">Контакти</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}