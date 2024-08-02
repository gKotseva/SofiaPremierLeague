import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getArabesk, getGripSocks, getKerelski, getVR7, getCairo } from "../../services/klasatsiiService";
import './main.modules.css';

export function Gallery() {
    const [info, setInfo] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pageClass, setPageClass] = useState('');

    const location = useLocation();
    const intervalRef = useRef(null);

    useEffect(() => {
        const fetchData = async (request) => {
            try {
                const response = await request();
                const normalizedData = response.map(item => ({
                    name: item.name || item.team_name || '',
                    path: item.image || '' 
                }));
                setInfo(normalizedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        let currentTitle = '';
        let currentDescription = '';
        let className = '';

        switch (location.pathname) {
            case '/igrata-arabesk':
                currentTitle = 'ИГРАТА НА ARABESK';
                currentDescription = 'SPL има удоволствието да си партнира с наргиле бара ARABESK! А това е най-новата ни игра, в която отборът, който вкара най-много голове в рамките на един месец (и има поне три изиграни мача) и отборът, който допусне най-малко попадения във вратата си в рамките на един месец (и има поне три изиграни мача) ще получават супер награда – безплатно наргиле и бутилка за отбора! Посете наргиле бар ARABESK и си изкарайте страхотно!';
                fetchData(getArabesk);
                break;
            case '/select-gol-mesets':
                // Handle this case when ready
                break;
            case '/kerelski-igrach-sedmitsa':
                currentTitle = 'KERELSKI ИГРАЧ НА СЕДМИЦАТА';
                currentDescription = 'Всяка седмица от KERELSKI BARBER & BEAUTY дават награда безплатна подстрежка за най-добре представилият се играч в дивизиите SELECT СУПЕРЛИГА, SPL MALUS-SPORT И SPL CAIRO! Наградата ще бъде присъждана по мнение на организаторите след всеки изигран кръг, където най-добре представилият се футболист ще бъде отличен. Всяка седмица победителят ще получава безплатно посещение в най-добрия салон Kerelski Barber & Beauty. Той се намира в кв. „Манастирски ливади“ на ул. Пирин 83. Ваучерът ще важи 3 месеца от получаването!';
                fetchData(getKerelski);
                break;
            case '/gripsocks-igrach-sedmitsa':
                currentTitle = 'GRIPSOCKS BG ИГРАЧ НА СЕДМИЦАТА';
                currentDescription = 'Всяка седмица най-добре представилият се играч от дивизиите SPL FLAME, SPL3 или SPL4 ще получава специална награда от нашите нови партньори – Gripsocks BG – най-удобните чорапи на пазара! Не пропускайте да си поръчате!';
                fetchData(getGripSocks);
                break;
            case '/vr7-igrach-sedmitsa':
                currentTitle = 'VR7 SERVICES ИГРАЧ НА СЕДМИЦАТА';
                currentDescription = 'VR7 Services Играч на седмицата е най-новата ни игра, в която най-добрият футболист от даден кръг ще може да погрижи по най-добрия начин за автомобила си с 50% отстъпка. Компанията VR7 Services предлага пране на тапицерия на коли и дивани с висококачествена машина, вътрешно и външно почистване, превоз и много други. Още за услугите на VR7 Services вижте на сайта VR7services.com';
                fetchData(getVR7);
                break;
            case '/barber-gol-sedmitsa':
                // Handle this case when ready
                break;
            case '/cairo-fareplay':
                currentTitle = 'CAIRO ФЕЪРПЛЕЙ!';
                currentDescription = 'Всеки месец отборът играл феърплей ще получи специална награда от топ заведението – Cairo Relax Bar  – бутилка и наргиле!';
                className = 'cairo-page';
                fetchData(getCairo);
                break;
            default:
                break;
        }

        setTitle(currentTitle);
        setDescription(currentDescription);
        setPageClass(className);

        // Cleanup interval on data fetch change
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };

    }, [location.pathname]);

    useEffect(() => {
        // Clear existing interval if any
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (info.length >= 6) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % info.length);
            }, 3000);
        } else {
            setCurrentIndex(0);
        }

        // Cleanup function to clear interval
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [info]);

    return (
        <div className={`gallery-container ${pageClass}`}>
            <div className="gallery-heading-container">
                <h1 className="gallery-heading">{title}</h1>
                <p className="gallery-description">{description}</p>
            </div>
            <div className='gallery-image-container'>
                <ul className='gallery-list' style={{ transform: `translateX(-${currentIndex * 100 / Math.min(info.length, 5)}%)` }}>
                    {info.map((item, index) => (
                        <li
                            key={index}
                            className={`gallery-item ${index === (currentIndex + 4) % info.length ? 'active' : ''}`}
                        >
                            <img
                                src={item.path}
                                alt={item.name}
                                className='gallery-image'
                            />
                            <h3>{item.name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
