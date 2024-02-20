import './footer.scss';
import X from '../../icons/social-media.png';
import Pinterest from '../../icons/pinterest.png';
import Instagram from '../../icons/instagram (1).png';
import Facebook from '../../icons/social (3).png';


export default function Footer (){
        return (
            <div className='__footer'>   
                <section className='__footer--sankofa'>
                    <h3> SANKOFA TOURS</h3>
                    <p>E-News Sign Up</p>
                    <p>In the News</p>
                    <p>Contact Us</p>
                    <p>Maps & Transportation</p>
                    <p>Careers</p>   
                </section>
                <section className='__footer--business'>
                    <h3>BUSINESS</h3>
                    <p>Meeting Professionals</p>
                    <p>Tourism Professionals</p>
                    <p>Media Room</p>
                    <p>Members</p>
                    <p>Submit An Event</p>
                </section>
                <section className='__footer--logo'>
                    <h3>GET SOCIAL</h3>
                    <figure className='__footer--icons'>
                        <img src={X} alt="X" />
                        <img src={Pinterest} alt="Pinterest" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Facebook} alt="Facebook" />
                    </figure>

                </section>

            </div>
        )
}