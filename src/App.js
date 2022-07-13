import React from 'react';
import './App.css';
import './button.css';
import logo from './components/logo192.png';
import homebg from './components/home-bg.png';
import photo1 from './components/photo1.png';
import photo2 from './components/photo2.png';
import photo3 from './components/photo3.png';
import photo4 from './components/photo4.png';
import photo5 from './components/photo5.png';
import photo6 from './components/photo6.png';
import photo7 from './components/photo7.png';
import photo8 from './components/photo8.png';
import photo9 from './components/photo9.png';
import photo10 from './components/photo10.png';
import { Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
function App() {
    return (
        <>
        
         <div><a href="#home"><img className="logo" src={logo} alt="" /></a></div>
            <section id="home">
                <Navbar collapseOnSelect expand="md"  >
                    <div className="Container">
            
                            <div className='Header_button'><a href="https://cryptobakers.gitbook.io/whitepaper-cryptobakers/"><button className="Whitepaper" onClick="choose(1)"></button></a></div>
                            <div className='Header_button'><a href="#team"><button className="Team" onClick="choose(1)"></button></a></div>
                            <div className='Header_button'><a href="#home"><button className="Play" onClick="choose(1)"></button></a></div>
                            <div className='Header_button'><a href="#roadmap"><button className="Roadmap" onClick="choose(1)"></button></a></div>
                            <div className='Header_button'><a href="#socials"><button className="Socials" onClick="choose(1)"></button></a></div>
                            
                        </div>

                </Navbar>
            </section>
            <>

                <div className='block'>
                    <img className="home-bg" src={homebg} alt="" />

                    <Container fixed className='home'>
                    </Container>
                    
                </div>
                <div className='main-txt'>
                                <div className="vector-box"> 
                               <div className="vector-box-txt">Play-to-Earn game on the Binance Smart Chain. </div>
                               </div>
                                    </div>
            </>
            
            <section id="roadmap">
                <div className="container_road">
                    <div className="team_header1">
                        <div className="header_text1">Road Map</div>
                        <div className="vector11"> </div>
                        <div className="vector21"> </div>
                    </div>
                    
                    <div className="road_case">
                        <div className="road_list">
                            <ol className='content_list'>
                                
                                <ul><div className='text'>1st<br /> Phase</div></ul>
                                <ul><div className='text'>2st<br />Phase</div></ul>
                                <ul><div className='text'>3st<br /> Phase</div></ul>
                                <ul><div className='text'>4st<br /> Phase</div></ul>
                            </ol>
                        </div>
                        <div className="road_tabl">
                            <div className='block_first'>
                                <p className="word">Launch<div className='border_text'> </div></p>
                            </div>
                            <div className='block_first'>
                                <div className="word">Private sale of NFT and token <div className='border_text'> </div></div>
                            </div>
                            <div className='block_first'>
                                <div className="word"> Public sale token and nft<div className='border_text'> </div></div>
                            </div>
                            <div className='block_first'>
                                <div className="word">Airdrops and Giveaways<div className='border_text'> </div></div>
                            </div>
                            <div className='block_first'>
                                <div className="word">Game launch<div className='border_text'> </div></div>
                            </div>
                            <div className='block_first'>
                                <div className="word">Launch Marketplace<div className='border_text'> </div></div>
                            </div>
                            <div className='block_first'>
                                <div className="word">Michelin stars<div className='border_text'> </div></div>
                            </div>
                            <div className='block_first'>
                                <div className="word">Cooking predictions<div className='border_text'> </div></div>
                            </div>
                            <div className='block_first'>
                                <p className="word">Chef Upgrade and leveling system<div className='border_text'> </div></p>
                            </div>
                            <div className='block_first'>
                                <div className="word">PVP<div className='border_text'> </div></div>
                            </div>
                            <div className='block_first'>
                                <p className="word">Sale of NFT restaurants <div className='border_text'> </div></p>
                            </div>
                            <div className='block_first'>
                                <div className="word">New functionality Renting<div className='border_text'> </div></div>
                            </div>
                            <div className='block_first'>
                                <p className="word">IOS and Android app<div className='border_text'> </div></p>
                            </div>
                            <div className='block_first'>
                                <div className="word">More new gameplay features<div className='border_text'> </div></div>
                            </div>
                          
                            
                            <div>
                            <div className="bok"> </div>
                            <div className="light"> </div>
                            </div>

                        </div>
                        
                    </div>
                    <div className='block-text'>
                    <p className='txt'>More information can be found in <a href="https://cryptobakers.gitbook.io/whitepaper-cryptobakers/"className='txt-paper'><p>white paper</p></a></p>
                            <div className='header__vector2'> </div>
                            <div className="white-paper-info">
                    <div className="block1-container">
                        <div className="whitepaper-logo"><a href="https://cryptobakers.gitbook.io/whitepaper-cryptobakers/cryptobakers/mechanics" ><img className="block1-logo whitepaper_source" alt="" /></a> </div>
                        <div className="block-surce">
                            <p className="text_surce">Cooking</p>
                            <p className="info_surce">Grow buy ingredients create your own dishes and earn</p>
                          
                            <div className="block-text_surce"> </div>
                        </div>
                    </div>
                    <div className="block2-container">
                        <div className="whitepaper-logo"><a href="https://cryptobakers.gitbook.io/whitepaper-cryptobakers/cryptobakers/mechanics"><img className="block2-logo whitepaper_source" alt="" /></a> </div>
                        <div className="block-surce">
                            <p className="text_surce">Michelin Stars</p>
                            <p className="info_surce">Participate in competitions among the best restaurants and win!</p>
                          
                            <div className="block-text_surce"> </div>
                        </div>
                    </div>
                    <div className="block3-container">
                        <div className="whitepaper-logo"><a href="https://cryptobakers.gitbook.io/whitepaper-cryptobakers/cryptobakers/mechanics"><img className="block3-logo whitepaper_source" alt="" /></a> </div>
                        <div className="block-surce">
                            <p className="text_surce">PvP</p>
                            <p className="info_surce">Compete as the best chefs with other restaurant owners</p>
                           
                            <div className="block-text_surce"> </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </section>
            <section id="team">
                <div className="wrapper1">
                    <div className='content1'>
                        <div className="container1">
                            <div className="container_team1">
                                <div className="team_header1">
                                    <div className="header_text1">Team</div>
                                    <div className="vector11"> </div>
                                    <div className="vector21"> </div>
                                </div>
                                <div className="team_showcase1">
                                    <div className="persona_1 persona">
                                        <div className="pos1">CEO<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo1} alt="avatars" />
                                        <div className="persona_name1">Alex</div>
                                    </div>
                                    <div className="persona_2 persona">
                                        <div className="pos1">Dev<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo2} alt="avatars" />
                                        <div className="persona_name1">Mitchell</div>
                                    </div>
                                    <div className="persona_3 persona">
                                        <div className="pos1">Dev<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo3} alt="avatars" />
                                        <div className="persona_name1">Dmitriy</div>
                                    </div>
                                    <div className="persona_4 persona">
                                        <div className="pos1">ART<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo4} alt="avatars" />
                                        <div className="persona_name1">Sam</div>
                                    </div>
                                    <div className="persona_5 persona">
                                        <div className="pos1">Marketing Director<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo5} alt="avatars" />
                                        <div className="persona_name1">Melissa</div>
                                    </div>
                                    <div className="persona_6 persona">
                                        <div className="pos1">Social Media Dev<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo6} alt="avatars" />
                                        <div className="persona_name1">Gregory</div>
                                    </div>
                                    <div className="persona_7 persona">
                                        <div className="pos1">Marketing<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo7} alt="avatars" />
                                        <div className="persona_name1">Lin</div>
                                    </div>
                                    <div className="persona_8 persona">
                                        <div className="pos1">Marketing<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo8} alt="avatars" />
                                        <div className="persona_name1">Roland</div>
                                    </div>
                                    <div className="persona_9 persona">
                                        <div className="pos1">Marketing<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo9} alt="avatars" />
                                        <div className="persona_name1">Jason</div>
                                    </div>
                                    <div className="persona_10 persona">
                                        <div className="pos1">Web Dev<div className='light1'> </div></div>
                                        <img className="avatar1" src={photo10} alt="avatars" />
                                        <div className="persona_name1">Ray</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="socials">
                <div className='futter'>
                    <header className='header'>
                        <div className='header__container _container'>
                            <p className='header__name'>Social Networks</p>
                            <div className='header__vector'> </div>
                            <div className='header__vector2'> </div>
                        </div>
                    </header>
                </div>

                <div className="social">
                    <div className="container_twitter">
                        <div className="logo_soc"><a href="https://twitter.com/Crypto__Bakers" ><img className="logo_twitter logo_source" alt="" /></a> </div>
                        <div className="surce">
                            <p className="text_surce">Our Twitter</p>
                            <div className="under_line"> </div>
                        </div>
                    </div>
                    <div className="container_discord">
                        <div className="logo_soc"><a href="https://discord.gg/Rp2v2ShmHG"><img className="logo_discord logo_source" alt="" /></a> </div>
                        <div className="surce">
                            <p className="text_surce">Our Discord Server</p>
                            <div className="under_line"> </div>
                        </div>
                    </div>
                    <div className="container_telegram">
                        <div className="logo_soc"><a href="https://t.me/CryptoBakersOfficial"><img className="logo_telegram logo_source" alt="" /></a> </div>
                        <div className="surce">
                            <p className="text_surce">Our Telegram Channel</p>
                            <div className="under_line"> </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer">
                <div className="footer_social">
                <div className="footer_line1"> </div>
                <div className="footer_logo"><a href="https://twitter.com/Crypto__Bakers"><img className="footer_twitter footer_source" alt="" /></a> </div>
                <div className="footer_logo"><a href="https://discord.gg/Rp2v2ShmHG"><img className="footer_discord footer_source" alt="" /></a> </div>
                <div className="footer_logo"><a href="https://t.me/CryptoBakersOfficial"><img className="footer_telegram footer_source" alt="" /></a> </div>
                </div>
                <div className="footer_blok">
                <div className="footer_line2"> </div>
                <p className="text_footer">Copyright 2022 CryptoBakers All right reserved</p>
                </div>

            </div>
            <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        </>
        
    );
}

export default App;
