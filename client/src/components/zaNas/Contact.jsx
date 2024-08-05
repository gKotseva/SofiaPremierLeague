import './Contact.modules.css'

export function Contact () {
    return (
        <>
        <div className='holder'>
            <div className='signIn'>
                <img src='icons8-email-64.png'></img>
                <h1>Записване</h1>
                <a href="./src/files/SPL-Zapisvane-sezon-2021-22.doc" download>ИЗТЕГЛЕТЕ БЛАНКАТА ТУК</a>
                <p>Изпратете попълнената бланка заедно с логото на отбора на мейл адреса ни:</p>
                <span>spl.team.info@gmail.com</span>
            </div>
            <div className='contact'>
                <img src='icons8-phone-64.png'></img>
                <h1>Контакти</h1>
                <p>0876703085 - Стефан Цветков</p>
                <p>0876383834 - Даниел Васев</p>
                <p>0886341847 - Димитър Пенев</p>
            </div>
            <div className='address'>
                <img src='icons8-address-50.png'></img>
                <h1>Адрес</h1>
                <p>Царско Село</p>
                <p>кв.Драгалевци на ул."Околовръстен път 72" - до бензиностанция "Еко"</p>
                <p>Терен - 44х22 метра</p>
            </div>
        </div>
        <div className='socials'>
            <a href='https://www.facebook.com/sofiapremierleague'><img src='icons8-facebook-48.png' /></a>
            <a href='https://www.instagram.com/splofficial1/'><img src='icons8-instagram-48.png'></img></a>
            <a href='https://www.youtube.com/@spltv2183'><img src='icons8-youtube-48.png'></img></a>
        </div>
        </>
    )
}