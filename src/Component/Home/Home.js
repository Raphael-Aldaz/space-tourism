import './style.scss';

function Home () {
    return(
        <div className='MainGrid'>
            <section className='home_text'>
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </section>
            <div className='home_explore'>
                <button>Explore</button>
            </div>
        </div>
    );
}

export default Home;