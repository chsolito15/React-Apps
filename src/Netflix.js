import img1 from './images/netFlix.png';

export default function NavBar(){

    return <div>

        <div className='contaniner'>

        <nav className="nav">
        <a href="/" className="site-title"><img className='logo' src={img1}/></a>
        <ul>
            <li>
                <a href="/romantic">Romantic</a>
            </li>
            <li>
                <a href="/comedy">Comedy</a>
            </li>
            <li>
                <a href="/horror">Horror</a>
            </li>
            <li>
                <a href="/classic">Classic</a>
            </li>
            <li>
                <a href="/true-story">True story</a>
            </li>
            <li>
                <a href="/history">History</a>
            </li>
        </ul>
    </nav>

    <div className="video-content">
        <iframe className='video-items' width="400" height="250" src="https://www.youtube.com/embed/sNO4X__dagA" title="The Tinder Swindler | Official Clip - The Man With Many Names | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className='video-items' width="400" height="250" src="https://www.youtube.com/embed/IE8HIsIrq4o" title="The Adam Project | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className='video-items' width="400" height="250" src="https://www.youtube.com/embed/P-E-IGQCsPo" title="The Sea Beast | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className='video-items' width="400" height="250" src="https://www.youtube.com/embed/Di310WS8zLk" title="Wednesday Addams | Official Teaser | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className='video-items' width="400" height="250" src="https://www.youtube.com/embed/BmllggGO4pM" title="THE GRAY MAN | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className='video-items' width="400" height="250" src="https://www.youtube.com/embed/SL9aJcqrtnw" title="DON’T LOOK UP | Official Teaser Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
       

        <footer>
        <p>
        **This is just a fake portfolio. All the projects and contact details
        given are not real.
      </p>
      <p>
        © Created for Future Tech BootCamp
      </p>
        </footer>
        </div>     
</div>
}