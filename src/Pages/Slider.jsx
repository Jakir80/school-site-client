

const Slider = () => {
    return (

        <div className="carousel md:w-75 sm:w-auto  ">
            <div id="slide1" className="carousel-item relative sm:w-auto md:w-full  rounded-lg">
                <img src="https://media.istockphoto.com/id/1434690149/photo/ball-on-the-green-field-in-soccer-stadium-ready-for-game-in-the-midfield.webp?b=1&s=170667a&w=0&k=20&c=5Igcbt2oEQYrdsT5bejP3n2tWoVkKRhGHkyMCoD2rr4=" className="md:w-full sm:w-auto rounded-lg" />
                <div className="absolute flex justify-center sm:w-auto md:gap-20 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full left-0 top-0      w-1/3 space-y-7 pl-8 rounded-lg">
                    <div>

                        <div>
                            <h2 className='md:text-6xl text-white font-bold'>This is our Academic website where is you can buy class</h2>
                            <p className='text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus blanditiis earum explicabo aspernatur aut quam sint! Vitae autem a quam?.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative sm:w-auto md:w-full">
                <img src="https://media.istockphoto.com/id/1487475752/photo/soccer-training-for-little-school-children-group-of-kids-with-football-soccer-balls-at.jpg?s=612x612&w=0&k=20&c=HPqt93Pwh_H7Sv521C_CIeJOjvC-E3Vg0ZnGZvkFnWo=" className="w-full rounded-lg" />
                <div className="absolute flex   md:gap-20    justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full left-0 top-0      w-1/3 space-y-7 pl-8 rounded-lg">
                    <div>

                        <div>
                            <h2 className='md:text-6xl text-white font-bold'>This is Our official Academic website </h2>
                            <p className='text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil enim necessitatibus sed quia maiores voluptates! Nulla numquam animi maxime.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative sm:w-auto md:w-full">
                <img src="https://media.istockphoto.com/id/1248741443/photo/soccer-training-warm-up-and-slalom-drills-boys-practicing-european-soccer-on-the-grass-school.webp?b=1&s=170667a&w=0&k=20&c=V9QczHO-HMQHQI5dd60nneAF7paAIsrLcXCtUh6q41M=" className="w-full rounded-lg" />
                <div className="absolute flex justify-center sm:gap-4  md:gap-20 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full left-0 top-0      w-1/3 space-y-7 pl-8 rounded-lg">
                    <div>

                        <div>
                            <h2 className='md:text-6xl text-white font-bold'>This is our Academic website where is you can buy class</h2>
                            <p className='text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A in, molestiae aliquam error vero repudiandae deleniti id corrupti ipsa atque.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/1183940092/photo/footballer-dribbling-ball-on-training-between-orange-cones-young-football-player-in-sports.webp?b=1&s=170667a&w=0&k=20&c=Ml9tjfK4Mc9Ur0hO2ivh8DUcBZFfBW-fxZiROLymR-M=" className="w-full rounded-lg" />
                <div className="absolute flex  md:gap-20    justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full left-0 top-0      w-1/3 space-y-7 pl-8 rounded-lg">
                    <div>

                        <div>
                            <h2 className='md:text-6xl text-white font-bold'>This is our Academic website where is you can buy class</h2>
                            <p className='text-white mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nisi totam sit consequatur dolor fugit officia possimus a omnis perspiciatis.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Slider;