import React, {useEffect, useState} from 'react';
import YouTube from "react-youtube";
import axios from "axios";
import './App.css';
import star from '../src/assets/img/Star 51.png';
import rocket from '../src/assets/img/roket.png';
import ceoPhoto from '../src/assets/img/ceo photo.png';
import photo from '../src/assets/img/photo1.png';
import preview from '../src/assets/img/preview_photo.png';
import podcast1 from '../src/assets/img/podcast1.png';
import podcast2 from '../src/assets/img/podcast2.PNG';
import podcast3 from '../src/assets/img/podcast3.png'
import podcast4 from '../src/assets/img/podcast4.png';
import podcast5 from '../src/assets/img/podcast5.png';
import groupCeo from '../src/assets/img/Group ceo.png';
import fb from './assets/img/fb.png';
import youtube from './assets/img/youtube.png';
import inst from './assets/img/inst.png';
import telegram from './assets/img/telegram.png';
import vk from './assets/img/vk.png';
import heart from './assets/img/heart.png';
import starOne from './assets/img/Star 2.png';
import starTwo from './assets/img/Star 3.png';

function App() {
    const socialLinks = [telegram, fb, vk, inst];
    const podcasts = [podcast1, podcast2, podcast3, podcast4, podcast5];
    const [arrayOfVideos, setArrayOfVideos] = useState([]);
    const [mainVideo, setMainVideo] = useState('');
    const [previewNewVideo, setPreviewNewVideo] = useState('');
    const [reversedVideos, setReversedVideos] = useState([]);
    const footerLinks = [telegram, fb, vk, youtube, inst]

    const API = async function () {
        await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC-z4vJuB2IH2h_Pn7etU-JnQMiKmkvRVQ&channelId=UCd10-psu5GF3neJYCQ7fkVg&part=snippet,id&order=date&maxResults=20').then(response => {
            setArrayOfVideos(response.data.items);
            setMainVideo(response.data.items[19].id.videoId);
            setPreviewNewVideo(response.data.items[0].snippet.thumbnails.medium.url)
        })
    }

    useEffect(() => {
        API()
    }, [])

    useEffect(() => {
        setReversedVideos(arrayOfVideos.reverse())
    }, [arrayOfVideos])

    const handleClick = function (evt) {
        evt.preventDefault();
        console.log(evt.currentTarget.className)
        if (evt.currentTarget.className !== mainVideo) {
            setMainVideo(evt.currentTarget.className)
        }

    }


    console.log(mainVideo)

    return (
        <div className="App">
            <header className="header">
                <h1 className={'show'}>
                    Бизнес-шоу:
                </h1>
                <h1 className={'show-name'}>
                    Маркетинг <span>vs</span> продажи
                    <img src={star} className="star" alt="star"/>
                </h1>
            </header>
            <div>
                <div className={'preview'}>
                    <div className={'container'}>
                        <div className={'show-subscribe'}>
                            <p>
                                Бизнес-шоу, в котором общаемся с экспертами digital-маркетинга и руководителями
                                продаж о том, как совместно достигать потрясающих результатов.
                            </p>
                             <button> Подписаться</button>
                            <img src={rocket} alt={'rocket'}/>

                        </div>
                        <div className={'social'}>
                            <p>Слушайте нас, где удобно</p>
                            <div className={'social-container'}>
                                {
                                    podcasts.map(podcast => {
                                        return <a href={'#'} key={podcast} ><img src={podcast} alt={'podcast'} width={50}
                                                                     height={50}/></a>
                                    })
                                }
                            </div>
                            <img src={photo} className={'photo'} alt={'ceo'}/>
                            <div className={'ceo-photo-text'}> Дима Сергеев <br/> <span>CEO Carrot quest</span></div>


                        </div>
                    </div>

                    <img src={ceoPhoto} className={'ceo-photo'} alt={'ceo-photo'}/>


                    <div className={'new'}>
                        <img src={preview} className={'second-photo'} alt={'photo'}/>
                        <a href={'#'}>Новый выпуск</a>
                        <img src={previewNewVideo} className={'video-preview'} width={418} height={235} alt={'preview'}/>
                    </div>

                </div>
                <div className={'release'}>
                    <h2>
                        Выпуски
                    </h2>
                    <p>
                        Подкаст, в котором обсуждаем, как прекратить войну маркетинга и продаж. Смотрите интервью с
                        экспертами digital-маркетинга и руководителями продаж. Рассказываем реальные истории и практики
                        работы этих двух направлений.
                    </p>
                    <div className={'release-container'}>
                        <img src={groupCeo} alt={'group of people'}/>
                        <span>Для SMO, руководителей Digital-маркетинга, ответственного за привлечения лидов</span>
                    </div>
                    <div className={'youtube-container'}>
                       <YouTube videoId={mainVideo}/>

                        <div className={'list-of-videos'} >
                            {
                                reversedVideos.map((video, index) => {
                                    return <div onClick={handleClick} about={video.id.etag} key={video.id.etag} className={video.id.videoId === mainVideo? 'selected' : `${video.id.videoId}`} >
                                        <span>{Math.abs(index - 20)}</span>
                                        <img src={video.snippet.thumbnails.default.url} width={131} height={74}
                                             alt={'preview'}/>
                                        <p>{video.snippet.title}</p>
                                    </div>
                                })}

                        </div>


                    </div>

                    <div className={'links'}>
                        <span>Поделиться:</span>
                        {
                            socialLinks.map(link => {
                                return <a key={link} href={'#'}><img src={link} height={20.61} width={17.67}
                                                                     alt={'link'}/> </a>
                            })
                        }
                    </div>

                </div>
            </div>
            <footer>
                <div className={'social-footer'}>
                    <p>
                        Слушайте и читайте, где удобно
                    </p>
                    <div className={'footer-container'}>
                        {
                            footerLinks.map(link => {
                                return <a href={'#'}>
                                    <div key={link} className={'footer-link'}><img src={link} height={30} width={37.5}
                                                                                   alt={'link'}/></div>
                                </a>
                            })
                        }
                        <img src={heart} alt={'heart'} className={'heart'}/>
                    </div>

                </div>
                <div className={'footer-subscribe'}>
                    <img src={starOne} alt={'star'} className={'star-one'}/>
                    <img src={starTwo} alt={'star'} className={'star-two'}/>

                    <div className={'footer-subscribe-container'}>
                        <h2>
                            Подпишитесь на уведомления<br/>
                            о выходе новых материалов
                        </h2>

                        <div className={'input-container'}>
                            <input placeholder={'Введите ваш e-mail'}/>
                            <button>Подписаться</button>
                        </div>

                    </div>


                </div>
            </footer>
        </div>
    );
}

export default App;
