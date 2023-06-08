
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Slider = () => {
    return (
        <div>
            <Carousel>
                <div >
                    <img  src="https://media.istockphoto.com/id/1257809394/photo/summer-soccer-football-camp-school-for-children-training.webp?b=1&s=170667a&w=0&k=20&c=9_H2Te3TEUbT1KKNRV79_f891JoB-Dr29tDbp9oaDMg=" />
                    <p className=' mb-16 font-bold text-white  bg-gray-400 legend text-4xl'>This is our Sports academy . You can build up your <br /> Carriculam Activities from ou academy</p>
                </div>
                <div >
                    <img src="https://media.istockphoto.com/id/827507488/photo/junior-football-player-at-practice.webp?b=1&s=170667a&w=0&k=20&c=cDQg2aSTC2T_BsQ_j_fR4e5FjtM8Nm4IBSHzqXwfHXg=" />
                    <p className=' mb-16 font-bold text-white  bg-gray-400 legend text-4xl'>This is our Sports academy . You can build up your <br /> Carriculam Activities from ou academy</p>
                </div>
                <div >
                    <img src="https://media.istockphoto.com/id/1169395991/photo/futsal.webp?b=1&s=170667a&w=0&k=20&c=FgW2lWXmY6xfPifauZk9ud8TOJBsfzuzcVAiBkkqpx0=" />
                    <p className=' mb-16 font-bold text-white  bg-gray-400 legend text-4xl'>This is our Sports academy . You can build up your <br /> Carriculam Activities from ou academy</p>
                </div>
                <div >
                    <img src="https://media.istockphoto.com/id/1148035886/photo/young-football-players-kicking-ball-on-soccer-field-soccer-horizontal-background-youth-junior.webp?b=1&s=170667a&w=0&k=20&c=fXjDkUHFQYrJRBadz0b4wmBzKja2w0BRxQ9GwImJUoI=" />
                    <p className=' mb-16 font-bold text-white  bg-gray-400 legend text-4xl'>This is our Sports academy . You can build up your <br /> Carriculam Activities from ou academy</p>
                </div>
            </Carousel>
            ;
        </div>
    );
};

export default Slider;